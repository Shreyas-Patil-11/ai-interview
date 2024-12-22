"use client"

import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Lightbulb, WebcamIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Webcam from 'react-webcam';

const Interview = ({ params }) => {

    const [interviewData, setInterviewData] = useState();
    const [webCamEnable, setWebCamEnable] = useState(false);

    useEffect(() => {
        console.log(params.interviewId);
        GetInterviewDetails();
    }, [])


    // used to get Interview Details by mockId/ Interview id

    const GetInterviewDetails = async () => {
        const result = await db.select().from(MockInterview)
            .where(eq(MockInterview.mockId, params.interviewId))

        console.log(result);
        setInterviewData(result[0] || null)
    }


    return (
        <div className='my-10 '>
            <h2 className='font-bold text-2xl'>Let's Get Started</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className='flex flex-col my-5 gap-5 '>
                    {interviewData ? (
                        <>
                            <div className='flex flex-col p-5 rounded-lg border gap-5'>
                                <h2 className='text-lg'>
                                    <strong>Job Role/Job Position: </strong>
                                    {interviewData.jobPosition}
                                </h2>
                                <h2 className='text-lg'>
                                    <strong>Job Description/ Tech Stack: </strong>
                                    {interviewData.jobDesc}
                                </h2>
                                <h2 className='text-lg'>
                                    <strong>Years of Experience: </strong>
                                    {interviewData.jobExperience}
                                </h2>
                            </div>
                            <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
                                <h2 className='flex gap-2 items-center text-yellow-500'><Lightbulb /> <strong>Information</strong></h2>

                                <h2 className='mt-3 text-yellow-500'>{process.env.NEXT_PUBLIC_INFORMATION}</h2>
                            </div>
                        </>
                    ) : (
                        <p className='text-lg'>Loading job details...</p>
                    )}
                </div>

                <div>
                    {webCamEnable
                        ? <Webcam
                            onUserMedia={() => setWebCamEnable(true)}
                            onUserMediaError={() => setWebCamEnable(false)}
                            mirrored={true}
                            style={{
                                height: 300,
                                width: 300
                            }} />
                        : <>
                            <WebcamIcon className='h-72 w-full p-20 bg-secondary my-3 rounded-lg border' />
                            <Button
                            variant="ghost"
                                onClick={() => setWebCamEnable(true)}
                                className='w-full'
                            >
                                Enable Web Cam and Microphone
                            </Button>
                        </>}
                </div>
            </div>
            
            <div className="flex justify-end items-end">
                <Link href={`/dashboard/interview/${params.interviewId}/start`}>
                    <Button>Start Interview</Button>
                </Link>
            </div>
        </div>
    )
}

export default Interview

