import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import NavigationBar from '@/components/layout/NavigationBar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bengali Text Summarizer',
  description: 'A Machine Learning project using NLP for Bengali text summarization',
  keywords: 'Bengali, Text Summarization, NLP, Machine Learning',
  author: 'Your Team Name',
  viewport: 'width=device-width, initial-scale=1',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider defaultTheme="system" storageKey="bts-theme">
          <div className="min-h-screen flex flex-col">
            <div className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
              <NavigationBar />
            </div>
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
