'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { Sun, Moon, Github } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import AuthDialog from '../page-contents/AdditionalContents/AuthDialog'

export default function NavigationBar() {
  // State management for theme, authentication, and component mounting
  const { theme, setTheme } = useTheme()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showAuthDialog, setShowAuthDialog] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
  const [isMounted, setIsMounted] = useState(false)

  // Effect to set mounted state after initial render
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Handler for opening the authentication dialog
  const handleAuth = useCallback((mode: 'login' | 'register') => {
    setAuthMode(mode)
    setShowAuthDialog(true)
  }, [])

  // Handler for user logout
  const handleLogout = useCallback(() => {
    setIsLoggedIn(false)
  }, [])

  // Handler for logo click (page reload)
  const handleLogoClick = useCallback(() => {
    if (isMounted) {
      window.location.reload()
    }
  }, [isMounted])

  // Handler for toggling the theme
  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [setTheme, theme]) // Include 'theme' in the dependency array

  return (
    <>
      {/* Main navigation bar */}
      <nav className="border-b px-6 h-20 flex items-center justify-between">
        {/* Logo and title */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
          <Image 
            src="/images/bts-logo.png" 
            alt="Bengali Text Summarizer Logo" 
            width={40} 
            height={40} 
            priority
          />
          <span className="font-semibold text-lg">Bengali Text Summarizer</span>
        </div>
        
        {/* Navigation items */}
        <div className="flex items-center gap-4">
          {/* GitHub repository link */}
          <HoverCard>
            <HoverCardTrigger asChild>
              <Link 
                href="https://github.com/tashfiqul-islam/bengali-text-summarizer-website" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub Repository</span>
                </Button>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">GitHub Repository</h4>
                  <p className="text-sm text-muted-foreground">
                    View the source code for Bengali Text Summarizer
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          {/* Theme toggle button */}
          {isMounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative h-8 w-8 rounded-full"
            >
              {theme === 'light' ? (
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all" />
              ) : (
                <Moon className="h-4 w-4 rotate-0 scale-100 transition-all" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}

          {/* User menu dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/images/profile-avatar.png" alt="User avatar" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {isLoggedIn ? (
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              ) : (
                <>
                  <DropdownMenuItem onClick={() => handleAuth('login')}>
                    Login
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleAuth('register')}>
                    Register
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

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
