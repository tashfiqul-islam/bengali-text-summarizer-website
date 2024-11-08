'use client'

import React from 'react'
import Image from 'next/image'
import { ChevronDown, Hash, Brain, MessageSquare, Files } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

// Define types for team member and group tag data
interface TeamMember {
  name: string
  id: string
  image: string
  role: 'Team Lead' | 'Developer'
}

interface GroupTag {
  text: string
  icon: React.ElementType
}

// Team members data
const teamMembers: TeamMember[] = [
  { name: 'Md Tashfiqul Islam', id: '161 1593 042', image: '/images/team/tashfiq.png', role: 'Team Lead' },
  { name: 'Tashin Mahmud Khan', id: '201 1819 042', image: '/images/team/tashin.png', role: 'Developer' },
  { name: 'Amir Hamja Marjan', id: '202 1171 642', image: '/images/team/amir.png', role: 'Developer' },
  { name: 'Md Simul Hossain', id: '171 1949 642', image: '/images/team/simul.png', role: 'Developer' },
]

// Group tags data
const groupTags: GroupTag[] = [
  { text: 'Group 01', icon: Hash },
  { text: 'Machine Learning', icon: Brain },
  { text: 'NLP', icon: MessageSquare },
  { text: 'Summarizer', icon: Files },
]

export default function TeamMembers() {
  return (
    <div className="flex flex-col h-full p-4 bg-background text-foreground">
      {/* Header Section */}
      <div className="mb-2">
        <h2 className="text-lg font-semibold mb-5">Team Members</h2>
        
        {/* Group Tags - hidden on mobile, visible on md and larger screens */}
        <div className="m-2 mb-5">
          <div className="flex flex-wrap gap-2">
            {groupTags.map((tag) => {
              const Icon = tag.icon
              return (
                <Badge 
                  key={tag.text} 
                  variant="secondary" 
                  className="bg-muted hover:bg-muted/80 transition-colors text-xs py-0 px-2"
                >
                  <Icon className="w-3 h-3 mr-1" />
                  {tag.text}
                </Badge>
              )
            })}
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-2 gap-2">
        {teamMembers.map((member) => (
          <div 
            key={member.id}
            className="flex items-center justify-between p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-medium leading-tight">{member.name}</h3>
                <p className="text-xs text-muted-foreground leading-tight">{member.id}</p>
              </div>
            </div>
            {/* Role tag - hidden on mobile, visible on md and larger screens */}
            <div className="hidden md:flex items-center gap-1 bg-background/50 px-2 py-1 rounded text-xs font-medium">
              {member.role}
              <ChevronDown className="w-3 h-3 text-muted-foreground" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
