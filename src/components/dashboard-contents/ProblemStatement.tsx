import { Card } from '@/components/ui/card'
import {
  Newspaper,
  Clock,
  Search,
  BookOpen,
  AlertTriangle,
  TrendingDown,
  BrainCircuit,
  Unplug,
} from 'lucide-react'

const challenges = [
  {
    icon: <Newspaper className='w-8 h-8 text-blue-500' />,
    title: 'Content Overload',
    stat: '1000+',
    statLabel: 'daily articles',
  },
  {
    icon: <Clock className='w-8 h-8 text-green-500' />,
    title: 'Time Constraint',
    stat: '4-6h',
    statLabel: 'reading time/day',
  },
  {
    icon: <Search className='w-8 h-8 text-purple-500' />,
    title: 'Information Discovery',
    stat: '60%',
    statLabel: 'irrelevant content',
  },
  {
    icon: <BookOpen className='w-8 h-8 text-orange-500' />,
    title: 'Content Length',
    stat: '1500+',
    statLabel: 'words/article',
  },
]

const impacts = [
  { icon: <TrendingDown className='w-6 h-6 text-red-400' />, text: 'Reduced reader engagement' },
  { icon: <BrainCircuit className='w-6 h-6 text-yellow-400' />, text: 'Information overload' },
  { icon: <Unplug className='w-6 h-6 text-blue-400' />, text: 'Digital divide growth' },
]

export function ProblemStatement() {
  return (
    <div className='p-6 flex flex-col h-full bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className='mb-6'>
        <h2 className='text-[48px] font-bold text-grey-900 mb-2'>Problem Statement</h2>
        <div className='h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'></div>
      </div>

      <Card className='bg-white p-4 mb-6 shadow-md border-l-4 border-l-blue-500'>
        <p className='text-[24px] text-gray-800 font-medium leading-tight'>
          The digital age has brought an unprecedented surge in Bangla news content, creating a
          paradox of information abundance and time scarcity.
        </p>
      </Card>

      <div className='grid grid-cols-2 gap-4 mb-6'>
        {challenges.map((challenge, index) => (
          <Card key={index} className='bg-white p-4 shadow-md border-t-4 border-t-gray-200'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='p-2 bg-gray-100 rounded-full'>{challenge.icon}</div>
                <div>
                  <h3 className='text-[24px] font-semibold text-gray-800'>{challenge.title}</h3>
                  <p className='text-[16px] text-gray-600'>{challenge.statLabel}</p>
                </div>
              </div>
              <div className='text-[32px] font-bold text-blue-500'>{challenge.stat}</div>
            </div>
          </Card>
        ))}
      </div>

      <Card className='mt-auto bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 shadow-lg'>
        <div className='flex items-center gap-3 mb-4'>
          <AlertTriangle className='w-8 h-8 text-yellow-400' />
          <h3 className='text-[24px] font-semibold'>Impact on Readers</h3>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          {impacts.map((impact, index) => (
            <div key={index} className='flex items-center gap-3 bg-gray-700 rounded-lg p-3'>
              {impact.icon}
              <p className='text-[18px]'>{impact.text}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
