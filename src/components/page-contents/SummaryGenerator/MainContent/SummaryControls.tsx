'use client'

import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import { toast } from 'sonner'
import { CheckCircle, XCircle } from 'lucide-react'
import { useCustomSound } from '@/hooks/useCustomSound'

/**
 * useLoadingDots Hook
 * Provides animated loading dots during asynchronous operations.
 */
export function useLoadingDots(isLoading: boolean) {
  const [dots, setDots] = useState('')

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setDots(prev => (prev.length < 3 ? prev + '.' : ''))
      }, 500)
      return () => clearInterval(interval)
    } else {
      setDots('')
    }
  }, [isLoading])

  return dots
}

/**
 * useTypingEffect Hook
 * Simulates typing effect when updating text.
 */
export function useTypingEffect(articleText: string) {
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsTyping(false), 500)
    return () => clearTimeout(timer)
  }, [articleText])

  return { isTyping, setIsTyping }
}

/**
 * useCelebrationEffect Hook
 * Triggers celebration effects when minimum criteria are met.
 */
export function useCelebrationEffect(isMinReached: boolean) {
  const [showCelebration, setShowCelebration] = useState(false)
  const [celebrationTimer, setCelebrationTimer] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!isMinReached) {
      setShowCelebration(false)
      if (celebrationTimer) {
        clearTimeout(celebrationTimer)
        setCelebrationTimer(null)
      }
    } else if (isMinReached && !showCelebration) {
      setShowCelebration(true)
      const timer = setTimeout(() => {
        setShowCelebration(false)
      }, 3000)
      setCelebrationTimer(timer)
    }
    return () => {
      if (celebrationTimer) clearTimeout(celebrationTimer)
    }
  }, [isMinReached, celebrationTimer, showCelebration])

  return { showCelebration, celebrationTimer }
}

export interface HandleGenerateProps {
  setIsSummaryVisibleAction: (isVisible: boolean) => void
  setIsSuccessAction: (isSuccess: boolean) => void
  handleGenerateSummaryAction: () => Promise<boolean>
  setGenerationTimeAction: (time: number) => void
  playSuccessSoundAction: () => void
  playFailSoundAction: () => void
}

/**
 * handleGenerate Function
 * Manages the logic for generating summaries, including success/failure handling.
 */
export const handleGenerate = async ({
  setIsSummaryVisibleAction,
  setIsSuccessAction,
  handleGenerateSummaryAction,
  setGenerationTimeAction,
}: HandleGenerateProps) => {
  // Initialize custom sounds
  const [playSuccessSound] = useCustomSound('/success.mp3')
  const [playFailSound] = useCustomSound('/fail.mp3')

  setIsSummaryVisibleAction(true)
  setIsSuccessAction(false)
  const startTime = Date.now()

  try {
    const success = await handleGenerateSummaryAction()
    setIsSuccessAction(success)

    const endTime = Date.now()
    setGenerationTimeAction((endTime - startTime) / 1000)

    if (success) {
      playSuccessSound() // Play success sound
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
      toast.success(
        <div className='flex items-center gap-2'>
          <CheckCircle className='text-green-500' />
          <div>
            <strong>Success!</strong>
            <p className='text-sm'>Summary successfully generated.</p>
          </div>
        </div>,
        {
          duration: 10000,
        }
      )
    } else {
      playFailSound() // Play fail sound
      toast.error(
        <div className='flex items-center gap-2'>
          <XCircle className='text-red-500' />
          <div>
            <strong>Failed!</strong>
            <p className='text-sm'>Failed to generate summary.</p>
          </div>
        </div>,
        {
          duration: 10000,
        }
      )
    }
  } catch (error) {
    setIsSuccessAction(false)
    playFailSound() // Play fail sound on error
    toast.error(
      <div className='flex items-center gap-2'>
        <XCircle className='text-red-500' />
        <div>
          <strong>Failed!</strong>
          <p className='text-sm'>Failed to generate summary due to an issue.</p>
        </div>
      </div>,
      {
        duration: 10000,
      }
    )
    console.error('Error in handleGenerate:', error)
  }
}
