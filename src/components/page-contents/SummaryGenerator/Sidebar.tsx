'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { PenLine, FileText } from 'lucide-react'
import { CategoryList } from './CategoryList'

interface SidebarProps {
  isSidebarCollapsed: boolean
  expandedCategory: string | null
  handleEnterOwnAction: () => void
  handleSelectArticleAction: (category: string, article: string) => void
  toggleCategoryAction: (category: string) => void
}

/**
 * Sidebar Component
 *
 * This component renders the collapsible sidebar of the Summary Generator.
 * It includes a header with a title, a button to enter custom text, and the CategoryList.
 *
 * @param {SidebarProps} props - The properties passed to this component.
 * @returns {React.ReactElement} The rendered Sidebar component.
 */
export const Sidebar: React.FC<SidebarProps> = ({
  isSidebarCollapsed,
  expandedCategory,
  handleEnterOwnAction,
  handleSelectArticleAction,
  toggleCategoryAction,
}) => {
  // Animation variants for sidebar expansion and collapse
  const sidebarVariants = {
    expanded: { width: '20rem' },
    collapsed: { width: '4rem' },
  }

  return (
    <motion.div
      className='border-r border-border bg-sidebar-background text-sidebar-foreground h-full'
      variants={sidebarVariants}
      animate={isSidebarCollapsed ? 'collapsed' : 'expanded'}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Sidebar Header */}
      <div
        className={`h-[60px] px-4 border-b border-border sticky top-0 bg-sidebar-background z-10 flex items-center ${
          isSidebarCollapsed ? 'justify-center' : 'justify-start'
        }`}
      >
        <FileText className='h-5 w-5 text-sidebar-foreground' />
        <motion.h2
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isSidebarCollapsed ? 0 : 1, x: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`font-semibold ml-2 text-sidebar-foreground whitespace-nowrap ${
            isSidebarCollapsed ? 'hidden' : 'block'
          }`}
        >
          Summary Generator
        </motion.h2>
      </div>

      {/* Sidebar Content */}
      <ScrollArea className='h-[calc(100vh-60px)]'>
        <div className='p-2'>
          {' '}
          {/* Reduced padding */}
          {/* Button to Enter Custom Text */}
          <Button
            variant='outline'
            className={`w-full ${isSidebarCollapsed ? 'justify-center' : 'justify-start'} my-1`}
            onClick={handleEnterOwnAction}
          >
            <PenLine className={`h-4 w-4 ${isSidebarCollapsed ? 'mr-0' : 'mr-2'}`} />
            {!isSidebarCollapsed && <span>Enter your own</span>}
          </Button>
          {/* Category List */}
          <div className='mt-2'>
            <CategoryList
              expandedCategory={expandedCategory}
              toggleCategoryAction={toggleCategoryAction}
              handleSelectArticleAction={handleSelectArticleAction}
              isSidebarCollapsed={isSidebarCollapsed}
            />
          </div>
        </div>
      </ScrollArea>
    </motion.div>
  )
}
