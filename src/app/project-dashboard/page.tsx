'use client'

import React from 'react'
import Header from '@/components/dashboard-contents/Header'
import { LeftColumn } from '@/components/dashboard-contents/LeftColumn'
import { MiddleColumn } from '@/components/dashboard-contents/MiddleColumn'
import { RightColumn } from '@/components/dashboard-contents/RightColumn'
import { Footer } from '@/components/dashboard-contents/Footer'

export default function Page() {
  return (
    <div
      className='relative min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-violet-50 p-8 print:p-0'
      id='main-content'
    >
      {/* Background grid with high-resolution compatibility */}
      <div className='absolute inset-0 bg-grid-black/[0.02] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]' />

      {/* Main Container */}
      <div id='main-content' className='relative w-full max-w-[3840px] mx-auto'>
        {/* Header Section */}
        <Header />

        {/* Main Content Layout */}
        <div className='flex flex-col md:flex-row gap-6 mt-6'>
          {/* Left Column */}
          <LeftColumn />

          {/* Middle Column */}
          <MiddleColumn />

          {/* Right Column */}
          <RightColumn />
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  )
}
