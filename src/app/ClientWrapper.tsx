'use client'

import { usePathname } from 'next/navigation'
import { ThemeProvider } from '@/context/ThemeContext'
import NavigationBar from '@/components/layout/NavigationBar'
import Footer from '@/components/layout/Footer'
import { Toaster } from '@/components/ui/sonner'
import { AnimatePresence } from 'framer-motion'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() // Get the current route's pathname

  const isProjectDashboard = pathname === '/project-dashboard'

  return (
    <ThemeProvider defaultTheme='system'>
      <div className='min-h-screen flex flex-col'>
        <header className='sticky top-0 z-50'>
          <NavigationBar />
        </header>
        <main className='flex-grow'>
          <AnimatePresence mode='wait'>
            <div
              className={
                isProjectDashboard
                  ? 'w-full py-4' // Full-width for /project-dashboard
                  : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4' // Default layout for other pages
              }
            >
              {children}
            </div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
      <Toaster />
    </ThemeProvider>
  )
}
