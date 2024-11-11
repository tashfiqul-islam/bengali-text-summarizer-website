'use client'

import React from 'react'
import { useSummaryGenerator } from '@/hooks/useSummaryGenerator'
import { Card, CardContent } from '@/components/ui/card'
import MainContent from './MainContent'
import { Sidebar } from './Sidebar'
import Header from './Header'

/**
 * SummaryGenerator Component
 *
 * This is the main container component for the Summary Generator application.
 * It orchestrates the layout and data flow between the sidebar, header, and main content areas.
 *
 * @returns {React.ReactElement} The rendered SummaryGenerator component.
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
    isLoading,
    error,
    handleGenerateSummary,
    handleUseArticle,
    handleSelectArticle,
    handleEnterOwn,
    toggleCategory,
    toggleSidebar,
  } = useSummaryGenerator()

  return (
    <Card className='w-full max-w-[calc(100vw-40px)] mx-auto my-4 shadow-lg overflow-hidden'>
      <CardContent className='p-0 max-h-[50vh] h-[50vh]'>
        {' '}
        {/* Set max height to 40% of viewport height */}
        <div className='h-full relative flex overflow-hidden rounded-[inherit]'>
          {/* Sidebar Component */}
          <Sidebar
            isSidebarCollapsed={isSidebarCollapsed}
            expandedCategory={expandedCategory}
            handleEnterOwnAction={handleEnterOwn}
            handleSelectArticleAction={handleSelectArticle}
            toggleCategoryAction={toggleCategory}
          />

          {/* Main Content Area */}
          <div className='flex-1 flex flex-col min-w-0'>
            <Header
              isSidebarCollapsed={isSidebarCollapsed}
              toggleSidebarAction={toggleSidebar}
              currentSection={currentSection}
            />
            <MainContent
              articleText={articleText}
              setArticleTextAction={setArticleText}
              summary={summary}
              selectedArticle={selectedArticle}
              selectedArticleContent={selectedArticleContent}
              handleUseArticleAction={handleUseArticle}
              handleGenerateSummaryAction={handleGenerateSummary}
              isLoading={isLoading}
              error={error}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
