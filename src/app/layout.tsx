import { Inter } from 'next/font/google'
import ClientWrapper from './ClientWrapper'
import './globals.css'

// Optimize font loading using next/font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Metadata for the entire application
export const metadata = {
  title: {
    default: 'Bengali Text Summarizer',
    template: '%s | Bengali Text Summarizer',
  },
  description: 'A Machine Learning project using NLP for Bengali text summarization',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        {/* Wrapping the content with the ClientWrapper */}
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  )
}
