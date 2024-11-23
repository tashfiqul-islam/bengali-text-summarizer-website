import Image from 'next/image'

export function SystemArchitecture() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center p-6'>
      <h2 className='text-[48px] font-bold text-blue-800 mb-6'>System Architecture</h2>
      <div className='relative w-full h-[calc(100%-70px)] rounded-lg overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-lg'>
          <Image
            src='/sys-arch.png'
            alt='System Architecture Diagram'
            layout='fill'
            objectFit='contain'
            quality={100}
            className='rounded-lg'
          />
        </div>
      </div>
    </div>
  )
}
