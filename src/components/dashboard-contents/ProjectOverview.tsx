import { Card } from '@/components/ui/card'
import { Code2, Database, Brain, FlaskConical, Layout, Link, Rocket } from 'lucide-react'

const timelineSteps = [
  {
    icon: <Code2 className='w-6 h-6' />,
    title: 'Web Crawler',
    color: '#4285F4',
    lineGradient: 'from-[#4285F4] to-[#34A853]',
  },
  {
    icon: <Database className='w-6 h-6' />,
    title: 'Data Collection',
    color: '#34A853',
    lineGradient: 'from-[#34A853] to-[#A142F4]',
  },
  {
    icon: <Brain className='w-6 h-6' />,
    title: 'Model Training',
    color: '#A142F4',
    lineGradient: 'from-[#A142F4] to-[#FBBC05]',
  },
  {
    icon: <FlaskConical className='w-6 h-6' />,
    title: 'Model Testing',
    color: '#FBBC05',
    lineGradient: 'from-[#FBBC05] to-[#FF4081]',
  },
  {
    icon: <Layout className='w-6 h-6' />,
    title: 'Web Interface',
    color: '#FF4081',
    lineGradient: 'from-[#FF4081] to-[#6366F1]',
  },
  {
    icon: <Link className='w-6 h-6' />,
    title: 'Model + UI\nConnection',
    color: '#6366F1',
    lineGradient: 'from-[#6366F1] to-[#EA4335]',
  },
  {
    icon: <Rocket className='w-6 h-6' />,
    title: 'Web Deploy',
    color: '#EA4335',
    lineGradient: 'from-[#EA4335] to-transparent',
  },
]

export function ProjectOverview() {
  return (
    <div className='p-6 flex flex-col h-full bg-white'>
      {/* Header */}
      <div className='mb-8'>
        <h2 className='text-[48px] font-bold text-grey-900 mb-2'>Project Overview</h2>
        <div className='h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'></div>
      </div>

      {/* Description Card */}
      <Card className='mb-12 overflow-hidden bg-white shadow-md'>
        <div className='relative flex'>
          <div className='absolute left-0 top-0 bottom-0 w-1 bg-[#4285F4] rounded-full'></div>
          <div className='p-6 pl-8'>
            <p className='text-[24px] text-gray-800 font-medium leading-tight'>
              The Bengali Text Summarizer, developed for CSE499B, leverages advanced NLP to create
              concise, accurate summaries of Bengali news articles, tackling digital information
              overload.
            </p>
          </div>
        </div>
      </Card>

      {/* Timeline Section */}
      <div className='flex-1 flex flex-col'>
        <h3 className='text-[24px] font-semibold text-gray-800 mb-12'>Project Timeline</h3>

        <div className='relative flex-1'>
          {/* Timeline Steps Container */}
          <div className='relative flex justify-between items-start px-4'>
            {/* Continuous Line */}
            <div
              className='absolute left-[40px] right-[40px] h-[2px] top-[28px]'
              style={{
                background:
                  'linear-gradient(90deg, #4285F4 0%, #34A853 16.67%, #A142F4 33.33%, #FBBC05 50%, #FF4081 66.67%, #6366F1 83.33%, #EA4335 100%)',
              }}
            ></div>

            {/* Timeline Nodes */}
            {timelineSteps.map((step, index) => (
              <div
                key={index}
                className='relative flex flex-col items-center'
                style={{ flex: '1' }}
              >
                <div
                  className='w-14 h-14 rounded-full flex items-center justify-center mb-4'
                  style={{ backgroundColor: step.color }}
                >
                  <div className='text-white'>{step.icon}</div>
                </div>
                <p className='text-[18px] font-medium text-gray-800 text-center whitespace-pre-line max-w-[120px]'>
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='mt-auto pt-8'>
        <div className='bg-[#1a2234] rounded-xl py-4 px-6 flex items-center justify-between'>
          <span className='text-[18px] text-white font-medium'>CSE499B</span>
          <div className='h-5 w-px bg-gray-600'></div>
          <span className='text-[18px] text-white'>Senior Design Project II</span>
        </div>
      </div>
    </div>
  )
}
