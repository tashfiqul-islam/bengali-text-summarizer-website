'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { PanelLeft } from 'lucide-react'

interface HeaderProps {
  isSidebarCollapsed: boolean
  toggleSidebarAction: () => void
  currentSection: {
    category: string
    article: string
  }
}

/**
 * Header Component
 *
 * This component renders the header section of the Summary Generator.
 * It includes a sidebar toggle button and breadcrumb navigation to indicate the current section.
 *
 * @param {HeaderProps} props - The properties passed to this component.
 * @returns {React.ReactElement} The rendered Header component.
 */
export default function Header({
  isSidebarCollapsed,
  toggleSidebarAction,
  currentSection,
}: HeaderProps) {
  return (
    <header className='flex h-[60px] items-center gap-4 border-b border-border bg-background px-6 flex-shrink-0'>
      {/* Sidebar Toggle Button */}
      <Button
        variant='ghost'
        size='icon'
        onClick={toggleSidebarAction}
        className='h-8 w-8'
        aria-label={isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        <PanelLeft className='h-4 w-4' />
      </Button>

      {/* Vertical Separator */}
      <Separator orientation='vertical' className='h-6' />

      {/* Breadcrumb Navigation */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='#' className='text-muted-foreground'>
              {currentSection.category || 'Articles'}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className='text-foreground'>
              {currentSection.article || 'New Article'}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  )
}
