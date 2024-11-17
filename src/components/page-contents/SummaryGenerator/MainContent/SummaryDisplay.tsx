'use client'

import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { WandSparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCustomSound } from '@/hooks/useCustomSound'

interface SummaryDisplayProps {
  summary: string
  isSuccess: boolean
  generationTime: number
  randomPhrase: string
}

export function SummaryDisplay({
  summary,
  isSuccess,
  generationTime,
  randomPhrase,
}: SummaryDisplayProps) {
  const summaryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  // Using the custom sound hook
  const [playSuccessSound] = useCustomSound('/success.mp3')
  const [playFailSound] = useCustomSound('/fail.mp3')

  // Play sound based on success or failure
  useEffect(() => {
    if (isSuccess) {
      playSuccessSound()
    } else {
      playFailSound()
    }
  }, [isSuccess, playSuccessSound, playFailSound])

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={summaryVariants}
      className='mt-12'
    >
      <div className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 p-1'>
        <div className='absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,#000_70%,transparent_100%)]' />
        <div className='relative rounded-[22px] bg-background/80 backdrop-blur-xl p-8 border border-white/10'>
          <div
            className={cn(
              'absolute top-4 right-4 rounded-full px-3 py-1 flex items-center space-x-1',
              isSuccess ? 'bg-green-500/20' : 'bg-red-500/20'
            )}
          >
            <WandSparkles
              className={cn('w-3 h-3', isSuccess ? 'text-green-500' : 'text-red-500')}
            />
            <span
              className={cn(
                'text-xs font-medium',
                isSuccess ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'
              )}
            >
              {isSuccess ? 'Obliviate!' : 'Confundus!'} in <em>{generationTime.toFixed(2)}s</em>
            </span>
          </div>
          <div className='flex flex-col items-center justify-between mb-8'>
            <h2 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-4'>
              {randomPhrase}
            </h2>
          </div>
          <div className='relative font-bengali text-foreground text-center'>
            <div className='absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg' />
            <div className='absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-pink-500/50 rounded-br-lg' />
            <p className='leading-relaxed relative z-10'>{summary}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
