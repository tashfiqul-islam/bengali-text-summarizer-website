'use client'

import { useCallback } from 'react'
import { Card } from "@/components/ui/card"
import FacultyAdvisor from "./FacultyAdvisor"
import ProjectOverview from "./ProjectOverview"
import TeamMembers from "./TeamMembers"
import StatsCard from './StatsCard'
import TrainingChart from './TrainingChart'

// ProjectMetadata component: Displays the main project information layout
export default function ProjectMetadata() {
  // Calculate the height of each section based on the percentage of total height
  const calculateHeight = useCallback((percentage: number) => {
    const totalHeight = 800
    return Math.floor(totalHeight * (percentage / 100))
  }, [])

  // Common card styles for consistent 3D effect and hover animation
  const cardStyles = "overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700/30"

  return (
    <div className="w-full max-w-[calc(100vw-40px)] mx-auto my-6 h-[800px]">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column: Project Overview and Faculty Advisor */}
        <div className="flex flex-col gap-4">
          {/* Top Left: Project Overview (65% height) */}
          <Card 
            className={cardStyles}
            style={{ height: `${calculateHeight(65)}px` }}
          >
            <ProjectOverview />
          </Card>

          {/* Bottom Left: Faculty Advisor (35% height) */}
          <Card 
            className={cardStyles}
            style={{ height: `${calculateHeight(35)}px` }}
          >
            <FacultyAdvisor />
          </Card>
        </div>

        {/* Right Column: Team Members and Training Chart */}
        <div className="flex flex-col gap-4">
          {/* Top Right: Team Members (35% height) */}
          <Card 
            className={cardStyles}
            style={{ height: `${calculateHeight(35)}px` }}
          >
            <TeamMembers />  
          </Card>

          {/* Bottom Right: Training Chart (65% height) */}
          <div 
            className="flex flex-col gap-4"
            style={{ height: `${calculateHeight(65)}px` }}
          >
            {/* Stats Cards Grid */}
            <div className="grid grid-cols-3 gap-5" style={{ height: '125px' }}>
              <Card className={cardStyles}>
              <StatsCard index={0} />
              </Card>
              <Card className={cardStyles}>
              <StatsCard index={1} />
              </Card>
              <Card className={cardStyles}>
              <StatsCard index={2} />
              </Card>
            </div>

            {/* Main Chart */}
            <Card className={`${cardStyles} flex-1`}>
            <TrainingChart.Chart />
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
