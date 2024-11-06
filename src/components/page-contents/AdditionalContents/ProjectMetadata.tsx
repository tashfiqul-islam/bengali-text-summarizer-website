'use client'

import { useCallback } from 'react'
import { Card } from "@/components/ui/card"
import FacultyAdvisor from "./FacultyAdvisor"
import ProjectOverview from "./ProjectOverview"
import TeamMembers from "./TeamMembers"
import TrainingChart from './TrainingChart'

export default function ProjectMetadata() {
  const calculateHeight = useCallback((percentage: number) => {
    const totalHeight = 800
    const padding = 16 // 4px * 4 for top, right, bottom, left
    return Math.floor((totalHeight - padding) * (percentage / 100))
  }, [])

  return (
    <div className="w-full h-[800px] p-4">
      <div className="w-full h-full grid grid-cols-2 gap-4">
        {/* Left Column: Project Overview and Team Members */}
        <div className="flex flex-col gap-4">
          {/* Top Left: Project Overview (65% height) */}
          <Card className="overflow-hidden" style={{ height: `${calculateHeight(65)}px` }}>
            <ProjectOverview />
          </Card>

          {/* Bottom Left: Team Members (35% height) */}
          <Card className="overflow-hidden" style={{ height: `${calculateHeight(35)}px` }}>
            <TeamMembers />
          </Card>
        </div>

        {/* Right Column: Faculty Advisor and Training Chart */}
        <div className="flex flex-col gap-4">
          {/* Top Right: Faculty Advisor (35% height) */}
          <Card className="overflow-hidden" style={{ height: `${calculateHeight(35)}px` }}>
            <FacultyAdvisor />
          </Card>

          {/* Bottom Right: Training Chart (65% height) */}
          <Card className="overflow-hidden" style={{ height: `${calculateHeight(65)}px` }}>
            <TrainingChart />
          </Card>
        </div>
      </div>
    </div>
  )
}
