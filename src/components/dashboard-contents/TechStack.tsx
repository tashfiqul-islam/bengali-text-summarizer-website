import Image from 'next/image'

const techCategories = [
  {
    title: 'Model Tech Stack',
    items: [
      { name: 'Python', logo: '/images/logos/python.svg', version: 'v3.13.0', color: '#4584b6' },
      { name: 'NumPy', logo: '/images/logos/numpy.svg', version: 'v2.1.3', color: '#4dabcf' },
      { name: 'Pandas', logo: '/images/logos/pandas.svg', version: 'v2.2.3', color: '#150458' },
      { name: 'PyTorch', logo: '/images/logos/pytorch.svg', version: 'v2.5.1', color: '#EE4C2C' },
      { name: 'spaCy', logo: '/images/logos/spacy.svg', version: 'v3.8.0', color: '#09A3D5' },
      {
        name: 'Matplotlib',
        logo: '/images/logos/matplotlib.svg',
        version: 'v3.9.2',
        color: '#11557C',
      },
    ],
  },
  {
    title: 'Web UI Tech Stack',
    items: [
      { name: 'React', logo: '/images/logos/react.svg', version: 'v19.0.0-rc', color: '#61DAFB' },
      { name: 'Next.js', logo: '/images/logos/nextjs.svg', version: 'v15.0.3', color: '#000000' },
      {
        name: 'TypeScript',
        logo: '/images/logos/typescript.svg',
        version: 'v5.7.2',
        color: '#3178C6',
      },
      {
        name: 'ESLint',
        logo: '/images/logos/eslint-icon.svg',
        version: 'v9.15.0',
        color: '#4B32C3',
      },
      {
        name: 'Tailwind CSS',
        logo: '/images/logos/tailwindcss.svg',
        version: 'v3.4.1',
        color: '#06B6D4',
      },
      {
        name: 'shadcn/ui',
        logo: '/images/logos/shadcn-ui.svg',
        version: 'v2.1.6',
        color: '#000000',
      },
    ],
  },
  {
    title: 'ML/Dev Ops',
    items: [
      { name: 'Hugging Face', logo: '/images/logos/hf.svg', version: 'v4.46.3', color: '#FFD21E' },
      {
        name: 'Inference API',
        logo: '/images/logos/hf-inference-api.svg',
        version: 'latest',
        color: '#861fff',
      },
      { name: 'Vercel', logo: '/images/logos/vercel.svg', version: 'v39.1.2', color: '#000000' },
    ],
  },
]

export function TechStack() {
  return (
    <div className='flex flex-col h-full w-full'>
      {/* Header */}
      <div className='mb-6'>
        <h2 className='text-[48px] font-bold text-gray-900 mb-4'>Tech Stack</h2>
        <div className='h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500'></div>
      </div>

      {/* Tech Categories */}
      <div className='grid grid-cols-3 gap-x-6 gap-y-8 h-full'>
        {techCategories.map(category => (
          <div key={category.title} className='flex flex-col'>
            {/* Category Title */}
            <h3 className='text-[24px] font-semibold text-gray-800 mb-4'>{category.title}</h3>
            {/* Category Items */}
            <ul className='space-y-4'>
              {category.items.map(item => (
                <li key={item.name} className='flex'>
                  {/* Badge */}
                  <div className='flex'>
                    {/* Box 1: Logo + Name */}
                    <div className='flex items-center px-4 py-2 bg-[#555555] text-white text-[18px] font-medium'>
                      <div className='w-8 h-8 relative mr-2'>
                        <Image
                          src={item.logo}
                          alt={`${item.name} logo`}
                          layout='fill'
                          priority
                          quality={100}
                          objectFit='contain'
                        />
                      </div>
                      {item.name}
                    </div>
                    {/* Box 2: Version */}
                    <div
                      className='flex items-center px-4 py-2 text-white text-[18px] font-medium'
                      style={{
                        backgroundColor: item.color,
                      }}
                    >
                      {item.version}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
