'use client'

import { useState, useEffect, useMemo } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Hash } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Define types for team members and group tags
interface TeamMember {
  name: string
  id: string
  image: string
}

interface GroupTag {
  text: string
  icon: React.ElementType
}

// Define team members and group tags
const teamMembers: TeamMember[] = [
  { name: 'Md Tashfiqul Islam', id: '161 1593 042', image: '/images/team/tashfiq.png' },
  { name: 'Tashin Mahmud Khan', id: '201 1819 042', image: '/images/team/tashin.png' },
  { name: 'Amir Hamja Marjan', id: '202 1171 642', image: '/images/team/amir.png' },
  { name: 'Md Simul Hossain', id: '171 1949 642', image: '/images/team/simul.png' },
]

const groupTags: GroupTag[] = [
  { text: 'CSE 499B.16', icon: BookOpen },
  { text: 'Senior Design II', icon: Users },
  { text: 'Group 01', icon: Hash },
]

// Animation variants for different transitions
const variants = {
  topLeftToBottomRight: {
    initial: { x: '-100%', y: '-100%', opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: '100%', y: '100%', opacity: 0 },
  },
  bottomToTop: {
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '-100%', opacity: 0 },
  },
  rightToLeft: {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
  },
  scaleUp: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.2, opacity: 0 },
  },
}

export default function TeamMembers() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Memoize group tags to prevent unnecessary re-renders
  const memoizedGroupTags = useMemo(() => groupTags, [])

  // Auto-rotate active member every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamMembers.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Choose a random animation variant for each transition
  const getRandomVariant = () => {
    const keys = Object.keys(variants) as Array<keyof typeof variants>
    return variants[keys[Math.floor(Math.random() * keys.length)]]
  }

  // Calculate the height based on 35% of 800px minus padding
  const cardHeight = useMemo(() => {
    const totalHeight = 800
    const padding = 16 // 4px * 4 for top, right, bottom, left
    return Math.floor((totalHeight - padding) * 0.35)
  }, [])

  return (
    <Card 
      className={`w-full h-[${cardHeight}px] bg-gradient-to-br from-teal-400 to-blue-500 dark:from-teal-900 dark:to-blue-900 overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg`}
    >
      <CardContent className="h-full p-4 flex flex-col justify-between">
        {/* Header with title and group tags */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 space-y-2 sm:space-y-0">
          <h2 className="text-lg font-bold text-white">Team Members</h2>
          <div className="flex flex-wrap gap-1">
            {memoizedGroupTags.map((tag) => (
              <Badge key={tag.text} variant="secondary" className="bg-white/20 text-white text-xs px-1.5 py-0.5">
                <tag.icon className="w-3 h-3 mr-1" />
                <span className="hidden sm:inline">{tag.text}</span>
              </Badge>
            ))}
          </div>
        </div>

        {/* Active team member display */}
        <div className="flex-grow flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={getRandomVariant()}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="text-center"
            >
              <Avatar className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 border-4 border-white/50">
                <AvatarImage src={teamMembers[activeIndex].image} alt={teamMembers[activeIndex].name} />
                <AvatarFallback>{teamMembers[activeIndex].name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-sm sm:text-base text-white">{teamMembers[activeIndex].name}</h3>
              <p className="text-xs sm:text-sm text-white/80">{teamMembers[activeIndex].id}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Team member indicators */}
        <div className="flex justify-center space-x-2 mt-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 scale-100 hover:bg-white/70'
              }`}
              aria-label={`View team member ${index + 1}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
