'use client'

import { useCallback } from 'react'
import { Card } from "@/components/ui/card"
import FacultyAdvisor from "./FacultyAdvisor"
import ProjectOverview from "./ProjectOverview"
import TeamMembers from "./TeamMembers"
import TrainingChart from './TrainingChart'

// ProjectMetadata component: Displays the main project information layout
export default function ProjectMetadata() {
  // Calculate the height of each section based on the percentage of total height
  const calculateHeight = useCallback((percentage: number) => {
    const totalHeight = 800
    const padding = 16 // 4px * 4 for top, right, bottom, left
    return Math.floor((totalHeight - padding) * (percentage / 100))
  }, [])

  // Common card styles for consistent 3D effect and hover animation
  const cardStyles = "overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700/30"

  return (
    <div className="w-full h-[800px] p-4">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column: Project Overview and Team Members */}
        <div className="flex flex-col gap-4">
          {/* Top Left: Project Overview (65% height) */}
          <Card 
            className={cardStyles}
            style={{ height: `${calculateHeight(65)}px` }}
          >
            <ProjectOverview />
          </Card>

          {/* Bottom Left: Team Members (35% height) */}
          <Card 
            className={cardStyles}
            style={{ height: `${calculateHeight(35)}px` }}
          >
            <TeamMembers />
          </Card>
        </div>

        {/* Right Column: Faculty Advisor and Training Chart */}
        <div className="flex flex-col gap-4">
          {/* Top Right: Faculty Advisor (35% height) */}
          <Card 
            className={cardStyles}
            style={{ height: `${calculateHeight(35)}px` }}
          >
            <FacultyAdvisor />
          </Card>

          {/* Bottom Right: Training Chart (65% height) */}
          <Card 
            className={cardStyles}
            style={{ height: `${calculateHeight(65)}px` }}
          >
            <TrainingChart />
          </Card>
        </div>
      </div>
    </div>
  )
}
