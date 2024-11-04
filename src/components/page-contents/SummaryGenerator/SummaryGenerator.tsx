'use client'

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import Sidebar from "./Sidebar"
import MainContent from "./MainContent"
import { useSummaryGenerator } from "./useSummaryGenerator"

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
    handleGenerateSummary,
    handleUseArticle,
    handleSelectArticle,
    handleEnterOwn,
    toggleCategory,
    toggleSidebar,
  } = useSummaryGenerator()

  return (
    <Card className="w-[100%] max-w-[calc(100vw-40px)] mx-auto my-6 shadow-lg overflow-hidden">
      <CardContent className="p-0">
        <div className="h-[500px] relative flex overflow-hidden rounded-[inherit]">
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
          />
        </div>
      </CardContent>
    </Card>
  )
}
