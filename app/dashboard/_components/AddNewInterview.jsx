"use client"

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { chatSession } from '@/utils/GeminiAIModel'
import { Jost } from 'next/font/google'
import { LoaderCircle } from 'lucide-react'
import { MockInterview } from '@/utils/schema'
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs'
import moment from 'moment/moment'
import { db } from '@/utils/db'
import { useRouter } from 'next/navigation'


const AddNewInterview = () => {
  const [openDailog, setOpenDailog] = useState(false)
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const {user} = useUser();
  const router = useRouter();

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
  
    try {
      console.log(jobPosition, jobDesc, jobExperience);
  
      const InputPrompt = `Job Position: ${jobPosition}, Job Description: ${jobDesc}, Years of Experience: ${jobExperience}. Depends on this information please give me ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} interview questions with answer in Json Format. Give question and answer as field in JSON. And remove ${'```json'} from starting and ${'```'} from the end of output`;
  
      // const result = await chatSession.sendMessage(InputPrompt);
      // const MockJsonResp = (await result.response.text())
      //   .replace('```json', '')
      //   .replace('```', '')

      const result = await chatSession.sendMessage(InputPrompt);
      const responseText = await result.response.text();
      console.log('Response Text:', responseText); // Debug the response text
      const MockJsonResp = responseText.replace('```json', '').replace('```', '');
      console.log('Modified Response:', MockJsonResp); // Check the result


      console.log(JSON.parse(MockJsonResp));
      setJsonResponse(MockJsonResp);
  
      if (MockJsonResp) {
        const resp = await db
          .insert(MockInterview)
          .values({
            mockId: uuidv4(),
            jsonMockResp: MockJsonResp,
            jobPosition,
            jobDesc,
            jobExperience,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            createdAt: moment().format('DD-MM-YYYY'),
          })
          .returning({ mockId: MockInterview.mockId });
  
        console.log('Inserted Id:', resp);
  
        if (resp) {
          setOpenDailog(false);
          router.push(`/dashboard/interview/${resp[0]?.mockId}`);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false); // Ensure loading is stopped regardless of the outcome
    }
  };
  

  return (
    <div>
      <div
        className='p-9 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'
        onClick={() => setOpenDailog(true)}
      >
        <h2 className='text-lg text-center'>+ Add New</h2>
      </div>
      <Dialog open={openDailog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your job Interview
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>Add Details about your job position/role, Job description and years of experience</h2>

                  <div className='mt-7 my-3'>
                    <label>Job Role/Job Position</label>
                    <Input
                      placeholder="Ex. Full Stack Developer"
                      required
                      onChange = {(e) => setJobPosition(e.target.value)}
                    />
                  </div>

                  <div className='my-3'>
                    <label>Job Description/ Tech Stack (In Short)</label>
                    <Textarea
                      placeholder="Ex. React, Angular, NodeJs, MySql etc"
                      required
                      onChange = {(e) => setJobDesc(e.target.value)}
                    />
                  </div>

                  <div className='my-3'>
                    <label>Years of Experience</label>
                    <Input
                      placeholder="Ex. 5"
                      type='number'
                      max = '50'
                      min = '0'
                      onChange = {(e) => setJobExperience(e.target.value)}
                      required
                    />
                  </div>

                </div>
                <div className='flex gap-4 justify-end'>
                  <Button
                    variant="ghost"
                    onClick={() => setOpenDailog(false)}
                    type='button'>
                    Cancle
                  </Button>
                  <Button type='submit'disabled={loading}>
                    {loading? 
                      <><LoaderCircle className='animate-spin'/> Generating From AI</> 
                      : 'Start Interview'
                    }
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default AddNewInterview