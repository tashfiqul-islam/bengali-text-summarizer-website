'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { HomeIcon, BarChart2Icon } from 'lucide-react'

// Define the navigation items
const navItems = [
  { name: 'Home', path: '/', icon: HomeIcon },
  { name: 'Project Dashboard', path: '/project-dashboard', icon: BarChart2Icon },
] as const

// Define types for better type safety
type NavItem = (typeof navItems)[number]

export default function DesktopNav() {
  // Use the new usePathname hook from Next.js for routing
  const pathname = usePathname()

  return (
    <nav className='hidden md:flex items-center justify-center flex-1 px-8'>
      <ul className='flex gap-12'>
        {navItems.map(item => (
          <NavItem key={item.path} item={item} isActive={pathname === item.path} />
        ))}
      </ul>
    </nav>
  )
}

// Separate NavItem component for better organization and reusability
function NavItem({ item, isActive }: { item: NavItem; isActive: boolean }) {
  return (
    <li>
      <Link
        href={item.path}
        className={`
          relative py-2 text-base font-medium
          flex items-center gap-3 group
          transition-all duration-300 ease-out
          ${isActive ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'}
        `}
      >
        <NavIcon icon={item.icon} isActive={isActive} />
        <NavText name={item.name} isActive={isActive} />
        <ActiveIndicator isActive={isActive} />
      </Link>
    </li>
  )
}

// Icon component with glow effect
function NavIcon({ icon: Icon, isActive }: { icon: NavItem['icon']; isActive: boolean }) {
  return (
    <div className='relative'>
      <Icon
        className={`
          w-5 h-5 transition-all duration-300
          ${isActive ? 'text-blue-400' : 'text-gray-400 group-hover:text-gray-200'}
        `}
      />
      <AnimatePresence>
        {isActive && (
          <motion.div
            layoutId='icon-glow'
            className='absolute inset-0 -m-1 rounded-full bg-blue-400/20 blur-sm'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

// Text component with hover effect
function NavText({ name, isActive }: { name: string; isActive: boolean }) {
  return (
    <span className='relative'>
      {name}
      {!isActive && (
        <motion.span
          className='absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent'
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </span>
  )
}

// Active indicator component
function ActiveIndicator({ isActive }: { isActive: boolean }) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          layoutId='underline'
          className='absolute left-0 right-0 bottom-0 h-0.5 bg-blue-400'
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          exit={{ opacity: 0, scaleX: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </AnimatePresence>
  )
}
