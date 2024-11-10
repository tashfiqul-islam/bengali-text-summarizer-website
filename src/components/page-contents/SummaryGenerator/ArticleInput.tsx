import React from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ArticleInputProps {
  articleText: string
  setArticleText: (text: string) => void
}

export default function ArticleInput({ articleText, setArticleText }: ArticleInputProps) {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle className='text-xl font-bold'>Enter an article</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          value={articleText}
          onChange={e => setArticleText(e.target.value)}
          placeholder='Enter your Bengali article here...'
          className='w-full h-[200px] resize-none font-bengali'
          aria-label='Article input'
        />
      </CardContent>
    </Card>
  )
}
