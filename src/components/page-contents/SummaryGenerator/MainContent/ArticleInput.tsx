import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, CheckCircle, Pencil } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'

interface ArticleInputProps {
  articleText: string
  setArticleTextAction: (text: string) => void
  isTyping: boolean
  setIsTyping: (isTyping: boolean) => void
  charCount: number
  maxChars: number
  showCelebration: boolean
  isMinReached: boolean
  minChars: number
}

export function ArticleInput({
  articleText,
  setArticleTextAction,
  isTyping,
  setIsTyping,
  charCount,
  maxChars,
  showCelebration,
  isMinReached,
  minChars,
}: ArticleInputProps) {
  return (
    <div className='flex-1 flex flex-col min-h-0'>
      <h2 className='text-xl font-semibold text-foreground mb-4'>Enter an article</h2>
      <div className='flex-1 min-h-0 relative'>
        <Textarea
          value={articleText}
          onChange={e => {
            setArticleTextAction(e.target.value)
            setIsTyping(true)
          }}
          placeholder='Enter your Bengali article here...'
          className='h-full resize-none font-bengali border-input transition-all duration-300 focus:ring-2 focus:ring-primary'
          maxLength={maxChars}
        />
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className='absolute bottom-4 right-4 bg-primary text-primary-foreground rounded-full px-2 py-1 text-xs font-medium'
            >
              <Pencil className='inline-block w-3 h-3 mr-1' />
              Typing...
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className='mt-4 space-y-3'>
        <div className='flex justify-between items-center text-sm'>
          <span className='text-muted-foreground'>
            {charCount} / {maxChars} characters
          </span>
          <AnimatePresence>
            {showCelebration && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className='flex items-center space-x-1 bg-green-500 text-white px-2 py-0.5 rounded-full'
              >
                <CheckCircle className='w-3 h-3' />
                <span className='text-xs'>Min. requirement met</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className='w-3 h-3' />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className='space-y-2'>
          <div className='relative h-2 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-700'>
            <div
              className='absolute left-0 top-0 h-full bg-black transition-all duration-500 ease-in-out dark:bg-white'
              style={{
                width: `${Math.min((charCount / minChars) * 100, 100)}%`,
              }}
            />
            {charCount > minChars && (
              <div
                className='absolute left-0 top-0 h-full bg-blue-600 transition-all duration-500 ease-in-out dark:bg-blue-400'
                style={{
                  width: `${((charCount - minChars) / (maxChars - minChars)) * 100}%`,
                }}
              />
            )}
          </div>
        </div>

        <AnimatePresence>
          {!isMinReached && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className='text-xs text-gray-800 dark:text-gray-200'
            >
              {minChars - charCount} more characters needed to generate summary
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
