'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { Sun, Moon, Github, Menu } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { motion, AnimatePresence } from 'framer-motion'
import AuthDialog from '../page-contents/AdditionalContents/AuthDialog'

/**
 * NavigationBar Component
 * A modern, interactive navigation bar with theme toggling, GitHub link, and user authentication options.
 * Supports both light and dark modes and includes engaging animations.
 */
export default function NavigationBar() {
  const { theme, setTheme } = useTheme()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showAuthDialog, setShowAuthDialog] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
  const [isMounted, setIsMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleAuth = useCallback((mode: 'login' | 'register') => {
    setAuthMode(mode)
    setShowAuthDialog(true)
  }, [])

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false)
  }, [])

  const handleLogoClick = useCallback(() => {
    if (isMounted) {
      window.location.reload()
    }
  }, [isMounted])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [setTheme, theme])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo and application title */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center gap-2 cursor-pointer'
              onClick={handleLogoClick}
            >
              <Image
                src='/images/bts-logo.png'
                alt='Bengali Text Summarizer Logo'
                width={40}
                height={40}
                priority
                className='rounded-full'
              />
              <span className='font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>
                Bengali Text Summarizer
              </span>
            </motion.div>

            {/* Desktop Navigation Items */}
            <div className='hidden md:flex items-center gap-4'>
              {/* GitHub link with hover card tooltip */}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Link
                    href='https://github.com/tashfiqul-islam/bengali-text-summarizer-website'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Button
                      variant='ghost'
                      size='icon'
                      className='relative rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300'
                      aria-label='GitHub Repository'
                    >
                      <Github className='h-5 w-5' />
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
                <motion.div whileTap={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  <Button
                    onClick={toggleTheme}
                    variant='ghost'
                    size='icon'
                    className='relative rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300'
                    aria-label='Toggle theme'
                  >
                    {theme === 'light' ? <Sun className='h-5 w-5' /> : <Moon className='h-5 w-5' />}
                  </Button>
                </motion.div>
              )}

              {/* User menu dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='relative rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300'
                    aria-label='User menu'
                  >
                    <Avatar className='h-8 w-8 ring-2 ring-blue-500 dark:ring-purple-500'>
                      <AvatarImage src='/images/profile-avatar.png' alt='User avatar' />
                      <AvatarFallback className='text-gray-800 dark:text-gray-200'>
                        U
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-56'>
                  <AnimatePresence>
                    {isLoggedIn ? (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                      </motion.div>
                    ) : (
                      <>
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          <DropdownMenuItem onClick={() => handleAuth('login')}>
                            Login
                          </DropdownMenuItem>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          <DropdownMenuItem onClick={() => handleAuth('register')}>
                            Register
                          </DropdownMenuItem>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile menu button */}
            <div className='md:hidden'>
              <Button
                variant='ghost'
                size='icon'
                onClick={toggleMenu}
                className='relative rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300'
                aria-label='Open menu'
              >
                <Menu className='h-5 w-5' />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700'
            >
              <div className='px-2 pt-2 pb-3 space-y-1'>
                <Link
                  href='https://github.com/tashfiqul-islam/bengali-text-summarizer-website'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300'
                >
                  GitHub
                </Link>
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className='block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300'
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => handleAuth('login')}
                      className='block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300'
                    >
                      Login
                    </button>
                    <button
                      onClick={() => handleAuth('register')}
                      className='block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300'
                    >
                      Register
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Authentication dialog */}
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
