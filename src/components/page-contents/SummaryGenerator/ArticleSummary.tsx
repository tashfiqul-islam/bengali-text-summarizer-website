'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Loader2, RefreshCw } from 'lucide-react'

interface ArticleSummaryProps {
  summary: string
  isLoading: boolean
  onRegenerateSummaryAction: () => void
}

/**
 * ArticleSummary Component
 *
 * This component displays the generated summary of an article.
 * It includes a loading state, the summary content, and a button to regenerate the summary.
 *
 * @param {ArticleSummaryProps} props - The properties passed to this component.
 * @returns {React.ReactElement} The rendered ArticleSummary component.
 */
export default function ArticleSummary({
  summary,
  isLoading,
  onRegenerateSummaryAction,
}: ArticleSummaryProps) {
  // Animation variants for the summary card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  }

  return (
    <AnimatePresence mode='wait'>
      {(summary || isLoading) && (
        <motion.div
          key='summary-card'
          variants={cardVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          <Card className='mt-6 overflow-hidden'>
            <CardHeader>
              <CardTitle className='flex justify-between items-center'>
                <span>Article Summary</span>
                {!isLoading && (
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={onRegenerateSummaryAction}
                    aria-label='Regenerate summary'
                  >
                    <RefreshCw className='h-4 w-4 mr-2' />
                    Regenerate
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className='flex items-center justify-center p-4'>
                  <Loader2 className='h-6 w-6 animate-spin text-primary' />
                  <span className='ml-2 text-sm text-muted-foreground'>Generating summary...</span>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className='p-4 rounded-md border border-border bg-muted font-bengali'
                >
                  {summary}
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
