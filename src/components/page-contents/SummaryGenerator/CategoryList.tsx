'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { categories } from '@/lib/constants'
import { ArticleList } from './ArticleList'

interface CategoryListProps {
  expandedCategory: string | null
  handleSelectArticleAction: (category: string, article: string) => void
  toggleCategoryAction: (category: string) => void
  isSidebarCollapsed: boolean
}

/**
 * CategoryList Component
 *
 * This component renders the list of categories in the sidebar.
 * It handles the expansion and collapse of categories and renders the ArticleList for expanded categories.
 *
 * @param {CategoryListProps} props - The properties passed to this component.
 * @returns {React.ReactElement} The rendered CategoryList component.
 */
export function CategoryList({
  expandedCategory,
  toggleCategoryAction,
  handleSelectArticleAction,
  isSidebarCollapsed,
}: CategoryListProps) {
  // Animation variants for the category content
  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  }

  return (
    <div className='space-y-1'>
      {' '}
      {/* Reduced spacing between categories */}
      {categories.map(category => (
        <div key={category.name} className='mb-1'>
          {' '}
          {/* Reduced bottom margin */}
          {/* Category Toggle Button */}
          <Button
            variant='ghost'
            className={`w-full justify-between px-2 ${isSidebarCollapsed ? 'justify-center' : ''}`}
            onClick={() => toggleCategoryAction(category.name)}
          >
            <span className='flex items-center'>
              <category.icon className={`h-4 w-4 ${isSidebarCollapsed ? 'mr-0' : 'mr-2'}`} />
              {!isSidebarCollapsed && <span>{category.name}</span>}
            </span>
            {!isSidebarCollapsed &&
              (expandedCategory === category.name ? (
                <ChevronDown className='h-4 w-4' />
              ) : (
                <ChevronRight className='h-4 w-4' />
              ))}
          </Button>
          {/* Animated Article List */}
          <AnimatePresence>
            {!isSidebarCollapsed && expandedCategory === category.name && (
              <motion.div
                initial='hidden'
                animate='visible'
                exit='hidden'
                variants={contentVariants}
                className='pl-4'
              >
                <ArticleList
                  articles={category.articles}
                  handleSelectArticleAction={article =>
                    handleSelectArticleAction(category.name, article)
                  }
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
