import {
  Calendar,
  MapPin,
  Users,
  GraduationCap,
  Cpu,
  Code,
  Scale,
  Type,
  FileBox,
  Clock,
  FileText,
  Cloud,
  Database,
  CalendarDays,
  Tag,
} from 'lucide-react'
import Image from 'next/image'

const supervisor = {
  name: 'Dr. Nafisa Noor [NaNr]',
  designation: 'Assistant Professor',
  department: 'ECE',
  image: '/images/faculty/nafisa.jpg',
}

const students = [
  { name: 'Md Tashfiqul Islam', id: '161 1593 042', image: '/images/team/tashfiq.png' },
  { name: 'Tashin Mahmud Khan', id: '201 1819 042', image: '/images/team/tashin.png' },
  { name: 'Amir Hamja Marjan', id: '202 1171 642', image: '/images/team/amir.png' },
  { name: 'Md Simul Hossain', id: '171 1949 642', image: '/images/team/simul.png' },
]

const metrics = [
  { icon: Cpu, label: 'Model Size', value: '300M params' },
  { icon: Code, label: 'Tensor Type', value: 'F32' },
  { icon: Scale, label: 'Base Model', value: 'google/mt5-small' },
  { icon: Type, label: 'Type', value: 'Seq2Seq' },
  { icon: Clock, label: 'Training Length', value: '210 Epochs' },
  { icon: Database, label: 'Training Data', value: '20k News Articles' },
  { icon: Tag, label: 'Latest Model', value: 'v4' },
  { icon: Cloud, label: 'Publisher', value: 'Hugging Face' },
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
        <div className='w-[25%] flex flex-col items-center justify-between border-r border-blue-200 pr-6'>
          <Image
            src='/images/logos/nsu-logo.svg'
            alt='NSU Logo'
            width={200}
            height={200}
            quality={100}
            priority // Ensures it's loaded for print readiness
          />
          <div className='text-center'>
            <h1 className='text-[48px] font-bold text-blue-900 mb-2'>Capstone Project Showcase</h1>
            <h2 className='text-[32px] font-bold text-blue-600 mb-2'>CSE499B.16</h2>
            <div className='flex items-center justify-center text-[24px] text-gray-600'>
              {/* First Group */}
              <div className='flex items-center mr-4'>
                {' '}
                <CalendarDays className='w-6 h-6 mr-2' />
                December 2, 2024
              </div>

              {/* Second Group */}
              <div className='flex items-center'>
                <Calendar className='w-6 h-6 mr-2' />
                Summer 2024
              </div>
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
        <div className='w-[55%] max-h-[170mm] flex flex-col justify-between px-6 py-0'>
          <div className='text-center'>
            <h2 className='text-[40px] font-bold text-blue-700 mb-2'>Bangla Text Summarizer</h2>
            <p className='text-[24px] text-gray-700 mb-4'>
              Transforming lengthy Bengali articles into concise summaries using advanced NLP
              techniques
            </p>
          </div>

          <div className='flex flex-wrap justify-center gap-3 mb-4'>
            {tags.map((tag, index) => (
              <span
                key={index}
                className='bg-blue-100 text-blue-800 text-[20px] font-medium px-3 py-1 rounded-full'
              >
                {tag}
              </span>
            ))}
          </div>

          <div className='flex justify-center items-center mb-4'>
            <div className='bg-blue-100 text-blue-900 text-[32px] font-bold px-6 py-3 rounded-lg flex items-center'>
              <FileBox className='w-8 h-8 mr-2' />
              Bytes of Bengal
            </div>
          </div>

          <div className='grid grid-cols-3 gap-4 w-full'>
            {metrics.map((metric, index) => (
              <div key={index} className='flex items-center bg-white rounded-lg p-3 shadow-sm'>
                <metric.icon className='w-8 h-8 text-blue-600 mr-2' />
                <div>
                  <div className='text-[18px] font-medium text-blue-800'>{metric.label}</div>
                  <div className='text-[16px] text-gray-600'>{metric.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className='w-[20%] flex flex-col justify-between border-l border-blue-200 pl-6'>
          {/* Supervisor Section */}
          <div>
            <div className='flex items-center mb-2'>
              <GraduationCap className='w-8 h-8 text-blue-600 mr-2' />
              <h3 className='text-[32px] font-semibold text-blue-800'>Supervisor</h3>
            </div>
            <div className='bg-white rounded-lg p-2 shadow-sm flex items-center relative'>
              <div className='flex-grow'>
                <div className='text-[24px] font-medium text-blue-700'>{supervisor.name}</div>
                <div className='text-[20px] text-gray-600'>{supervisor.designation}</div>
              </div>
              {/* Picture Frame */}
              <div className='absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center'>
                <div className='w-[104px] h-[104px] rounded-full shadow-lg border-2 border-blue-700 bg-white flex items-center justify-center'>
                  <div className='w-[100px] h-[100px] rounded-full overflow-hidden'>
                    <Image
                      src={supervisor.image}
                      alt={`${supervisor.name}'s picture`}
                      layout='fill'
                      objectFit='cover'
                      quality={100}
                      className='rounded-full'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members Section */}
          <div>
            <div className='flex items-center mb-3'>
              <Users className='w-8 h-8 text-blue-600 mr-2' />
              <h3 className='text-[32px] font-semibold text-blue-800'>Team Members</h3>
            </div>
            <div className='grid grid-cols-1 gap-4'>
              {students.map((student, index) => (
                <div
                  key={index}
                  className='bg-white rounded-lg p-2 shadow-sm flex items-center relative'
                >
                  <div className='flex-grow'>
                    <div className='text-[24px] font-medium text-blue-700'>{student.name}</div>
                    <div className='text-[20px] text-gray-600'>{student.id}</div>
                  </div>
                  {/* Picture Frame */}
                  <div className='absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center'>
                    <div className='w-[84px] h-[84px] rounded-full shadow-lg border-2 border-blue-700 bg-white flex items-center justify-center'>
                      <div className='w-[80px] h-[80px] rounded-full overflow-hidden'>
                        <Image
                          src={student.image}
                          alt={`${student.name}'s picture`}
                          layout='fill'
                          objectFit='cover'
                          quality={100}
                          className='rounded-full'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
