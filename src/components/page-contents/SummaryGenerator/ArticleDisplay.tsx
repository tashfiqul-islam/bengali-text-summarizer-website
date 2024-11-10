import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import ArticleInput from './ArticleInput'
import ArticleSummary from './ArticleSummary'

interface ArticleDisplayProps {
  articleText: string
  setArticleText: (text: string) => void
  summary: string
  selectedArticle: string | null
  handleGenerateSummary: () => void
  handleUseArticle: () => void
}

const ArticleDisplay: React.FC<ArticleDisplayProps> = ({
  articleText,
  setArticleText,
  summary,
  selectedArticle,
  handleGenerateSummary,
  handleUseArticle,
}) => {
  return selectedArticle ? (
    <Card className='h-full'>
      <CardContent className='p-6 h-full flex flex-col'>
        <h3 className='text-xl font-semibold mb-4'>{selectedArticle}</h3>
        <p className='mb-4 flex-1 overflow-y-auto'>Article content would appear here...</p>
        <div className='flex justify-end'>
          <Button onClick={handleUseArticle} variant='outline'>
            Use this article
          </Button>
        </div>
      </CardContent>
    </Card>
  ) : (
    <div className='space-y-4 h-full flex flex-col'>
      <ArticleInput articleText={articleText} setArticleText={setArticleText} />
      <ArticleSummary summary={summary} handleGenerateSummary={handleGenerateSummary} />
    </div>
  )
}

export default ArticleDisplay
