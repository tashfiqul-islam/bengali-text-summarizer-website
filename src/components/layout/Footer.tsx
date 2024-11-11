'use client'

import React from 'react'

/**
 * Footer component displaying copyright information, version number, and social links.
 * Features a modern design with gradients, animations, and interactive elements.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()
  const version = 'v0.0.1'

  return (
    <footer className='w-full mt-auto'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <p className='text-sm text-gray-400 mb-4 md:mb-0'>
              © {currentYear} Bengali Text Summarizer. All rights reserved. | {version}
            </p>
          </div>
        </div>
      </div>
      <div className='w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'></div>
    </footer>
  )
}
