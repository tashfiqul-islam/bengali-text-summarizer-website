import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import NavigationBar from '@/components/layout/NavigationBar'
import Footer from '@/components/layout/Footer'
import './globals.css'

// Optimize font loading using next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Basic metadata for the application
export const metadata: Metadata = {
  title: {
    default: 'Bengali Text Summarizer',
    template: '%s | Bengali Text Summarizer',
  },
  description: 'A Machine Learning project using NLP for Bengali text summarization',
  icons: {
    icon: '/favicon.ico',
  },
}

// Viewport configuration for responsive design
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

// Root layout component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${inter.variable} font-sans`}>
      <body className='antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
        {/* Theme provider for managing light/dark mode */}
        <ThemeProvider defaultTheme='system' storageKey='bts-theme'>
          <div className='min-h-screen flex flex-col'>
            {/* Sticky navigation bar */}
            <header className='sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md'>
              <NavigationBar />
            </header>
            {/* Main content area */}
            <main className='flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-4'>
              {children}
            </main>
            {/* Footer with added padding and gap */}
            <div className='mt-8 pt-6'>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
