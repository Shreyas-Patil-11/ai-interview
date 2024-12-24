import React from 'react'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

const HeroSection = () => {
    const router = useRouter()

    const getStarted= () => {
        router.push('/dashboard')
    }

    const handleLearnMore = () => {
        const stepsSection = document.getElementById("steps-section");
        stepsSection?.scrollIntoView({ behavior: "smooth" });
    };

  return (
    // {/* Hero Section */}
    <motion.div
    className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20 py-12 space-y-10 md:space-y-0 md:flex-wrap gap-10"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    {/* Text Content */}
    <motion.div
      className="flex-1 text-center md:text-left"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
        Ace Your Next Interview with{" "}
        <span className="text-primary">VirtualInterviewPrep</span>
      </h1>
      <motion.p
        className="text-base sm:text-lg text-gray-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Practice, Improve, and Succeed with AI-driven mock interviews
        tailored to your needs. Get instant feedback, ratings, and correct
        answers to shine in your next interview!
      </motion.p>
      <div className="flex justify-center md:justify-start space-x-4">
        <Button
          className="bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition duration-300"
          onClick={getStarted}
        >
          Get Started
        </Button>
        <Button
          className="bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-primary hover:text-white transition duration-300"
          onClick={handleLearnMore}
        >
          Learn More
        </Button>
      </div>
    </motion.div>

    {/* Image/Visual Content */}
    <motion.div
      className="flex-1 flex justify-center"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <img
        src="/assets/hero3.png"
        alt="AI Interview Mockup"
        className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
      />
    </motion.div>
  </motion.div>

  )
}

export default HeroSection