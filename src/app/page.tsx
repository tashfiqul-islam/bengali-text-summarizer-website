'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton'
import PageTransition from '@/components/PageTransition'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

// Dynamic imports for performance optimization
const SummaryGenerator = dynamic(
  () => import('@/components/page-contents/SummaryGenerator/SummaryGenerator'),
  {
    loading: () => <Skeleton className='h-[400px] w-full rounded-xl' />,
  }
)

const ProjectMetadata = dynamic(
  () => import('@/components/page-contents/AdditionalContents/ProjectMetadata'),
  {
    loading: () => <Skeleton className='h-[600px] w-full rounded-xl' />,
  }
)

// Metadata for the Home page
export default function Home() {
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <PageTransition>
        <main
          className='flex-1 container mx-auto p-1 space-y-6'
          aria-label='Bengali Text Summarizer Main Content'
        >
          {/* Summary Generator Section - Full width */}
          <section className='w-full'>
            <Suspense fallback={<Skeleton className='h-[400px] w-full rounded-xl' />}>
              <SummaryGenerator />
            </Suspense>
          </section>

          {/* Project Metadata Section - Contains Project Overview, Group Overview, and Faculty Advisor */}
          <section className='w-full'>
            <Suspense fallback={<Skeleton className='h-[600px] w-full rounded-xl' />}>
              <ProjectMetadata />
            </Suspense>
          </section>
        </main>
      </PageTransition>
    </motion.div>
  )
}
