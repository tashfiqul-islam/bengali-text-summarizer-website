import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import { Skeleton } from "@/components/ui/skeleton"


// Dynamic imports for performance optimization
const SummaryGenerator = dynamic(() => import('@/components/page-contents/SummaryGenerator/SummaryGenerator'), {
  loading: () => <Skeleton className="h-[400px] w-full rounded-xl" />
})

const ProjectMetadata = dynamic(() => import('@/components/page-contents/AdditionalContents/ProjectMetadata'), {
  loading: () => <Skeleton className="h-[600px] w-full rounded-xl" />
})

// Metadata for the Home page
export const metadata: Metadata = {
  title: 'Home | Bengali Text Summarizer',
  description: 'Generate summaries of Bengali text using our advanced NLP model',
}

export default function Home() {
  return (
    <main className="flex-1 container mx-auto p-1 space-y-6" aria-label="Bengali Text Summarizer Main Content">
      {/* Summary Generator Section - Full width */}
      <section className="w-full">
        <Suspense fallback={<Skeleton className="h-[400px] w-full rounded-xl" />}>
          <SummaryGenerator />
        </Suspense>
      </section>

      {/* Project Metadata Section - Contains Project Overview, Group Overview, and Faculty Advisor */}
      <section className="w-full">
        <Suspense fallback={<Skeleton className="h-[600px] w-full rounded-xl" />}>
          <ProjectMetadata />
        </Suspense>
      </section>
    </main>
  )
}
