import React from 'react'
import { motion } from "framer-motion";
import { useState } from "react";


const Features = () => {

    const [expandedFeature, setExpandedFeature] = useState(null);

    const toggleFeature = (featureIndex) => {
        setExpandedFeature(expandedFeature === featureIndex ? null : featureIndex);
    };


  return (
    // {/* Features Section */}
    <motion.div
    className="bg-gray-900 text-white py-12"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="container mx-auto px-6 lg:px-20">
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Why Choose VirtualInterviewPrep?
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <motion.div
          className="text-center cursor-pointer"
          onClick={() => toggleFeature(1)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="./assets/ai-que.svg"
            alt="Feature"
            className="mx-auto mb-4 p-5 border  border-white rounded-md"
            height={250}
            width={250}
          />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            AI-Tailored Questions
          </h3>
          <p className="text-sm sm:text-base">
            Custom questions based on industry, job title, and skill level.
          </p>
          {expandedFeature === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-sm text-gray-400"
            >
              Learn how AI analyzes your resume and preferences to generate the best interview questions for you.
            </motion.div>
          )}
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          className="text-center cursor-pointer"
          onClick={() => toggleFeature(2)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="./assets/ai-feedback.svg"
            alt="Feature"
            className="mx-auto mb-4 p-5 border  border-white rounded-md"
            height={250}
            width={250}
          />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Feedback Analytics
          </h3>
          <p className="text-sm sm:text-base">
            AI provides strengths, weaknesses, and improvement areas.
          </p>
          {expandedFeature === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-sm text-gray-400 "
            >
              Our system tracks your progress and offers suggestions to help you improve over time.
            </motion.div>
          )}
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          className="text-center cursor-pointer"
          onClick={() => toggleFeature(3)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="./assets/video.svg"
            alt="Feature"
            className="mx-auto mb-4 p-5 border  border-white rounded-md"
            height={125}
            width={200}
          />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Video Insights
          </h3>
          <p className="text-sm sm:text-base">
            AI-powered analysis of body language, tone, and content quality.
          </p>
          {expandedFeature === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-sm text-gray-400"
            >
              Gain in-depth insights into your performance with real-time analysis.
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  </motion.div>
  )
}

export default Features