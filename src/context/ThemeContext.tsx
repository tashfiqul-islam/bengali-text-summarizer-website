'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
      applyTheme(systemTheme)
    } else {
      root.classList.add(theme)
      applyTheme(theme)
    }
  }, [theme])

  const applyTheme = (currentTheme: 'light' | 'dark') => {
    const root = window.document.documentElement
    const isDark = currentTheme === 'dark'

    const variables = {
      '--background': isDark ? '222.2 84% 4.9%' : '0 0% 100%',
      '--foreground': isDark ? '210 40% 98%' : '222.2 84% 4.9%',
      '--card': isDark ? '222.2 84% 4.9%' : '0 0% 100%',
      '--card-foreground': isDark ? '210 40% 98%' : '222.2 84% 4.9%',
      '--popover': isDark ? '222.2 84% 4.9%' : '0 0% 100%',
      '--popover-foreground': isDark ? '210 40% 98%' : '222.2 84% 4.9%',
      '--primary': isDark ? '210 40% 98%' : '222.2 47.4% 11.2%',
      '--primary-foreground': isDark ? '222.2 47.4% 11.2%' : '210 40% 98%',
      '--secondary': isDark ? '217.2 32.6% 17.5%' : '210 40% 96.1%',
      '--secondary-foreground': isDark ? '210 40% 98%' : '222.2 47.4% 11.2%',
      '--muted': isDark ? '217.2 32.6% 17.5%' : '210 40% 96.1%',
      '--muted-foreground': isDark ? '215 20.2% 65.1%' : '215.4 16.3% 46.9%',
      '--accent': isDark ? '217.2 32.6% 17.5%' : '210 40% 96.1%',
      '--accent-foreground': isDark ? '210 40% 98%' : '222.2 47.4% 11.2%',
      '--destructive': isDark ? '0 62.8% 30.6%' : '0 84.2% 60.2%',
      '--destructive-foreground': isDark ? '210 40% 98%' : '210 40% 98%',
      '--border': isDark ? '217.2 32.6% 17.5%' : '214.3 31.8% 91.4%',
      '--input': isDark ? '217.2 32.6% 17.5%' : '214.3 31.8% 91.4%',
      '--ring': isDark ? '212.7 26.8% 83.9%' : '222.2 84% 4.9%',
      '--sidebar-background': isDark ? '240 5.9% 10%' : '0 0% 98%',
      '--sidebar-foreground': isDark ? '240 4.8% 95.9%' : '240 5.3% 26.1%',
      '--sidebar-primary': isDark ? '224.3 76.3% 48%' : '240 5.9% 10%',
      '--sidebar-primary-foreground': isDark ? '0 0% 100%' : '0 0% 98%',
      '--sidebar-accent': isDark ? '240 3.7% 15.9%' : '240 4.8% 95.9%',
      '--sidebar-accent-foreground': isDark ? '240 4.8% 95.9%' : '240 5.9% 10%',
      '--sidebar-border': isDark ? '240 3.7% 15.9%' : '220 13% 91%',
      '--sidebar-ring': '217.2 91.2% 59.8%',
    }

    Object.entries(variables).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })
  }

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme | null
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [storageKey])

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
