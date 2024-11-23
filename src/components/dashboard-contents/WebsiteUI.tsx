import Image from 'next/image'

export function WebsiteUI() {
  return (
    <div className='w-full h-full grid grid-cols-2 gap-6'>
      <div className='bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col'>
        <h3 className='text-[32px] font-bold text-gray-800 p-4 text-center'>Light Mode</h3>
        <div className='relative flex-1'>
          <Image
            src='/images/website-light.png'
            alt='Website Light Mode'
            layout='fill'
            objectFit='contain'
            quality={100}
          />
        </div>
      </div>
      <div className='bg-gray-900 rounded-xl shadow-2xl overflow-hidden flex flex-col'>
        <h3 className='text-[32px] font-bold text-white p-4 text-center'>Dark Mode</h3>
        <div className='relative flex-1'>
          <Image
            src='/images/website-dark.png'
            alt='Website Dark Mode'
            layout='fill'
            objectFit='contain'
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}
