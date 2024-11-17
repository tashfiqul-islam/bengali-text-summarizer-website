'use client'

import Link from 'next/link'
import { Sun, Moon, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

/**
 * RightNavItems Component
 *
 * This component handles the right-hand side items in the navigation bar,
 * including:
 * - GitHub link
 * - Theme toggle button
 * - Logout button (if needed).
 *
 * Props:
 * - `isMounted`: Ensures client-side rendering for dynamic theme handling.
 * - `isLoggedIn`: Indicates if the user is logged in (can be extended).
 * - `handleLogoutAction`: Function to log the user out (future use cases).
 * - `toggleThemeAction`: Function to switch between light and dark themes.
 */

export default function RightNavItems({
  isMounted,
  isLoggedIn,
  handleLogoutAction,
  toggleThemeAction,
  theme,
}: {
  isMounted: boolean
  isLoggedIn: boolean
  handleAuthAction: (mode: 'login' | 'register') => void
  handleLogoutAction: () => void
  toggleThemeAction: () => void
  theme: 'light' | 'dark'
}) {
  return (
    <div className='hidden md:flex items-center gap-2 flex-shrink-0'>
      {/* GitHub Link */}
      <Link
        href='https://github.com/tashfiqul-islam/bengali-text-summarizer-website'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Button
          variant='ghost'
          size='icon'
          className='rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
          aria-label='GitHub Repository'
        >
          <Github className='h-5 w-5' />
        </Button>
      </Link>

      {/* Theme Toggle Button */}
      {isMounted && (
        <motion.div whileTap={{ rotate: 360 }} transition={{ duration: 0.5 }}>
          <Button
            onClick={toggleThemeAction}
            variant='ghost'
            size='icon'
            className='rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
            aria-label='Toggle theme'
          >
            {theme === 'light' ? (
              <Sun className='h-5 w-5 animate-fade' />
            ) : (
              <Moon className='h-5 w-5 animate-fade' />
            )}
          </Button>
        </motion.div>
      )}

      {/* Logout Button */}
      {isLoggedIn && (
        <motion.div whileTap={{ scale: 0.95 }} transition={{ duration: 0.3 }}>
          <Button
            variant='ghost'
            size='sm'
            className='rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
            onClick={handleLogoutAction}
            aria-label='Logout'
          >
            Logout
          </Button>
        </motion.div>
      )}
    </div>
  )
}
