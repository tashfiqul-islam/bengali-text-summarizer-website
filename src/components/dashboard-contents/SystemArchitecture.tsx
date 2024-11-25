import Image from 'next/image'

export function SystemArchitecture() {
  return (
    <div className='h-full flex flex-col p-6 bg-white'>
      {/* Header */}
      <div className='mb-8'>
        <h2 className='text-[48px] font-bold text-gray-900 mb-2'>System Architecture</h2>
        <div className='h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'></div>
      </div>

      {/* Image Section */}
      <div className='relative w-full h-[calc(100%-70px)] rounded-lg overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-lg'>
          <Image
            src='/sys-arch.png'
            alt='System Architecture Diagram'
            fill
            quality={100} // Ensures the highest image quality
            priority // Preloads the image for better performance
            style={{ objectFit: 'contain' }} // Modern approach for object fit
            className='rounded-lg'
          />
        </div>
      </div>
    </div>
  )
}
