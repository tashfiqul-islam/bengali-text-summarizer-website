'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ArticleInputProps {
  articleText: string
  setArticleTextAction: (text: string) => void
  selectedArticle: string | null
  selectedArticleContent: string | null
  handleUseArticleAction: () => void
  handleGenerateSummaryAction: () => void
  isLoading: boolean
}

/**
 * ArticleInput Component
 *
 * This component handles the input for new articles or displays selected articles.
 * It provides a textarea for article input and buttons for generating summaries or using selected articles.
 *
 * @param {ArticleInputProps} props - The properties passed to this component.
 * @returns {React.ReactElement} The rendered ArticleInput component.
 */
export default function ArticleInput({
  articleText,
  setArticleTextAction,
  selectedArticle,
  selectedArticleContent,
  handleUseArticleAction,
  handleGenerateSummaryAction,
  isLoading,
}: ArticleInputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='flex flex-col h-full'
    >
      {selectedArticle ? (
        <div className='flex flex-col h-full'>
          <h3 className='text-xl font-semibold text-foreground mb-4'>{selectedArticle}</h3>
          <p className='flex-1 text-muted-foreground font-bengali overflow-auto mb-4'>
            {selectedArticleContent}
          </p>
          <Button onClick={handleUseArticleAction} className='self-end'>
            Use this article
          </Button>
        </div>
      ) : (
        <div className='flex flex-col h-full'>
          <h2 className='text-xl font-semibold text-foreground mb-4'>Enter an article</h2>
          <Textarea
            value={articleText}
            onChange={e => setArticleTextAction(e.target.value)}
            placeholder='Enter your Bengali article here...'
            className='flex-1 resize-none font-bengali border-input transition-all duration-300 focus:ring-2 focus:ring-primary mb-4'
          />
          <Button
            onClick={handleGenerateSummaryAction}
            className={cn(
              'w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300',
              {
                'animate-pulse': isLoading,
              }
            )}
            disabled={isLoading}
          >
            <Sparkles className='mr-2 h-4 w-4' />
            {isLoading ? 'Generating...' : 'Generate Summary'}
          </Button>
        </div>
      )}
    </motion.div>
  )
}
