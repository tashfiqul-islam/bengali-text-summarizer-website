'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface MobileNavMenuProps {
  isMenuOpen: boolean
  isLoggedIn: boolean
  handleAuthAction: (mode: 'login' | 'register') => void
  handleLogoutAction: () => void
  toggleMenuAction: () => void
}

// Navigation Items
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Model Metrics', path: '/project-dashboard' },
]

/**
 * MobileNavMenu Component
 *
 * This component renders the mobile navigation menu, including links, authentication options,
 * and GitHub link, all with animation support. Designed for small screens.
 *
 * Props:
 * - `isMenuOpen`: Determines whether the menu is open.
 * - `isLoggedIn`: Indicates if the user is logged in.
 * - `handleAuth`: Function to trigger login or register dialogs.
 * - `handleLogout`: Function to log the user out.
 * - `toggleMenu`: Function to close the mobile menu when a link or action is selected.
 *
 * Features:
 * - Animated appearance using `framer-motion`.
 * - Responsive design with smooth transitions.
 * - Auto-closes menu on user action (e.g., link click, logout).
 */

export default function MobileNavMenu({
  isMenuOpen,
  isLoggedIn,
  handleAuthAction,
  handleLogoutAction,
  toggleMenuAction,
}: MobileNavMenuProps) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className='md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg'
        >
          <div className='px-4 pt-2 pb-3 space-y-1'>
            {/* Navigation Links */}
            {navItems.map(item => (
              <Link
                key={item.path}
                href={item.path}
                onClick={toggleMenuAction} // Close menu after navigation
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                  ${
                    typeof window !== 'undefined' && window.location.pathname === item.path
                      ? 'bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
              >
                {item.name}
              </Link>
            ))}

            {/* GitHub Link */}
            <Link
              href='https://github.com/tashfiqul-islam/bengali-text-summarizer-website'
              target='_blank'
              rel='noopener noreferrer'
              onClick={toggleMenuAction} // Close menu when GitHub link is clicked
              className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
            >
              GitHub
            </Link>

            {/* Authentication Buttons */}
            {isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogoutAction()
                  toggleMenuAction() // Close menu after logout
                }}
                className='block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    handleAuthAction('login')
                    toggleMenuAction() // Close menu after triggering login dialog
                  }}
                  className='block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    handleAuthAction('register')
                    toggleMenuAction() // Close menu after triggering register dialog
                  }}
                  className='block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                >
                  Register
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
