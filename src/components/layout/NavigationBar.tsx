'use client'

import Logo from './NavItems/Logo'
import DesktopNav from './NavItems/DesktopNav'
import RightNavItems from './NavItems/RightNavItems'
import MobileNavMenu from './NavItems/MobileNavItems'
import AuthMenu from './NavItems/AuthMenu'
import { motion } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import { useTheme } from '@/context/ThemeContext'

/**
 * NavigationBar Component
 * Combines the left (logo), middle (navigation menu), and right (auth, theme, GitHub) items.
 * - Provides interactivity for authentication and theme toggling.
 * - Features a responsive mobile navigation menu.
 */
export default function NavigationBar() {
  const { theme, setTheme } = useTheme() // Theme context for light/dark mode toggle
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Tracks login state
  const [showAuthDialog, setShowAuthDialog] = useState(false) // Modal visibility for login/register
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login') // Tracks auth mode
  const [isMounted, setIsMounted] = useState(false) // Ensures hydration for client-side rendering
  const [isMenuOpen, setIsMenuOpen] = useState(false) // Controls the mobile navigation menu state

  // Ensure components only interact with the DOM after hydration
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Handles opening the login or register dialog
  const handleAuth = useCallback((mode: 'login' | 'register') => {
    setAuthMode(mode)
    setShowAuthDialog(true)
  }, [])

  // Logs out the user and updates state
  const handleLogout = useCallback(() => {
    setIsLoggedIn(false)
  }, [])

  // Toggles between light and dark themes
  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [setTheme, theme])

  // Toggles the mobile navigation menu
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Final animation state
      transition={{ duration: 0.5 }} // Animation duration
      className='sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 shadow-sm'
    >
      <div className='w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16'>
        {/* Left: Logo */}
        <Logo />

        {/* Middle: Desktop Navigation Menu */}
        <DesktopNav />

        {/* Right: GitHub, Theme Toggle, and Auth Menu */}
        <div className='flex items-center gap-4'>
          <RightNavItems
            isMounted={isMounted}
            isLoggedIn={isLoggedIn}
            theme={theme === 'system' ? 'light' : theme}
            toggleThemeAction={toggleTheme}
            handleAuthAction={handleAuth}
            handleLogoutAction={handleLogout}
          />
          <AuthMenu
            isLoggedIn={isLoggedIn}
            handleAuth={handleAuth}
            handleLogout={handleLogout}
            showAuthDialog={showAuthDialog}
            setShowAuthDialog={setShowAuthDialog}
            authMode={authMode}
          />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <MobileNavMenu
        isMenuOpen={isMenuOpen}
        isLoggedIn={isLoggedIn}
        handleAuthAction={handleAuth}
        handleLogoutAction={handleLogout}
        toggleMenuAction={toggleMenu}
      />
    </motion.nav>
  )
}
