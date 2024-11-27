import { Code2, Database, Brain, FlaskConical, Layout, Link, Rocket } from 'lucide-react'

const timelineSteps = [
  {
    icon: <Code2 className='w-7 h-7' />,
    title: 'Web Crawler',
    color: '#4285F4',
    duration: 'Month 1',
  },
  {
    icon: <Database className='w-7 h-7' />,
    title: 'Data Collection',
    color: '#34A853',
    duration: 'Month 2',
  },
  {
    icon: <Brain className='w-7 h-7' />,
    title: 'Model Training',
    color: '#A142F4',
    duration: 'Month 3-4',
  },
  {
    icon: <FlaskConical className='w-7 h-7' />,
    title: 'Model Testing',
    color: '#FBBC05',
    duration: 'Month 5',
  },
  {
    icon: <Layout className='w-7 h-7' />,
    title: 'Web Interface',
    color: '#FF4081',
    duration: 'Month 6',
  },
  {
    icon: <Link className='w-7 h-7' />,
    title: 'Model + UI Connection',
    color: '#6366F1',
    duration: 'Month 7',
  },
  {
    icon: <Rocket className='w-7 h-7' />,
    title: 'Web Deploy',
    color: '#EA4335',
    duration: 'Month 8',
  },
]

export function ProjectTimeline() {
  return (
    <div className='p-8 flex flex-col h-full bg-white'>
      {/* Header */}
      <div className='mb-8'>
        <h2 className='text-[48px] font-bold text-gray-900 mb-4'>Project Timeline</h2>
        <div className='h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'></div>
      </div>

      {/* Timeline Section */}
      <div className='flex-1 flex flex-col justify-center px-12'>
        <div className='relative'>
          {/* Timeline Steps Container */}
          <div className='relative flex justify-between items-center'>
            {/* Continuous Line */}
            <div
              className='absolute left-0 right-0 h-[3px]'
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
                style={{ width: '14%' }}
              >
                {/* Icon Circle */}
                <div
                  className='w-16 h-16 rounded-full flex items-center justify-center mb-4 border-[3px] border-white shadow-lg'
                  style={{ backgroundColor: step.color }}
                >
                  <div className='text-white'>{step.icon}</div>
                </div>

                {/* Title */}
                <div className='flex flex-col items-center gap-2'>
                  <p className='text-[24px] font-semibold text-gray-800 text-center'>
                    {step.title}
                  </p>
                  <p className='text-[22px] text-gray-600'>{step.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
