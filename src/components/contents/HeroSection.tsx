'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function HeroSection() {
  const [articleText, setArticleText] = useState('')
  const [summary, setSummary] = useState('')

  const handleGenerateSummary = async () => {
    // TODO: Implement actual API call to backend
    setSummary('Generated summary will appear here...')
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Enter an article</h1>
        <Textarea
          value={articleText}
          onChange={(e) => setArticleText(e.target.value)}
          placeholder="Enter your Bengali article here..."
          className="min-h-[200px] font-bengali"
        />
      </div>
      
      <Button onClick={handleGenerateSummary}>
        Generate Summary
      </Button>

      {summary && (
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Article Summary</h2>
          <div className="p-8 rounded-lg border bg-muted font-bengali">
            {summary}
          </div>
        </div>
      )}
    </div>
  )
}
