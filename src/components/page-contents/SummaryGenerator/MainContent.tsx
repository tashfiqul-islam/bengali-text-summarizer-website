'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, WandSparkles, XCircle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import confetti from 'canvas-confetti'
import { useSound } from 'use-sound'
import { toast } from 'sonner'

interface MainContentProps {
  articleText: string
  setArticleTextAction: (text: string) => void
  summary: string
  selectedArticle: string | null
  selectedArticleContent: string | null
  handleUseArticleAction: () => void
  handleGenerateSummaryAction: () => Promise<boolean>
  isLoading: boolean
  error: string | null
}

/**
 * MainContent Component
 *
 * This component is the main interface for the Summary Generator.
 * It allows users to enter or select an article, generate a summary, and view the results.
 * Includes error handling, sound effects, success/failure notifications, and animations.
 *
 * @param {MainContentProps} props - The properties passed to this component.
 * @returns {React.ReactElement} The rendered MainContent component.
 */
export default function MainContent({
  articleText,
  setArticleTextAction,
  summary,
  selectedArticle,
  selectedArticleContent,
  handleUseArticleAction,
  handleGenerateSummaryAction,
  isLoading,
  error,
}: MainContentProps) {
  // UI states for summary visibility, loading dots animation, and success status
  const [isSummaryVisible, setIsSummaryVisible] = useState(false)
  const [dots, setDots] = useState('')
  const [generationTime, setGenerationTime] = useState(0)
  const [isSuccess, setIsSuccess] = useState(false)

  // Sound effects for success and failure scenarios
  const [playSuccessSound] = useSound('/success.mp3')
  const [playFailSound] = useSound('/fail.mp3')

  // Effect to manage loading dots animation while the summary is generating
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

  // Animation variants for the summary display section
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

  /**
   * handleGenerate - Handles the summary generation process
   *
   * - Triggers the summary generation API call and manages UI state.
   * - Plays the appropriate sound and displays success or failure notifications.
   * - Shows a confetti animation on success.
   */
  const handleGenerate = useCallback(async () => {
    setIsSummaryVisible(true)
    setIsSuccess(false) // Reset success flag before starting
    const startTime = Date.now()

    try {
      // Attempt to generate summary and capture the success status
      const success = await handleGenerateSummaryAction()
      setIsSuccess(success)

      const endTime = Date.now()
      setGenerationTime((endTime - startTime) / 1000)

      if (success) {
        // Play success sound, show confetti, and display success toast if successful
        playSuccessSound()
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
        toast.success(
          <div className='flex items-center gap-2'>
            {' '}
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
        // Play failure sound and show failure toast if generation failed
        playFailSound()
        toast.error(
          <div className='flex items-center gap-2'>
            {' '}
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
      // Log error, play failure sound, and display error toast in case of exception
      setIsSuccess(false)
      playFailSound()
      toast.error(
        <div className='flex items-center gap-2'>
          {' '}
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
  }, [handleGenerateSummaryAction, playSuccessSound, playFailSound])

  // Array of fun, Harry Potter-themed phrases to add character to the summary generation experience
  const funPhrases = [
    '🧙‍♂️ Accio Summary! Your Words, Summoned',
    '✨ Wingardium Levi-summary! Floating Knowledge Ahead',
    '🦉 Owl Post! Your Summary Has Arrived',
    "🔮 Divination Complete! Here's Your Crystal-Clear Insight",
    '📜 Mischief Managed! Article Shortened with Style',
    '🎩 Expecto Knowledge! Your Summary Has Appeared',
    '💫 Reducio! Your Text, Magically Minimized',
    '🌌 Lumos! Shedding Light on the Essence',
    '🧹 Just Like a Quidditch Match – Swift and Precise!',
    "⚡️ Stupefy! Here's a Stunning Summary",
    '✨ Expelliarmus! Fluff Banished, Only Key Points Remain',
    '🎇 Protego! Shielded from Unnecessary Details',
    "🦄 Felix Felicis! You've Got a Potent Dose of Clarity",
    "✨ Reparo! We've Pieced Together the Best Bits",
    '🧪 Polyjuice Potion Applied – Original, Now Transformed',
    '🔮 Riddikulus! No More Confusion, Just Pure Insight',
    '💡 Lumos Maxima! Illuminating the Core of Your Article',
    '⚡️ Dobby Delivered! A Free Summary, Just for You',
    '📚 The Pensieve Effect! Only the Best Memories Remain',
    '🦉 Hedwig Approved! Your Summary is Here',
    '✨ Conjured with Care: Your Magical Summary',
    '🍫 Like a Chocolate Frog – Sweet and Brief!',
    "⚡️ Alohomora! We've Unlocked the Essence",
    '🎩 Just Like a Quick Trip to Diagon Alley!',
    '✨ Petrificus Totalus! The Key Points, Frozen in Time',
  ]

  // Randomly select a phrase for each summary generation event
  const randomPhrase = funPhrases[Math.floor(Math.random() * funPhrases.length)]

  return (
    <div className='flex-1 p-6 overflow-auto bg-background'>
      {selectedArticle ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='h-full flex flex-col'
        >
          <h3 className='text-xl font-semibold text-foreground mb-4'>{selectedArticle}</h3>
          <p className='flex-1 text-muted-foreground font-bengali overflow-auto'>
            {selectedArticleContent}
          </p>
          <div className='flex justify-end mt-4'>
            <Button onClick={handleUseArticleAction}>Use this article</Button>
          </div>
        </motion.div>
      ) : (
        <div className='h-full flex flex-col'>
          <div className='flex-1 flex flex-col min-h-0'>
            <h2 className='text-xl font-semibold text-foreground mb-4'>Enter an article</h2>
            <div className='flex-1 min-h-0'>
              <Textarea
                value={articleText}
                onChange={e => setArticleTextAction(e.target.value)}
                placeholder='Enter your Bengali article here...'
                className='h-full resize-none font-bengali border-input transition-all duration-300 focus:ring-2 focus:ring-primary'
              />
            </div>
          </div>
          <div className='mt-6'>
            <Button
              onClick={handleGenerate}
              className={cn(
                'w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300',
                'shadow-lg hover:shadow-xl group relative overflow-hidden',
                {
                  'animate-pulse': isLoading,
                }
              )}
              disabled={isLoading}
            >
              <span className='relative z-10 flex items-center justify-center'>
                <Sparkles className={cn('mr-2 h-4 w-4', { 'animate-spin': isLoading })} />
                {isLoading ? `Generating${dots}` : 'Generate Summary'}
              </span>
              <span className='absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </Button>

            {/* Error message display */}
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='mt-2 text-red-500'
              >
                {error}
              </motion.p>
            )}

            {/* Animated summary result display */}
            <AnimatePresence>
              {summary && !isLoading && isSummaryVisible && (
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
                            isSuccess
                              ? 'text-green-700 dark:text-green-300'
                              : 'text-red-700 dark:text-red-300'
                          )}
                        >
                          {isSuccess ? 'Obliviate!' : 'Confundus!'} in{' '}
                          <em>{generationTime.toFixed(2)}s</em>
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
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  )
}
