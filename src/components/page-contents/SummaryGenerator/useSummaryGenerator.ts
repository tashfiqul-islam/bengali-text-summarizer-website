import { useState, useCallback } from 'react'
import { categories } from '../../../lib/constants'
import { CurrentSection } from '../../../lib/types'

// Define types for the API response
type ApiResponse = {
  summary_text: string
}

export function useSummaryGenerator() {
  const [articleText, setArticleText] = useState('')
  const [summary, setSummary] = useState('')
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null)
  const [selectedArticleContent, setSelectedArticleContent] = useState<string | null>(null)
  const [currentSection, setCurrentSection] = useState<CurrentSection>({ category: '', article: '' })
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const resetState = useCallback(() => {
    setSummary('')
    setSelectedArticle(null)
    setSelectedArticleContent(null)
    setError(null)
  }, [])

  // Function to query the Hugging Face Inference API
  const query = useCallback(async (articleText: string): Promise<ApiResponse> => {
    const response = await fetch(
      process.env.HF_API_KEY as string,
      {
        headers: { 
          "Accept": "application/json",
          "Authorization": `Bearer ${process.env.HF_BEARER_TOKEN}`,
          "Content-Type": "application/json" 
        },
        method: "POST",
        body: JSON.stringify({
          "inputs": articleText, // Use the articleText directly
          //"parameters": {} // Additional parameters can be added here
        }),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to fetch summary from API');
    }
    return response.json();
  }, [])

  // Handle summary generation
  const handleGenerateSummary = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const result = await query(articleText)
      setSummary(result.summary_text)
    } catch (err) {
      setError('Failed to generate summary. Please try again.')
      console.error('Error generating summary:', err)
    } finally {
      setIsLoading(false)
    }
  }, [articleText, query])

  // Handle using selected article
  const handleUseArticle = useCallback(() => {
    if (selectedArticleContent) {
      setArticleText(selectedArticleContent)
      setCurrentSection({ category: '', article: 'New Article' })
      resetState()
    }
  }, [selectedArticleContent, resetState])

  // Handle selecting an article
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

  // Handle entering own text
  const handleEnterOwn = useCallback(() => {
    resetState()
    setArticleText('')
    setCurrentSection({ category: '', article: 'New Article' })
  }, [resetState])

  // Toggle category expansion
  const toggleCategory = useCallback((category: string) => {
    setExpandedCategory(prev => prev === category ? null : category)
  }, [])

  // Toggle sidebar collapse
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
