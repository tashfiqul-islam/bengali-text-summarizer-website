import { useState, useCallback } from 'react'
import { categories } from './constants'
import { Category, CurrentSection } from './types'

export function useSummaryGenerator() {
  const [articleText, setArticleText] = useState('')
  const [summary, setSummary] = useState('')
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null)
  const [selectedArticleContent, setSelectedArticleContent] = useState<string | null>(null)
  const [currentSection, setCurrentSection] = useState<CurrentSection>({ category: '', article: '' })
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const resetState = useCallback(() => {
    setSummary('')
    setSelectedArticle(null)
    setSelectedArticleContent(null)
  }, [])

  const handleGenerateSummary = useCallback(() => {
    // Implement summary generation logic here
    setSummary('This is a placeholder summary.')
  }, [])

  const handleUseArticle = useCallback(() => {
    if (selectedArticleContent) {
      setArticleText(selectedArticleContent)
      setCurrentSection({ category: '', article: 'New Article' })
      resetState()
    }
  }, [selectedArticleContent, resetState])

  const handleSelectArticle = useCallback((category: string, article: string) => {
    const selectedCategory = categories.find(c => c.name === category)
    const selectedArticleData = selectedCategory?.articles.find(a => a.title === article)
    
    if (selectedArticleData) {
      if (selectedArticle === article) {
        // If the same article is selected again, reset the state
        resetState()
        setArticleText('')
      } else {
        setSelectedArticle(article)
        setSelectedArticleContent(selectedArticleData.content)
        setArticleText('')
        setSummary('')
      }
      setCurrentSection({ category, article })
    }
  }, [selectedArticle, resetState])

  const handleEnterOwn = useCallback(() => {
    resetState()
    setArticleText('')
    setCurrentSection({ category: '', article: 'New Article' })
  }, [resetState])

  const toggleCategory = useCallback((category: string) => {
    setExpandedCategory(prev => prev === category ? null : category)
  }, [])

  const toggleSidebar = useCallback(() => {
    setIsSidebarCollapsed(prev => !prev)
  }, [])

  return {
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
  }
}
