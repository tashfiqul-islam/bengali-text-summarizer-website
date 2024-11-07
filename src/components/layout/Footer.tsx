'use client'

import { useEffect, useState } from 'react'
import { format } from 'date-fns'

/**
 * Footer component displaying project information and current time.
 * Uses client-side rendering to update time dynamically with consistent formatting.
 */
export default function Footer() {
  // State to hold the formatted current time
  const [currentTime, setCurrentTime] = useState<string>('')

  useEffect(() => {
    // Function to update the current time with consistent formatting
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(format(now, "MM/dd/yyyy, h:mm:ss a"))
    }

    // Update time immediately on mount
    updateTime()

    // Set up interval for updating time every second
    const timer = setInterval(updateTime, 1000)

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(timer)
  }, []) // Empty dependency array ensures this effect runs only once on mount

  return (
    <footer className="border-t px-4 py-3">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
        <div className="w-full sm:w-1/3 text-left mb-2 sm:mb-0">
          Senior Capstone Project II | v0.0.1
        </div>
        <div className="w-full sm:w-1/3 text-center mb-2 sm:mb-0">
          © {new Date().getFullYear()} Bengali Text Summarizer
        </div>
        <div className="w-full sm:w-1/3 text-right">
          {currentTime || 'Loading...'}
        </div>
      </div>
    </footer>
  )
}
