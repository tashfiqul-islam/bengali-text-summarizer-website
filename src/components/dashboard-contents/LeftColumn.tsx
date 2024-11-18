'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollText, NotebookPen, MonitorSmartphone, SunMoon, Text } from 'lucide-react'
import { tableOfContents, challenges, projectSteps } from '@/lib/constants'

export const LeftColumn: React.FC = () => {
  return (
    <div className='w-[20%] space-y-6'>
      {/* Table of Contents */}
      <Card className='overflow-hidden bg-white/50 backdrop-blur-sm shadow-md'>
        <CardHeader className='border-b bg-blue-50/50'>
          <CardTitle className='flex items-center text-blue-800'>
            <ScrollText className='mr-2 h-5 w-6 text-blue-600' />
            Table of Contents
          </CardTitle>
        </CardHeader>
        <CardContent className='p-0'>
          <nav className='divide-y divide-blue-100'>
            {tableOfContents.map((item, index) => (
              <div key={index} className='p-2'>
                <div className='flex items-center justify-between rounded-lg px-4 py-3 hover:bg-blue-50 transition-colors'>
                  <span className='flex items-center gap-2'>
                    {React.createElement(item.icon, { className: 'h-5 w-5 text-blue-600' })}
                    <span className='font-medium text-blue-800'>{item.title}</span>
                  </span>
                  <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
                    {item.number}
                  </Badge>
                </div>
                {item.subitems && (
                  <div className='ml-9 mt-2 space-y-2'>
                    {item.subitems.map((subitem, subIndex) => (
                      <div
                        key={subIndex}
                        className='flex items-center justify-between text-sm text-blue-600 hover:text-blue-800'
                      >
                        <span className='flex items-center gap-2'>
                          {React.createElement(subitem.icon, { className: 'h-4 w-4' })}
                          {subitem.title}
                        </span>
                        <Badge variant='secondary' className='bg-blue-50 text-blue-600 text-xs'>
                          {subitem.number}
                        </Badge>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </CardContent>
      </Card>

      {/* Problem Statement */}
      <Card className='overflow-hidden bg-white/50 backdrop-blur-sm shadow-md'>
        <CardHeader className='border-b bg-blue-50/50'>
          <div className='flex items-center justify-between'>
            <CardTitle className='flex items-center text-blue-800'>
              {React.createElement(tableOfContents[0].icon, {
                className: 'mr-2 h-5 w-6 text-blue-600',
              })}
              Problem Statement
            </CardTitle>
            <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
              01
            </Badge>
          </div>
        </CardHeader>
        <CardContent className='p-4'>
          <p className='mb-4 text-sm leading-relaxed text-blue-800'>
            The proliferation of Bangla news portals presents a challenge in navigating so many
            articles within a limited time, compounded by the language's inherent complexity.
          </p>
          <div className='grid grid-cols-2 gap-3'>
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className='flex flex-col items-center justify-center text-center bg-blue-50 p-3 rounded-lg'
              >
                <span className='text-2xl'>{challenge.icon}</span>
                <p className='text-xs text-blue-700'>{challenge.text}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Project Overview */}
      <Card className='overflow-hidden bg-white/50 backdrop-blur-sm shadow-md'>
        <CardHeader className='border-b bg-blue-50/50'>
          <div className='flex items-center justify-between'>
            <CardTitle className='flex items-center text-blue-800'>
              {React.createElement(tableOfContents[1].icon, {
                className: 'mr-2 h-5 w-6 text-blue-600',
              })}
              Project Overview
            </CardTitle>
            <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
              02
            </Badge>
          </div>
        </CardHeader>
        <CardContent className='p-4'>
          <p className='mb-4 text-sm leading-relaxed text-blue-700'>
            The Bengali Text Summarizer is an advanced web application developed as part of the
            CSE499B Senior Design Project II. It leverages cutting-edge NLP techniques to generate
            concise summaries from Bengali news articles, addressing the challenge of information
            overload in digital media consumption.
          </p>
          <div className='space-y-3'>
            {projectSteps.map((step, index) => (
              <div
                key={index}
                className='flex items-center space-x-4 bg-blue-50 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow'
              >
                <div className='flex-shrink-0'>
                  {React.createElement(step.icon, { className: 'h-6 w-6 text-blue-600' })}
                </div>
                <div className='flex-grow'>
                  <h3 className='text-sm font-semibold text-blue-800'>{step.title}</h3>
                  <p className='text-xs text-blue-700'>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card className='overflow-hidden bg-white/50 backdrop-blur-sm shadow-md'>
        <CardHeader className='border-b bg-blue-50/50'>
          <div className='flex items-center justify-between'>
            <CardTitle className='flex items-center text-blue-800'>
              {React.createElement(tableOfContents[2].icon, {
                className: 'mr-2 h-6 w-6 text-blue-600',
              })}
              Key Features
            </CardTitle>
            <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
              03
            </Badge>
          </div>
        </CardHeader>
        <CardContent className='p-4'>
          <div className='grid gap-3'>
            {[
              { icon: Text, color: 'text-yellow-500', text: 'Input Bengali news articles' },
              { icon: NotebookPen, color: 'text-green-500', text: 'Generate concise summaries' },
              {
                icon: MonitorSmartphone,
                color: 'text-red-500',
                text: 'Responsive design for various devices',
              },
              { icon: SunMoon, color: 'text-purple-500', text: 'Dark mode support' },
            ].map((feature, index) => (
              <div key={index} className='flex items-center gap-3 rounded-lg bg-blue-50/50 p-3'>
                {React.createElement(feature.icon, { className: `h-5 w-5 ${feature.color}` })}
                <span className='text-sm text-blue-700'>{feature.text}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
