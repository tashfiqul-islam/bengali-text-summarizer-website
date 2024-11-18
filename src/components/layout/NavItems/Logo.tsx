'use client'

import { motion } from 'framer-motion'
import Image from "next/image"
import { useRouter } from 'next/navigation'

/**
 * Logo Component
 *
 * Displays the logo and title of the application.
 * Features interactive animations for hover and tap events.
 *
 * Functionality:
 * - Redirects users to the homepage (`/`) when clicked.
 * - Provides smooth scaling animation for better user experience.
 *
 * Dependencies:
 * - `next/navigation`: For client-side navigation.
 * - `framer-motion`: For interactive animations.
 *
 * Usage:
 * - This component is typically placed in the left section of the navigation bar.
 */

export default function Logo() {
  const router = useRouter() // Access Next.js router for navigation

  return (
    (<motion.div
        whileHover={{ scale: 1.05 }} // Hover effect: Scale up
        whileTap={{ scale: 0.95 }} // Tap effect: Scale down
        className='flex items-center gap-3 cursor-pointer'
        onClick={() => router.push('/')} // Navigate to homepage on click
      >
      {/* Application Logo */}
      <Image
        src='/images/bts-logo.png'
        alt='Bengali Text Summarizer Logo'
        width={40}
        height={40}
        className='rounded-full shadow-md'
        // Optimize image loading for better performance
        priority
        style={{
          maxWidth: "100%",
          height: "auto",
          maxWidth: "100%",
          height: "auto"
        }} />
      {/* Application Title */}
      <span className='font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400'>
        Bengali Text Summarizer
      </span>
    </motion.div>)
  );
}
