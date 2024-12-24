import React from 'react'
import { motion } from "framer-motion";


const StepSection = () => {
  return (
    // {/* Steps Section */}
    <motion.div
    id="steps-section"
    className="bg-white mt-16 py-12"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="container mx-auto px-6 lg:px-20">
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        How It Works
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Step 1 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img
            src="./assets/signin.svg"
            alt="Sign In"
            className="mx-auto mb-4 hover:scale-105 transform transition duration-300 p-5 border  border-gray-500 rounded-md"
            height={270}
            width={270}
          />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Step 1: Sign In
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Quickly create an account or sign in to get started.
          </p>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            src="./assets/dashboard.svg"
            alt="Dashboard"
            className="mx-auto mb-4 hover:scale-105 transform transition duration-300 p-5 border  border-gray-500 rounded-md"
            height={250}
            width={250}
          />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Step 2: Explore Your Dashboard
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Navigate between your dashboard and previous interviews easily.
          </p>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          
        >
          <img
            src="./assets/interview.svg"
            alt="Add Interview"
            className="mx-auto mb-4 hover:scale-105 transform transition duration-300 p-5 border  border-gray-500 rounded-md"
            height={230}
            width={230}
          />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Step 3: Add New Interview
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Enter interview details, and AI generates 5 personalized
            questions.
          </p>
        </motion.div>

        {/* Step 4 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <img
            src="./assets/feedback.svg"
            alt="Feedback"
            className="mx-auto mb-4 hover:scale-105 transform transition duration-300 p-5 border  border-gray-500 rounded-md"
            height={250}
            width={250}
          />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">
            Step 4: Record & Get Feedback
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Record answers, and receive feedback, ratings, and correct
            answers.
          </p>
        </motion.div>
      </div>
    </div>
  </motion.div>
  )
}

export default StepSection