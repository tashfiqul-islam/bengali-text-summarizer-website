'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Code2, Database, Brain, FlaskConical, Layout, Link, Rocket } from 'lucide-react'

export function ProjectOverview() {
  return (
    <div className='p-6 flex flex-col h-full bg-white'>
      {/* Header */}
      <div className='mb-8'>
        <h2 className='text-[48px] font-bold text-grey-900 mb-2'>Project Overview</h2>
        <div className='h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'></div>
      </div>

      {/* Description Card */}
      <Card className='mb-18 overflow-hidden bg-white/80 shadow-lg border border-emerald-100'>
        <div className='relative flex'>
          <div className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full'></div>
          <div className='p-4 pl-6'>
            <p className='text-[24px] text-gray-800 font-medium leading-tight'>
              The Bangla Text Summarizer, developed for CSE499B, leverages advanced NLP to create
              concise, accurate summaries of Bengali news articles, tackling digital information
              overload.
            </p>
          </div>
        </div>
      </Card>

      {/* ERDiagram */}
      <div className='flex-grow flex items-center justify-center'>
        <div className='w-full max-w-[250mm] h-[80mm] relative'>
          <div className='absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-500/20 rounded-full filter blur-[48px]' />
          <div className='absolute bottom-1/4 right-1/4 w-32 h-32 bg-indigo-500/20 rounded-full filter blur-[48px]' />

          <div className='relative flex justify-between items-center h-full px-4'>
            {/* User Input Entity */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='relative z-10'
            >
              <div className='w-[90mm] rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 backdrop-blur-md p-5 shadow-lg border border-emerald-200'>
                <h2 className='text-[24px] font-bold text-center mb-4 text-emerald-950'>
                  User Input
                </h2>
                <div className='space-y-3 mb-4'>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-emerald-500 rounded-full' />
                    <span className='text-[24px] text-gray-800'>Bangla Long Essay</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-emerald-500 rounded-full' />
                    <span className='text-[24px] text-gray-800'>Raw Content</span>
                  </div>
                </div>
                <div className='bg-emerald-200/70 rounded-full py-2 px-4 text-center text-[24px] text-emerald-950 shadow-sm'>
                  200-5000 Words
                </div>
              </div>
            </motion.div>

            {/* Arrow and Text Summarizer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='relative z-20 w-[60mm] mx-4'
            >
              <div className='absolute -top-8 left-1/2 -translate-x-1/2 text-[24px] whitespace-nowrap text-gray-800 font-medium'>
                Text Summarizer
              </div>
              <div className='relative'>
                <div className='h-[2px] bg-gradient-to-r from-emerald-500 to-indigo-500 w-full'></div>
                <div className='absolute -right-[2px] top-[-4px]'>
                  <div
                    className='relative w-0 h-0
                    border-t-[5px] border-t-transparent
                    border-b-[5px] border-b-transparent
                    border-l-[10px] border-l-indigo-500'
                  ></div>
                </div>
              </div>
            </motion.div>

            {/* Model Output Entity */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className='relative z-10'
            >
              <div className='w-[90mm] rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100/50 backdrop-blur-md p-5 shadow-lg border border-indigo-200'>
                <h2 className='text-[24px] font-bold text-center mb-4 text-indigo-950'>
                  Model Output
                </h2>
                <div className='space-y-3 mb-4'>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-indigo-500 rounded-full' />
                    <span className='text-[24px] text-gray-800'>Summarized Content</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-2 h-2 bg-indigo-500 rounded-full' />
                    <span className='text-[24px] text-gray-800'>Concise Summary</span>
                  </div>
                </div>
                <div className='bg-indigo-200/70 rounded-full py-2 px-4 text-center text-[24px] text-indigo-950 shadow-sm'>
                  ~ 150 Words
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='mt-auto pt-2'>
        <div className='bg-[#1a2234] rounded-xl py-4 px-6 flex items-center justify-between'>
          <span className='text-[20px] text-white font-medium'>CSE499B</span>
          <div className='h-5 w-px bg-gray-600'></div>
          <span className='text-[18px] text-white'>Senior Design Project II</span>
        </div>
      </div>
    </div>
  )
}
