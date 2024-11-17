'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArticleInput } from './MainContent/ArticleInput'
import { SummaryDisplay } from './MainContent/SummaryDisplay'
import {
  useLoadingDots,
  useTypingEffect,
  useCelebrationEffect,
  handleGenerate,
} from './MainContent/SummaryControls'
import { useCustomSound } from '@/hooks/useCustomSound'
import { minChars, maxChars, funPhrases } from '@/lib/constants'

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
 * Handles the main content area for:
 * - Article input and validation.
 * - Summary generation logic with sound and visual feedback.
 * - Displaying the generated summary.
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
}: MainContentProps): React.ReactElement {
  const [isSummaryVisible, setIsSummaryVisible] = useState(false) // Summary visibility state
  const [generationTime, setGenerationTime] = useState(0) // Time taken for summary generation
  const [isSuccess, setIsSuccess] = useState(false) // Success or failure state for summary generation

  // Initialize sound hooks for success and failure
  const [playSuccessSound] = useCustomSound('/success.mp3')
  const [playFailSound] = useCustomSound('/fail.mp3')

  // Character count and input validation
  const charCount = articleText.length
  const isMinReached = charCount >= minChars
  const isMaxReached = charCount >= maxChars

  // Hooks for UI animations and effects
  const dots = useLoadingDots(isLoading)
  const { isTyping, setIsTyping } = useTypingEffect(articleText)
  const { showCelebration } = useCelebrationEffect(isMinReached)

  // Select a random motivational phrase for successful generation
  const randomPhrase = funPhrases[Math.floor(Math.random() * funPhrases.length)]

  /**
   * Wrapper function to handle the summary generation process.
   * Includes sound effects and celebratory visuals.
   */
  const handleGenerateWrapper = async () => {
    await handleGenerate({
      setIsSummaryVisibleAction: setIsSummaryVisible,
      setIsSuccessAction: setIsSuccess,
      handleGenerateSummaryAction,
      setGenerationTimeAction: setGenerationTime,
      playSuccessSoundAction: playSuccessSound,
      playFailSoundAction: playFailSound,
    })
  }

  return (
    <div className='flex-1 p-6 overflow-auto bg-background'>
      {/* Display selected article if available */}
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
          {/* Article input component */}
          <ArticleInput
            articleText={articleText}
            setArticleTextAction={setArticleTextAction}
            isTyping={isTyping}
            setIsTyping={setIsTyping}
            charCount={charCount}
            maxChars={maxChars}
            showCelebration={showCelebration}
            isMinReached={isMinReached}
            minChars={minChars}
          />
          <div className='mt-4 space-y-3'>
            {/* Generate Summary Button */}
            <Button
              onClick={handleGenerateWrapper}
              className={cn(
                'w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300',
                'shadow-lg hover:shadow-xl group relative overflow-hidden',
                {
                  'animate-pulse': isLoading,
                }
              )}
              disabled={isLoading || !isMinReached || isMaxReached}
            >
              <span className='relative z-10 flex items-center justify-center'>
                {isLoading ? `Generating${dots}` : 'Generate Summary'}
              </span>
              <span className='absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </Button>

            {/* Error Message */}
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='mt-2 text-red-500'
              >
                {error}
              </motion.p>
            )}

            {/* Display the generated summary */}
            <AnimatePresence>
              {summary && !isLoading && isSummaryVisible && (
                <SummaryDisplay
                  summary={summary}
                  isSuccess={isSuccess}
                  generationTime={generationTime}
                  randomPhrase={randomPhrase}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  )
}
