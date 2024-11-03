'use client'

import { useEffect, useState } from 'react'
import { format } from 'date-fns'

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="border-t px-4 py-3">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground space-y-2 sm:space-y-0 sm:space-x-4">
        <div>Senior Capstone Project</div>
        <div>v0.0.1</div>
        <div className="text-center sm:text-right">
          {format(currentTime, "MMM do, yyyy hh:mm:ss a")}
        </div>
      </div>
    </footer>
  )
}
