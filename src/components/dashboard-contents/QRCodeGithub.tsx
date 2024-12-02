'use client'

import React from 'react'
import { QRCodeCanvas } from 'qrcode.react'

export function QRCodeGithub() {
  return (
    <div className='h-full w-full flex flex-col p-6'>
      {/* Header */}
      <div className='mb-6'>
        <h2 className='text-[48px] font-bold text-gray-900 mb-2'>Github QR Code</h2>
        <div className='h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'></div>
      </div>

      {/* QR Code Section */}
      <div className='flex-1 flex items-center justify-center'>
        <div className='bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.1)] p-8 w-full max-w-[360px] aspect-square flex flex-col items-center justify-center'>
          <QRCodeCanvas
            value='https://github.com/tashfiqul-islam/bengali-text-summarizer-website/'
            size={280}
            bgColor='#ffffff'
            fgColor='#3b82f6'
            level='H'
            imageSettings={{
              src: '/images/logos/github-mark.svg',
              x: undefined,
              y: undefined,
              height: 50,
              width: 50,
              excavate: true,
            }}
          />
          <p className='text-center text-2xl font-semibold text-gray-800 mt-6'>Scan for GitHub</p>
        </div>
      </div>
    </div>
  )
}
