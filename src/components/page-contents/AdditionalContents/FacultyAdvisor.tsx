'use client'

import Image from 'next/image'
import { Mail, Building, BookOpen, ExternalLink, FileText, GraduationCap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

// Define the structure for advisor details
interface AdvisorDetails {
  name: string
  shortName: string
  position: string
  education: string
  university: string
  email: string
  image: string
  researchAreas: string[]
  publications: {
    total: number
    journals: number
  }
  profileUrl: string
}

// Faculty advisor data
const advisorDetails: AdvisorDetails = {
  name: 'Dr. Nafisa Noor',
  shortName: 'NaNr',
  position: 'Assistant Professor',
  education: 'PhD – Electrical Engineering, University of Connecticut, Storrs, CT, USA',
  university: 'ECE Department, North South University',
  email: 'nafisa.noor@northsouth.edu',
  image: '/images/faculty/nafisa.jpg',
  researchAreas: ['Semiconductor Device and Technology', 'Modeling and Simulation'],
  publications: {
    total: 30,
    journals: 6,
  },
  profileUrl: 'http://ece.northsouth.edu/people/dr-nafisa-noor/',
}

// FacultyAdvisor component
export default function FacultyAdvisor() {
  return (
    <div className='w-full h-full flex flex-col p-4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg sm:overflow-auto overflow-hidden'>
      {/* Content Container - ensures consistent padding and layout */}
      <div className='flex flex-col sm:flex-row gap-4 flex-grow'>
        {/* Profile Image Section */}
        <ProfileImage image={advisorDetails.image} name={advisorDetails.name} />

        {/* Content Section */}
        <div className='flex flex-col min-w-0 flex-grow'>
          <div className='space-y-3 sm:space-y-4 flex-grow'>
            <HeaderInfo
              name={advisorDetails.name}
              shortName={advisorDetails.shortName}
              position={advisorDetails.position}
              education={advisorDetails.education}
              university={advisorDetails.university}
            />
            <ResearchAreas areas={advisorDetails.researchAreas} />
            <div className='hidden sm:block'>
              <Publications publications={advisorDetails.publications} />
            </div>
          </div>

          {/* Action Buttons aligned with text and at the bottom */}
          <ActionButtons email={advisorDetails.email} profileUrl={advisorDetails.profileUrl} />
        </div>
      </div>
    </div>
  )
}

// ProfileImage component
function ProfileImage({ image, name }: { image: string; name: string }) {
  return (
    <div className='relative w-16 h-16 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0'>
      <div className='absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 animate-gradient' />
      <div className='absolute inset-[2px] rounded-lg overflow-hidden bg-white dark:bg-gray-900'>
        <Image src={image} alt={name} fill className='object-cover' priority />
      </div>
    </div>
  )
}

// HeaderInfo component
function HeaderInfo({
  name,
  shortName,
  position,
  education,
  university,
}: {
  name: string
  shortName: string
  position: string
  education: string
  university: string
}) {
  return (
    <div className='space-y-2'>
      <h2 className='text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 leading-normal break-words'>
        {name} [{shortName}]
      </h2>
      <p className='text-xs sm:text-sm text-purple-600 dark:text-purple-400 leading-normal'>
        {position}
      </p>
      <p className='text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1.5 leading-normal'>
        <GraduationCap className='h-3.5 w-3.5 flex-shrink-0' />
        <span>{education}</span>
      </p>
      <div className='text-xs text-gray-600 dark:text-gray-400'>
        <div className='flex items-start sm:items-center gap-1.5 leading-normal'>
          <Building className='h-3.5 w-3.5 flex-shrink-0 mt-0.5 sm:mt-0' />
          <span className='break-words'>{university}</span>
        </div>
      </div>
    </div>
  )
}

// ResearchAreas component
function ResearchAreas({ areas }: { areas: string[] }) {
  return (
    <div className='flex flex-wrap gap-1.5 sm:gap-2'>
      {areas.map(area => (
        <Badge
          key={area}
          variant='secondary'
          className='px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs bg-purple-100 text-purple-900 dark:bg-purple-900/30 dark:text-purple-100'
        >
          {area}
        </Badge>
      ))}
    </div>
  )
}

// Publications component
function Publications({ publications }: { publications: { total: number; journals: number } }) {
  return (
    <div className='flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-gray-900 dark:text-gray-100'>
      <div className='flex items-center gap-1.5'>
        <BookOpen className='h-3.5 w-3.5 text-purple-500' />
        <span className='leading-normal'>{publications.total} Publications</span>
      </div>
      <div className='flex items-center gap-1.5'>
        <FileText className='h-3.5 w-3.5 text-purple-500' />
        <span className='leading-normal'>{publications.journals} Journals</span>
      </div>
    </div>
  )
}

// ActionButtons component
function ActionButtons({ email, profileUrl }: { email: string; profileUrl: string }) {
  return (
    <div className='flex flex-wrap items-center gap-2 pt-4'>
      {/* Contact button */}
      <Button
        asChild
        size='sm'
        className='h-7 px-2.5 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white'
      >
        <a href={`mailto:${email}`}>
          <Mail className='h-3.5 w-3.5' />
          Contact via Email
        </a>
      </Button>

      {/* View Profile button */}
      <Button
        asChild
        variant='ghost'
        size='sm'
        className='h-7 px-2.5 text-xs text-gray-600 dark:text-gray-400'
      >
        <a href={profileUrl} target='_blank' rel='noopener noreferrer'>
          <span>View Profile</span>
          <ExternalLink className='ml-1.5 h-3.5 w-3.5' />
        </a>
      </Button>
    </div>
  )
}
