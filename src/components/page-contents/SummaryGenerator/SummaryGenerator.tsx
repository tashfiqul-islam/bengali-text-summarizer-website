'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import { useSummaryGenerator } from '@/hooks/useSummaryGenerator'

/**
 * SummaryGenerator Component
 * Integrates the summarization hook and renders the UI components for the summary generator.
 */
export default function SummaryGenerator() {
  const {
    articleText,
    setArticleText,
    summary,
    selectedArticle,
    selectedArticleContent,
    currentSection,
    expandedCategory,
    isSidebarCollapsed,
    isLoading, // Loading state for summary generation
    error, // Error state for handling any errors during summary generation
    handleGenerateSummary,
    handleUseArticle,
    handleSelectArticle,
    handleEnterOwn,
    toggleCategory,
    toggleSidebar,
  } = useSummaryGenerator()

  return (
    <Card className='w-[100%] max-w-[calc(100vw-40px)] mx-auto my-6 shadow-lg overflow-hidden'>
      <CardContent className='p-0'>
        <div className='h-[500px] relative flex overflow-hidden rounded-[inherit]'>
          <Sidebar
            isSidebarCollapsed={isSidebarCollapsed}
            expandedCategory={expandedCategory}
            handleEnterOwn={handleEnterOwn}
            handleSelectArticle={handleSelectArticle}
            toggleCategory={toggleCategory}
            toggleSidebar={toggleSidebar}
          />
          <MainContent
            isSidebarCollapsed={isSidebarCollapsed}
            toggleSidebar={toggleSidebar}
            currentSection={currentSection}
            selectedArticle={selectedArticle}
            selectedArticleContent={selectedArticleContent}
            articleText={articleText}
            setArticleText={setArticleText}
            summary={summary}
            handleUseArticle={handleUseArticle}
            handleGenerateSummary={handleGenerateSummary}
            isLoading={isLoading} // Pass loading state to MainContent for loading indicator
            error={error} // Pass error state to MainContent for error handling
          />
        </div>
      </CardContent>
    </Card>
  )
}
