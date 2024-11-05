'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { Sun, Moon, Github } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import AuthDialog from '../page-contents/AdditionalContents/AuthDialog'
import { getImagePath } from '@/lib/utils'

export default function NavigationBar() {
  const { theme, setTheme } = useTheme()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showAuthDialog, setShowAuthDialog] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')

  const handleAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode)
    setShowAuthDialog(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const handleLogoClick = () => {
    window.location.reload()
  }

  return (
    <>
      <nav className="border-b px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={handleLogoClick}
        >
          <Image src="/images/bts-logo.png" alt="Logo" width={40} height={40} />
          <span className="font-semibold text-lg">Bengali Text Summarizer</span>
        </div>
        <div className="flex items-center gap-4">
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

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="relative h-8 w-8 rounded-full"
          >
            {theme === 'light' ? (
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all" />
            ) : (
              <Moon className="h-4 w-4 rotate-0 scale-100 transition-all" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={getImagePath('profile-avatar.png')} alt="User avatar" />
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

      <AuthDialog 
        isOpen={showAuthDialog} 
        onClose={() => setShowAuthDialog(false)}
        onLogin={() => setIsLoggedIn(true)}
        initialMode={authMode}
      />
    </>
  )
}
