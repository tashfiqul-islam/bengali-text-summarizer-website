import { useState, useCallback } from 'react'
import { categories } from '@/lib/constants'
import { CurrentSection } from '@/lib/types'

// Define types for the expected API response structure
type SummaryData = {
  summary_text: string
}

type ApiResponse = {
  success: boolean
  data: SummaryData[]
}

/**
 * Custom hook for managing article text, summary generation, and related UI states.
 * Provides functionality for interacting with the summary generation API and handling UI state.
 */
export function useSummaryGenerator() {
  // State variables for managing article text, summary, and selected article details
  const [articleText, setArticleText] = useState('')
  const [summary, setSummary] = useState('')
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null)
  const [selectedArticleContent, setSelectedArticleContent] = useState<string | null>(null)
  const [currentSection, setCurrentSection] = useState<CurrentSection>({
    category: '',
    article: '',
  })
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  /**
   * Resets the state of summary, selected article, and error when needed.
   */
  const resetState = useCallback(() => {
    setSummary('')
    setSelectedArticle(null)
    setSelectedArticleContent(null)
    setError(null)
  }, [])

  /**
   * Function to send a POST request to the internal API route for summary generation.
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

    const result: ApiResponse = await response.json()
    return result
  }, [])

  /**
   * Generates the summary by calling the query function and updating the state accordingly.
   */
  const handleGenerateSummary = useCallback(async () => {
    setIsLoading(true) // Set loading state to show progress indicator
    setError(null) // Clear any previous error

    try {
      // Call query function and set the summary state
      const result = await query(articleText)

      // Extract `summary_text` from the first element of `data` array
      const summaryText = result.data?.[0]?.summary_text || '' // Adjusted to match response structure
      setSummary(summaryText)
    } catch (err) {
      // Set error message for user feedback
      setError('Failed to generate summary. Please try again.')
      console.error('Error generating summary:', err)
    } finally {
      setIsLoading(false) // Reset loading state
    }
  }, [articleText, query])

  /**
   * Sets the article text and resets other states when using a selected article.
   */
  const handleUseArticle = useCallback(() => {
    if (selectedArticleContent) {
      setArticleText(selectedArticleContent)
      setCurrentSection({ category: '', article: 'New Article' })
      resetState()
    }
  }, [selectedArticleContent, resetState])

  /**
   * Handles selecting an article from a category, updating the current section.
   * @param category - The selected category name
   * @param article - The selected article title
   */
  const handleSelectArticle = useCallback(
    (category: string, article: string) => {
      const selectedCategory = categories.find(c => c.name === category)
      const selectedArticleData = selectedCategory?.articles.find(a => a.title === article)

      if (selectedArticleData) {
        if (selectedArticle === article) {
          // If the same article is selected again, reset the state
          resetState()
          setArticleText('')
        } else {
          // Update state with the selected article details
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
   * Clears current state to allow entering a new custom article.
   */
  const handleEnterOwn = useCallback(() => {
    resetState()
    setArticleText('')
    setCurrentSection({ category: '', article: 'New Article' })
  }, [resetState])

  /**
   * Expands or collapses a category in the sidebar.
   * @param category - The selected category name
   */
  const toggleCategory = useCallback((category: string) => {
    setExpandedCategory(prev => (prev === category ? null : category))
  }, [])

  /**
   * Toggles the sidebar between collapsed and expanded states.
   */
  const toggleSidebar = useCallback(() => {
    setIsSidebarCollapsed(prev => !prev)
  }, [])

  // Exposing necessary state and handlers for use in components
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
