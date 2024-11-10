import React from 'react'
import { PanelLeft } from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { CurrentSection } from '../../../lib/types'

// Define the expected props with type annotations
interface MainContentProps {
  isSidebarCollapsed: boolean
  toggleSidebar: () => void
  currentSection: CurrentSection
  selectedArticle: string | null
  selectedArticleContent: string | null
  articleText: string
  setArticleText: (text: string) => void
  summary: string
  isLoading: boolean // Loading state for summary generation
  error: string | null // Error message, if any
  handleUseArticle: () => void
  handleGenerateSummary: () => void
}

/**
 * MainContent Component
 * Renders the main content area, including a textarea for article input,
 * a summary display, and a button for summary generation.
 */
export default function MainContent({
  toggleSidebar,
  currentSection,
  selectedArticle,
  selectedArticleContent,
  articleText,
  setArticleText,
  summary,
  isLoading,
  error,
  handleUseArticle,
  handleGenerateSummary,
}: MainContentProps) {
  return (
    <div className='flex-1 flex flex-col min-w-0'>
      {/* Header with Sidebar Toggle and Breadcrumb Navigation */}
      <header className='flex h-[60px] items-center gap-4 border-b border-border bg-background px-6 flex-shrink-0'>
        <Button variant='ghost' size='icon' onClick={toggleSidebar} className='h-8 w-8'>
          <PanelLeft className='h-4 w-4' />
          <span className='sr-only'>Toggle Sidebar</span>
        </Button>
        <Separator orientation='vertical' className='h-6' />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='#' className='text-muted-foreground'>
                {currentSection.category || 'Articles'}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className='text-foreground'>
                {currentSection.article || 'New Article'}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      {/* Main Content Area */}
      <div className='flex-1 p-6 overflow-auto bg-background'>
        {selectedArticle ? (
          <div className='h-full flex flex-col'>
            <h3 className='text-xl font-semibold text-foreground mb-4'>{selectedArticle}</h3>
            <p className='flex-1 text-muted-foreground font-bengali overflow-auto'>
              {selectedArticleContent}
            </p>
            <div className='flex justify-end mt-4'>
              <Button onClick={handleUseArticle}>Use this article</Button>
            </div>
          </div>
        ) : (
          <div className='h-full flex flex-col'>
            <div className='flex-1 flex flex-col min-h-0'>
              <h2 className='text-xl font-semibold text-foreground mb-4'>Enter an article</h2>
              <div className='flex-1 min-h-0'>
                <Textarea
                  value={articleText}
                  onChange={e => setArticleText(e.target.value)}
                  placeholder='Enter your Bengali article here...'
                  className='h-full resize-none font-bengali border-input'
                />
              </div>
            </div>
            <div className='mt-6'>
              {/* Generate Summary Button */}
              <Button
                onClick={handleGenerateSummary}
                className='w-full bg-primary text-primary-foreground hover:bg-primary/90'
                disabled={isLoading} // Disable button when loading
              >
                {isLoading ? 'Generating...' : 'Generate Summary'}
              </Button>

              {/* Display error message if there is an error */}
              {error && <p className='mt-2 text-red-500'>{error}</p>}

              {/* Display the summary if available and not loading */}
              {summary && !isLoading && (
                <div className='mt-6'>
                  <h2 className='text-lg font-semibold text-foreground mb-3'>Article Summary</h2>
                  <div className='p-4 rounded-lg border border-border bg-muted font-bengali text-foreground'>
                    {summary}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
