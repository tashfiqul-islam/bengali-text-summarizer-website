'use client'

import { useEffect, useState } from 'react'
import { format } from 'date-fns'

export default function Footer() {
  const [currentTime, setCurrentTime] = useState<string | null>(null)

  useEffect(() => {
    // Start the timer only on the client side
    const timer = setInterval(() => {
      setCurrentTime(format(new Date(), "MMM do, yyyy hh:mm:ss a"))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="border-t px-4 py-3">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
        <div className="w-full sm:w-1/3 text-left mb-2 sm:mb-0">Senior Capstone Project | v0.0.1</div>
        <div className="w-full sm:w-1/3 text-right">
          {currentTime ? currentTime : 'Loading...'}
        </div>
      </div>
    </footer>
  )
}
