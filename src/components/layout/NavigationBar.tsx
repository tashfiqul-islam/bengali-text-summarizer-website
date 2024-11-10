'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { Sun, Moon, Github } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import AuthDialog from '../page-contents/AdditionalContents/AuthDialog'

/**
 * NavigationBar Component
 * This component provides a navigation bar with theme toggling, GitHub link, and user authentication options.
 * It dynamically updates based on theme (light or dark) and authentication state.
 */
export default function NavigationBar() {
  // Access and manage theme (light/dark) through custom theme context
  const { theme, setTheme } = useTheme()

  // Authentication state variables
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Track if the user is logged in
  const [showAuthDialog, setShowAuthDialog] = useState(false) // Control the visibility of the authentication dialog
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login') // Determine if login or registration mode is active

  // State to prevent hydration mismatch on initial load
  const [isMounted, setIsMounted] = useState(false)

  // Ensure mounted state after initial render to avoid SSR issues
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Open authentication dialog with specified mode (login/register)
  const handleAuth = useCallback((mode: 'login' | 'register') => {
    setAuthMode(mode)
    setShowAuthDialog(true)
  }, [])

  // Logout handler to update authentication state
  const handleLogout = useCallback(() => {
    setIsLoggedIn(false)
  }, [])

  // Logo click handler to refresh page on logo click
  const handleLogoClick = useCallback(() => {
    if (isMounted) {
      window.location.reload()
    }
  }, [isMounted])

  // Theme toggle handler to switch between light and dark themes
  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [setTheme, theme])

  return (
    <>
      <nav className='border-b px-6 h-20 flex items-center justify-between bg-white dark:bg-gray-900'>
        {/* Logo and application title */}
        <div className='flex items-center gap-2 cursor-pointer' onClick={handleLogoClick}>
          <Image
            src='/images/bts-logo.png'
            alt='Bengali Text Summarizer Logo'
            width={40}
            height={40}
            priority
          />
          <span className='font-semibold text-lg text-gray-900 dark:text-gray-100'>
            Bengali Text Summarizer
          </span>
        </div>

        {/* Right navigation items */}
        <div className='flex items-center gap-4'>
          {/* GitHub link with hover card tooltip */}
          <HoverCard>
            <HoverCardTrigger asChild>
              <Link
                href='https://github.com/tashfiqul-islam/bengali-text-summarizer-website'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  className='relative h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
                  aria-label='GitHub Repository'
                >
                  <Github className='h-4 w-4' />
                </Button>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className='w-80'>
              <div className='flex justify-between space-x-4'>
                <div className='space-y-1'>
                  <h4 className='text-sm font-semibold'>GitHub Repository</h4>
                  <p className='text-sm text-muted-foreground'>
                    View the source code for Bengali Text Summarizer
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          {/* Theme toggle button */}
          {isMounted && (
            <Button
              onClick={toggleTheme}
              className='relative h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
              aria-label='Toggle theme'
            >
              {/* Conditional rendering of theme icons */}
              {theme === 'light' ? <Sun className='h-4 w-4' /> : <Moon className='h-4 w-4' />}
            </Button>
          )}

          {/* User menu dropdown for login, logout, and register options */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className='relative h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
                aria-label='User menu'
              >
                {/* Avatar with fallback text */}
                <Avatar className='h-8 w-8 ring-2 ring-gray-200 dark:ring-gray-500'>
                  <AvatarImage src='/images/profile-avatar.png' alt='User avatar' />
                  <AvatarFallback className='text-gray-800 dark:text-gray-300'>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              {isLoggedIn ? (
                <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
              ) : (
                <>
                  <DropdownMenuItem onClick={() => handleAuth('login')}>Login</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleAuth('register')}>
                    Register
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      {/* Authentication dialog for login and registration */}
      {isMounted && (
        <AuthDialog
          isOpen={showAuthDialog}
          onClose={() => setShowAuthDialog(false)}
          onLogin={() => setIsLoggedIn(true)}
          initialMode={authMode}
        />
      )}
    </>
  )
}
