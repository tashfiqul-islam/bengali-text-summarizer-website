import { Library, FileText, FileOutput, Smartphone, Moon, Zap } from 'lucide-react'

const features = [
  {
    icon: <Library className='w-12 h-12 text-blue-600' />,
    title: 'Bengali Article Library',
    description: 'Extensive collection of diverse Bengali articles',
  },
  {
    icon: <FileText className='w-12 h-12 text-green-600' />,
    title: 'Bengali Article Input',
    description: 'Seamless integration of new Bengali content',
  },
  {
    icon: <FileOutput className='w-12 h-12 text-purple-600' />,
    title: 'Concise Summaries',
    description: 'AI-powered extraction of key information',
  },
  {
    icon: <Smartphone className='w-12 h-12 text-red-600' />,
    title: 'Responsive Design',
    description: 'Optimal viewing on all devices',
  },
  {
    icon: <Moon className='w-12 h-12 text-indigo-600' />,
    title: 'Dark Mode Support',
    description: 'Enhanced reading experience in low light',
  },
  {
    icon: <Zap className='w-12 h-12 text-yellow-600' />,
    title: 'Real-time Processing',
    description: 'Instant summarization and analysis',
  },
]

export function KeyFeatures() {
  return (
    <div className='h-full flex flex-col p-6 bg-white'>
      <div className='mb-8'>
        <h2 className='text-[48px] font-bold text-gray-900 mb-2'>Key Features</h2>
        <div className='h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'></div>
      </div>

      <div className='grid grid-cols-3 gap-8 flex-grow'>
        {features.map((feature, index) => (
          <div key={index} className='flex flex-col items-center text-center'>
            <div className='mb-6 p-4 bg-gray-100 rounded-full'>{feature.icon}</div>
            <h3 className='text-[22px] font-semibold text-gray-800 mb-2'>{feature.title}</h3>
            <p className='text-[18px] text-gray-600 leading-relaxed'>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className='mt-8 text-center'>
        <p className='text-[18px] text-slate-500 italic font-medium'>
          Revolutionizing Bengali content consumption through cutting-edge AI technology
        </p>
      </div>
    </div>
  )
}
