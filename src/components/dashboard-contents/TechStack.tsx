import Image from 'next/image'

const techCategories = [
  {
    title: 'Model Tech Stack',
    items: [
      { name: 'Python', logo: '/images/logos/python.svg' },
      { name: 'NumPy', logo: '/images/logos/numpy.svg' },
      { name: 'Pandas', logo: '/images/logos/pandas.svg' },
      { name: 'PyTorch', logo: '/images/logos/pytorch.svg' },
      { name: 'spaCy', logo: '/images/logos/spacy.svg' },
      { name: 'Matplotlib', logo: '/images/logos/matplotlib.svg' },
    ],
  },
  {
    title: 'Web UI Tech Stack',
    items: [
      { name: 'React', logo: '/images/logos/react.svg' },
      { name: 'Next.js', logo: '/images/logos/nextjs.svg' },
      { name: 'TypeScript', logo: '/images/logos/typescript.svg' },
      { name: 'ESLint', logo: '/images/logos/eslint-icon.svg' },
      { name: 'Tailwind CSS', logo: '/images/logos/tailwindcss.svg' },
      { name: 'shadcn/ui', logo: '/images/logos/shadcn-ui.svg' },
    ],
  },
  {
    title: 'ML/Dev Ops',
    items: [
      { name: 'Hugging Face', logo: '/images/logos/hf.svg' },
      { name: 'Inference API', logo: '/images/logos/hf-inference-api.svg' },
      { name: 'Vercel', logo: '/images/logos/vercel.svg' },
    ],
  },
]

export function TechStack() {
  return (
    <div className='h-full flex flex-col'>
      {/* Header */}
      <div className='mb-4'>
        <h2 className='text-[48px] font-bold text-gray-900 mb-2'>Tech Stack</h2>
        <div className='h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'></div>
      </div>

      {/* Content */}
      <div className='flex-1 grid grid-cols-3 gap-3'>
        {techCategories.map((category, index) => (
          <div
            key={index}
            className='bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-sm flex flex-col'
          >
            <h3 className='text-[20px] font-semibold text-gray-800 mb-2'>{category.title}</h3>
            <div className='flex-1 flex flex-col gap-2'>
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className='flex items-center space-x-3 bg-white/60 rounded-md p-2'
                >
                  <div className='relative w-8 h-8 flex-shrink-0'>
                    <Image
                      src={item.logo}
                      alt={`${item.name} logo`}
                      width={32}
                      height={32} // Fixed size for clarity in print
                      quality={100} // Highest quality for print readiness
                      priority // Ensures images are loaded promptly
                      className='object-contain'
                    />
                  </div>
                  <span className='text-[24px] font-medium text-gray-700'>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
