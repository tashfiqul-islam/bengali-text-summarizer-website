import {
  Calendar,
  MapPin,
  Users,
  GraduationCap,
  Cpu,
  Code,
  Scale,
  Type,
  Clock,
  FileText,
} from 'lucide-react'
import Image from 'next/image'

const students = [
  { name: 'Md Tashfiqul Islam', id: '161 1593 042' },
  { name: 'Tashin Mahmud Khan', id: '201 1819 042' },
  { name: 'Amir Hamja Marjan', id: '202 1171 642' },
  { name: 'Md Simul Hossain', id: '171 1949 642' },
]

const metrics = [
  { icon: Cpu, label: 'Model Size', value: '300M params' },
  { icon: Code, label: 'Tensor Type', value: 'F32' },
  { icon: Scale, label: 'Base Model', value: 'google/mt5-small' },
  { icon: Type, label: 'Type', value: 'Seq2Seq' },
  { icon: Clock, label: 'Training Length', value: '210 Epochs' },
  { icon: FileText, label: 'License', value: 'MIT' },
]

const tags = ['Summarization', 'Transformers', 'PyTorch', 'Bengali', 'mt5', 'text2text-generation']

export function Header() {
  return (
    <div className="relative w-full h-full bg-cover bg-center bg-[url('/images/db-header.png')] p-6 flex">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/db-header.png')] bg-cover bg-center"></div>

      {/* Background Opacity */}
      <div className='absolute inset-0 bg-white/30 z-10'></div>

      {/* Content */}
      <div className='relative z-20 flex w-full h-full'>
        {/* Left Column */}
        <div className='w-1/4 flex flex-col items-center justify-between border-r border-blue-200 pr-6'>
          <Image
            src='/images/logos/nsu-logo.svg'
            alt='NSU Logo'
            width={225}
            height={225}
            quality={100}
            className='mb-4'
            priority // Ensures it's loaded for print readiness
          />
          <div className='text-center'>
            <h2 className='text-[48px] font-bold text-blue-800 mb-2'>CSE499B.16</h2>
            <div className='flex items-center justify-center text-[24px] text-gray-600'>
              <Calendar className='w-6 h-6 mr-2' />
              Summer 2024
            </div>
          </div>
          <div className='text-center text-[24px] text-gray-600'>
            <div className='font-medium mb-1'>Department of ECE</div>
            <div className='flex items-center justify-center'>
              <MapPin className='w-6 h-6 mr-2' />
              North South University
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className='w-1/2 flex flex-col justify-between px-6'>
          <div className='text-center'>
            <h1 className='text-[60px] font-bold text-blue-900 mb-8'>Senior Design Showcase</h1>
            <h2 className='text-[52px] font-bold text-blue-700 mb-6'>
              Bengali Text Summarization System
            </h2>
            <p className='text-[32px] text-gray-700 mb-8'>
              Transforming lengthy Bengali articles into concise summaries using advanced NLP
              techniques
            </p>
          </div>
          <div className='flex flex-wrap justify-center gap-4 mb-8'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className='bg-blue-100 text-blue-800 text-[24px] font-medium px-4 py-2 rounded-full'
              >
                {tag}
              </span>
            ))}
          </div>
          <div className='grid grid-cols-3 gap-4 w-full'>
            {metrics.map((metric, index) => (
              <div key={index} className='flex items-center bg-white rounded-lg p-3 shadow-sm'>
                <metric.icon className='w-10 h-10 text-blue-600 mr-3' />
                <div>
                  <div className='text-[20px] font-medium text-blue-800'>{metric.label}</div>
                  <div className='text-[18px] text-gray-600'>{metric.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className='w-1/4 flex flex-col justify-between border-l border-blue-200 pl-6'>
          <div>
            <div className='flex items-center mb-4'>
              <GraduationCap className='w-8 h-8 text-blue-600 mr-2' />
              <h3 className='text-[32px] font-semibold text-blue-800'>Supervisor</h3>
            </div>
            <div className='bg-white rounded-lg p-3 shadow-sm'>
              <div className='text-[24px] font-medium text-blue-700'>Dr. Nafisa Noor</div>
              <div className='text-[20px] text-gray-600'>[NaNr]</div>
              <div className='text-[20px] text-gray-600'>Assistant Professor</div>
            </div>
          </div>
          <div>
            <div className='flex items-center mb-4'>
              <Users className='w-8 h-8 text-blue-600 mr-2' />
              <h3 className='text-[32px] font-semibold text-blue-800'>Team Members</h3>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              {students.map((student, index) => (
                <div key={index} className='bg-white rounded-lg p-3 shadow-sm'>
                  <div className='text-[20px] font-medium text-blue-700'>{student.name}</div>
                  <div className='text-[18px] text-gray-600'>{student.id}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
