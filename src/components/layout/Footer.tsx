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
      <div className='container mx-auto px-4 py-4'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-sm text-gray-400 text-center'>
            &copy; {currentYear} | {version} | Made with{' '}
            <span className='text-red-500'>&hearts;</span> by
            <a
              href='https://github.com/tashfiqul-islam'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500 hover:text-blue-700'
            >
              {' '}
              Tashfiq
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
