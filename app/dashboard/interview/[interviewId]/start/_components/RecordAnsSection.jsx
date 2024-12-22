"use client"

import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import { Mic, StopCircle } from 'lucide-react'
import { toast } from 'sonner'
import { chatSession } from '@/utils/GeminiAIModel'
import { db } from '@/utils/db'
import moment from 'moment'
import { UserAnswer } from '@/utils/schema'

const RecordAnsSection = ({ mockInterviewQuestions, activeQuestionIndex, interviewData }) => {
  const [userAnswer, setUserAnswer] = useState('')
  const { user } = useUser();
  const [loading, setLoading] = useState(false)


  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  useEffect(() => {
    results.map((result) => (
      setUserAnswer(prevAns => prevAns + result?.transcript)
    ))
  }, [results])

  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      UpdateUserAnswer();
    }
  }, [userAnswer])

  const StartStopRecording = async () => {
    if (isRecording) {
      setLoading(true)
      stopSpeechToText()
      if (!userAnswer || userAnswer.length < 10) {
        setLoading(false)
        toast('Error while saving your answer, Please record again')
        return
      }


    } else {
      startSpeechToText()
    }
  }

  // const UpdateUserAnswer = async () => {
  //   console.log(userAnswer)
  //   setLoading(true);
  //   const feedbackPrompt = `
  //       Questions: ${mockInterviewQuestions[activeQuestionIndex]?.question},
  //       User Answer: ${userAnswer},
  //       Depend on question and user answer for given interview question.
  //       Please give us rating for answer and feedback as area of improvement if any.
  //       In just 3 to 5 lines to improve it in JSON format with rating field and feedback field`;

  //   try {
  //     const result = await chatSession.sendMessage(feedbackPrompt);
  //     const feedbackData = await result.response.text(); // Await this if it's a Promise
  //     console.log(feedbackData);

  //     // Optionally parse the JSON response if required
  //     const mockJsonResp = (result.response.text()).replace('```json', '').replace('```', '')
  //     console.log('Parsed Feedback:', mockJsonResp);
  //     const JsonFeedbackResp = JSON.parse(mockJsonResp)

  //     const resp = await db.insert(UserAnswer)
  //       .values({

  //         mockIdRef: interviewData?.mockId || null,
  //         question: mockInterviewQuestions[activeQuestionIndex]?.question || 'Default Question',
  //         correctAns: mockInterviewQuestions[activeQuestionIndex]?.answer || 'Default Answer',
  //         userAns: userAnswer,
  //         rating: JsonFeedbackResp?.rating || 'No rating',
  //         feedback: JsonFeedbackResp?.feedback || 'No feedback',
  //         userEmail: user?.primaryEmailAddress?.emailAddress || 'Default Email',
  //         createdAt: moment().format('DD-MM-YYYY')
  //       })
  //       console.log('Mock ID:', interviewData?.mockId);
  //       // console.log(useUser())
  //       console.log('User Object:', user);
  //       console.log('User Email:', user?.primaryEmailAddress?.emailAddress);
  //       // console.log('Interview Data:', interviewData);





  //     if (resp) {
  //       toast('Your answer recorded successfully')
  //     }


  //   } catch (error) {
  //     console.error('Error fetching feedback:', error);
  //   }

  //   setUserAnswer('')
  //   setLoading(false)

  // }

  useEffect(() => {
    console.log("Mock Interview Questions:", mockInterviewQuestions);
    console.log("Interview Data:", interviewData);
  }, [mockInterviewQuestions, interviewData]);

  useEffect(() => {
    console.log("Received Props - mockInterviewQuestions:", mockInterviewQuestions);
    console.log("Received Props - interviewData:", interviewData);
  }, [mockInterviewQuestions, interviewData]);


  const UpdateUserAnswer = async () => {
    console.log("User Answer:", userAnswer);
    setLoading(true);

    // if (!interviewData?.mockId) {
    //   console.error("Error: mockId is null or undefined.");
    //   toast.error("Unable to save your answer. Missing interview data.");
    //   setLoading(false);
    //   return;
    // }

    // if (!user?.primaryEmailAddress?.emailAddress) {
    //   console.error("Error: User email is null or undefined.");
    //   toast.error("Unable to save your answer. Missing user information.");
    //   setLoading(false);
    //   return;
    // }

    const feedbackPrompt = `
        Questions: ${mockInterviewQuestions[activeQuestionIndex]?.question || "Default Question"},
        User Answer: ${userAnswer},
        Depend on question and user answer for given interview question.
        Please give us rating for answer and feedback as area of improvement if any.
        In just 3 to 5 lines to improve it in JSON format with rating field and feedback field.`;

    try {
      const result = await chatSession.sendMessage(feedbackPrompt);
      const feedbackData = await result.response.text();
      console.log("Feedback Response:", feedbackData);

      const mockJsonResp = feedbackData.replace("```json", "").replace("```", "");
      const JsonFeedbackResp = JSON.parse(mockJsonResp);

      const resp = await db.insert(UserAnswer).values({
        mockIdRef: interviewData.mockId,
        question: mockInterviewQuestions[activeQuestionIndex]?.question || "Default Question",
        correctAns: mockInterviewQuestions[activeQuestionIndex]?.answer || "Default Answer",
        userAns: userAnswer,
        rating: JsonFeedbackResp?.rating || "No rating",
        feedback: JsonFeedbackResp?.feedback || "No feedback",
        userEmail: user.primaryEmailAddress.emailAddress || null,
        createdAt: moment().format("DD-MM-YYYY"),
      });

      console.log("Response from DB insert:", resp);

      if (resp) {
        toast("Your answer recorded successfully.");
        setUserAnswer("");
        setResults([])
      }
    } catch (error) {
      console.error("Error fetching feedback or saving answer:", error);
    }

    setResults([])
    setLoading(false);
  };


  return (

    <div className='flex items-center justify-center flex-col'>
      <div className='flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5'>
        <Image
          src='/webcam.png'
          width={200}
          height={200}
          className='absolute'
        />

        <Webcam
          mirrored={true}
          style={{
            height: 300,
            width: '100%',
            zIndex: 10,
          }}
        />

      </div>

      <Button
        disable={loading}
        variant='outline'
        className='my-10'
        onClick={StartStopRecording}
      >
        {isRecording ?
          <h2 className='text-red-600 animate-pulse flex gap-2 items-center'>
            <StopCircle/>Stop Recording
          </h2>
          : <>
            <Mic />Record Answer
          </>
        }
      </Button>
    </div>
  )
}

export default RecordAnsSection


