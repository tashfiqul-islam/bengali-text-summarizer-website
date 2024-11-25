import React from 'react'
import Image from 'next/image'

interface WebsiteUIProps {
  theme: 'Light' | 'Dark'
}

export function WebsiteUI({ theme }: WebsiteUIProps) {
  const isLightTheme = theme === 'Light'

  return (
    <div
      className={`w-full h-full flex flex-col ${
        isLightTheme ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'
      } rounded-lg shadow-md overflow-hidden`}
    >
      {/* Header */}
      <div className='mb-4 p-6'>
        <h2 className='text-[48px] font-bold'>{theme} Mode</h2>
        <div
          className={`h-1 w-32 rounded-full ${
            isLightTheme
              ? 'bg-gradient-to-r from-blue-500 to-purple-500'
              : 'bg-gradient-to-r from-blue-500 to-purple-500'
          }`}
        ></div>
      </div>

      {/* Image Content */}
      <div className='relative flex-1'>
        <Image
          src={isLightTheme ? '/images/website-light.png' : '/images/website-dark.png'}
          alt={`${theme} Mode Preview`}
          fill // Ensures the image scales responsively to the container
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' // Optimized scaling for print and web
          style={{
            objectFit: 'contain',
            borderRadius: '12px',
          }}
          quality={100} // Uncompressed for print
          priority // Ensures these key images are loaded first
        />
      </div>
    </div>
  )
}
