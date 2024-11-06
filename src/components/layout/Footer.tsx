'use client'

import { useEffect, useState, useCallback } from 'react'
import { format } from 'date-fns'

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string>('')

  const updateTime = useCallback(() => {
    setCurrentTime(format(new Date(), "MMM do, yyyy hh:mm:ss a"))
  }, [])

  useEffect(() => {
    // Update time immediately on mount
    updateTime()

    // Set up interval for subsequent updates
    const timer = setInterval(updateTime, 1000)

    // Clean up interval on unmount
    return () => clearInterval(timer)
  }, [updateTime])

  return (
    <footer className="border-t px-4 py-3">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
        <div className="w-full sm:w-1/3 text-left mb-2 sm:mb-0">Senior Capstone Project II | v0.0.1</div>
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
