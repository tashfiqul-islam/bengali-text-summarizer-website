'use client'

import { useState, useCallback, useEffect } from 'react'
import { categories } from '@/lib/constants'

// Define types for the expected API response structure
type SummaryData = {
  summary_text: string
}

type ApiResponse = {
  success: boolean
  data: SummaryData[]
}

// Define the structure for the current section
type CurrentSection = {
  category: string
  article: string
}

/**
 * Custom hook for managing the state and logic of the Summary Generator
 *
 * This hook provides functionality for:
 * - Managing article text and generated summaries
 * - Handling article selection and display
 * - Managing sidebar state (expanded categories, collapse state)
 * - Generating summaries via API calls
 * - Error handling and loading states
 */
export function useSummaryGenerator() {
  // State for managing article text and summary
  const [articleText, setArticleText] = useState('')
  const [summary, setSummary] = useState('')

  // State for managing selected article
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null)
  const [selectedArticleContent, setSelectedArticleContent] = useState<string | null>(null)

  // State for managing current section and sidebar
  const [currentSection, setCurrentSection] = useState<CurrentSection>({
    category: '',
    article: '',
  })
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  // State for managing loading and error states
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  /**
   * Resets the state related to article selection and summary
   */
  const resetState = useCallback(() => {
    setSummary('')
    setSelectedArticle(null)
    setSelectedArticleContent(null)
    setError(null)
  }, [])

  /**
   * Sends a POST request to the internal API route for summary generation
   * @param articleText - The text of the article to be summarized
   * @returns The API response containing the summary text
   */
  const query = useCallback(async (articleText: string): Promise<ApiResponse> => {
    const response = await fetch('/api/bts-summarizer', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: articleText }),
    })

    if (!response.ok) {
      throw new Error('Failed to fetch summary from API')
    }

    return await response.json()
  }, [])

  /**
   * Generates a summary for the current article text
   * Returns a boolean indicating success (true) or failure (false)
   */
  const handleGenerateSummary = useCallback(async (): Promise<boolean> => {
    setIsLoading(true)
    setError(null)

    try {
      const result = await query(articleText)
      const summaryText = result.data?.[0]?.summary_text || ''
      setSummary(summaryText)
      return true
    } catch (err) {
      console.error('Error generating summary:', err)
      return false
    } finally {
      setIsLoading(false)
    }
  }, [articleText, query])

  /**
   * Sets the article text to the content of the selected article
   */
  const handleUseArticle = useCallback(() => {
    if (selectedArticleContent) {
      setArticleText(selectedArticleContent)
      setCurrentSection({ category: '', article: 'New Article' })
      resetState()
    }
  }, [selectedArticleContent, resetState])

  /**
   * Handles the selection of an article from the sidebar
   * @param category - The category of the selected article
   * @param article - The title of the selected article
   */
  const handleSelectArticle = useCallback(
    (category: string, article: string) => {
      const selectedCategory = categories.find(c => c.name === category)
      const selectedArticleData = selectedCategory?.articles.find(a => a.title === article)

      if (selectedArticleData) {
        if (selectedArticle === article) {
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
    },
    [selectedArticle, resetState]
  )

  /**
   * Resets the state to allow entering a new custom article
   */
  const handleEnterOwn = useCallback(() => {
    resetState()
    setArticleText('')
    setCurrentSection({ category: '', article: 'New Article' })
  }, [resetState])

  /**
   * Toggles the expanded state of a category in the sidebar
   * @param category - The category to toggle
   */
  const toggleCategory = useCallback((category: string) => {
    setExpandedCategory(prev => (prev === category ? null : category))
  }, [])

  /**
   * Toggles the collapsed state of the sidebar
   */
  const toggleSidebar = useCallback(() => {
    setIsSidebarCollapsed(prev => !prev)
  }, [])

  // Effect to clear error after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [error])

  return {
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
  }
}
