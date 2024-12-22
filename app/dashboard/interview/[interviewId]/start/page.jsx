"use client";

import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import QuestionsSection from './_components/QuestionsSection';
import RecordAnsSection from './_components/RecordAnsSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const StartInterview = ({ params }) => {
    const [interviewData, setInterviewData] = useState(null);
    const [mockInterviewQuestions, setMockInterviewQuestions] = useState([]);
    const [activeQuestionIndex, setActivequestionIndex] = useState(0);

    useEffect(() => {
        if (!params.interviewId) {
            console.error("Missing interviewId in route parameters.");
            return;
        }
        GetInterviewDetails();
    }, []);

    const GetInterviewDetails = async () => {
        try {
            const result = await db.select().from(MockInterview)
                .where(eq(MockInterview.mockId, params.interviewId));

            if (!result || result.length === 0) {
                console.error("No interview data found for the given ID:", params.interviewId);
                return;
            }

            const jsonMockResp = JSON.parse(result[0].jsonMockResp);
            console.log("Fetched JSON Mock Response:", jsonMockResp);

            setMockInterviewQuestions(jsonMockResp); // Set the questions
            setInterviewData(result[0]); // Set the interview data correctly. starts from que 1
        } catch (error) {
            console.error("Error fetching interview details:", error);
        }
    };

    if (!mockInterviewQuestions.length || !interviewData) {
        return <div>Loading interview data...</div>;
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Questions */}
                <QuestionsSection
                    mockInterviewQuestions={mockInterviewQuestions}
                    activeQuestionIndex={activeQuestionIndex}
                />

                {/* Video/Audio recording */}
                <RecordAnsSection
                    mockInterviewQuestions={mockInterviewQuestions}
                    activeQuestionIndex={activeQuestionIndex}
                    interviewData={interviewData}
                />
            </div>
            <div className='flex justify-end gap-6'>
                {activeQuestionIndex > 0 && <Button onClick={() => setActivequestionIndex(activeQuestionIndex - 1)}>Previous Question</Button>}

                
                {activeQuestionIndex < mockInterviewQuestions.length - 1 && (
                    <Button onClick={() => setActivequestionIndex(activeQuestionIndex + 1)}>
                        Next Question
                    </Button>
                )}

                {activeQuestionIndex === mockInterviewQuestions.length - 1 && 
                    <Link href={`/dashboard/interview/${interviewData?.mockId}/feedback`}>
                        <Button>End Interview</Button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default StartInterview;
