'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { FileText } from 'lucide-react'
import { Article } from '@/lib/constants'

interface ArticleListProps {
  articles: Article[]
  handleSelectArticleAction: (articleTitle: string) => void
}

/**
 * ArticleList Component
 *
 * This component renders a list of articles for a selected category.
 * It provides a scrollable list of article titles that can be selected.
 *
 * @param {ArticleListProps} props - The properties passed to this component.
 * @returns {React.ReactElement} The rendered ArticleList component.
 */
export function ArticleList({ articles, handleSelectArticleAction }: ArticleListProps) {
  // Animation variants for list items
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  }

  return (
    <motion.ul initial='hidden' animate='visible' className='space-y-1'>
      {' '}
      {/* Reduced spacing */}
      {articles.map((article, index) => (
        <motion.li key={article.title} variants={itemVariants} custom={index}>
          <Button
            variant='ghost'
            className='w-full justify-start text-left px-2 py-1'
            onClick={() => handleSelectArticleAction(article.title)}
          >
            <FileText className='mr-2 h-4 w-4' />
            <span className='truncate'>{article.title}</span>
          </Button>
        </motion.li>
      ))}
    </motion.ul>
  )
}
