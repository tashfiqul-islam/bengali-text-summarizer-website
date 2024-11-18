'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { User, GraduationCap, BookOpen, IdCard } from 'lucide-react'
import { students } from '@/lib/constants'

export default function Header() {
  return (
    <motion.header
      className='relative w-full rounded-2xl overflow-hidden shadow-md print:shadow-none'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image */}
      <div className='absolute inset-0 w-full h-full'>
        <Image
          src='/images/ai-bg.jpg'
          alt='AI Background'
          fill
          priority
          className='object-cover opacity-[0.15] print:opacity-[0.05]'
          quality={100}
          sizes='100vw'
        />
      </div>

      <div className='relative z-10 p-6 sm:p-8 md:p-10 lg:p-12'>
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8'>
          <div className='flex items-center mb-6 lg:mb-0'>
            <Image
              src='/images/logos/nsu-logo.png'
              alt='NSU Logo'
              width={150}
              height={150}
              className='rounded-xl'
              priority
              quality={100}
              sizes='(max-width: 768px) 120px, (max-width: 1024px) 160px, 180px'
            />
            <div className='ml-6 flex flex-col justify-center h-[180px]'>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-none'>
                Bengali Text <br />
                <span className='bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent'>
                  Summarization System
                </span>
              </h1>
            </div>
          </div>
          <div className='flex flex-col items-end space-y-3'>
            <motion.div
              className='bg-blue-700 text-white text-sm sm:text-base font-bold px-4 py-2 rounded-full shadow-sm print:shadow-none'
              whileHover={{ scale: 1.05 }}
            >
              CSE499B.16
            </motion.div>
            <div className='flex items-center text-right'>
              <BookOpen className='w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2' />
              <p className='text-sm sm:text-base font-medium text-slate-700'>
                Group: Bytes of Bengal
              </p>
            </div>
            <div className='flex items-start text-right bg-blue-50 rounded-lg p-2 shadow-sm print:shadow-none'>
              <GraduationCap className='w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2 mt-1' />
              <div>
                <p className='text-sm sm:text-base font-bold text-slate-800'>
                  Supervisor: Dr. Nafisa Noor [NaNr]
                </p>
                <p className='text-xs sm:text-sm text-slate-600'>Assistant Professor</p>
              </div>
            </div>
          </div>
        </div>

        <div className='mb-6'>
          <p className='text-base sm:text-lg md:text-xl font-semibold text-slate-800'>
            Department of Electrical & Computer Engineering
          </p>
          <p className='text-sm sm:text-base md:text-lg text-slate-600'>North South University</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {students.map((student, index) => (
            <motion.div
              key={index}
              className='bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm rounded-lg p-3 shadow-sm print:shadow-none'
              whileHover={{ scale: 1.02 }}
            >
              <div className='flex items-center mb-2'>
                <User className='w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2' />
                <h3 className='font-semibold text-slate-800 text-sm sm:text-base'>
                  {student.name}
                </h3>
              </div>
              <div className='flex items-center mb-2'>
                <IdCard className='w-2 h-2 sm:w-6 sm:h-6 text-blue-600 mr-2' />
                <h3 className='text-xs sm:text-sm text-slate-600'>{student.id}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.header>
  )
}
