import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code2, Server, Globe } from 'lucide-react'
import { techStack } from '@/lib/constants'

export function RightColumn() {
  return (
    <div className='w-[30%] space-y-6'>
      {/* Tech Stack */}
      <Card className='overflow-hidden bg-white/50 backdrop-blur-sm shadow-md'>
        <CardHeader className='border-b bg-blue-50/50'>
          <div className='flex items-center justify-between'>
            <CardTitle className='flex items-center text-blue-800'>
              <Code2 className='mr-2 h-5 w-5 text-blue-600' />
              Tech Stack
            </CardTitle>
            <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
              05
            </Badge>
          </div>
        </CardHeader>
        <CardContent className='p-6'>
          <div className='space-y-6'>
            {techStack.map((category, index) => (
              <div key={index}>
                <h3 className='text-xl font-semibold text-blue-800 mb-4'>{category.category}</h3>
                <div className='flex flex-wrap gap-2'>
                  {category.items.map((tech, techIndex) => (
                    <div key={techIndex} className='relative h-12 w-auto'>
                      <img src={tech.badge} alt={tech.name} className='h-auto w-auto' />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* System Architecture */}
      <Card className='overflow-hidden bg-white/50 backdrop-blur-sm shadow-md'>
        <CardHeader className='border-b bg-blue-50/50'>
          <div className='flex items-center justify-between'>
            <CardTitle className='flex items-center text-blue-800'>
              <Server className='mr-2 h-5 w-5 text-blue-600' />
              System Architecture
            </CardTitle>
            <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
              06
            </Badge>
          </div>
        </CardHeader>
        <CardContent className='p-4'>
          <div className='overflow-hidden rounded-lg bg-white/50 p-4 shadow-sm'>
            <Image
              src='/sys-arch.png'
              alt='System Architecture Diagram'
              width={7200}
              height={4050}
              quality={100}
              sizes='(max-width: 768px) 100vw, 50vw'
              className='rounded-lg object-contain h-full w-full'
              priority={true}
            />
          </div>
        </CardContent>
      </Card>

      {/* Website UI */}
      <Card className='overflow-hidden bg-white/50 backdrop-blur-sm shadow-md'>
        <CardHeader className='border-b bg-blue-50/50'>
          <div className='flex items-center justify-between'>
            <CardTitle className='flex items-center text-blue-800'>
              <Globe className='mr-2 h-5 w-5 text-blue-600' />
              Website UI
            </CardTitle>
            <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
              07
            </Badge>
          </div>
        </CardHeader>
        <CardContent className='p-6'>
          <div className='flex flex-col md:flex-row gap-6'>
            <div className='flex-1 space-y-2'>
              <div className='relative aspect-[3/4] overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg'>
                <Image
                  src='/home-white-4k.png'
                  alt='Website Light Mode'
                  fill
                  quality={100}
                  className='object-contain'
                />
              </div>
              <p className='text-center text-sm font-medium text-blue-700'>Light Mode</p>
            </div>
            <div className='flex-1 space-y-2'>
              <div className='relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-900 shadow-md transition-all hover:shadow-lg'>
                <Image
                  src='/home-dark-4k.png'
                  alt='Website Dark Mode'
                  quality={100}
                  width={7200}
                  height={4050}
                  sizes='(max-width: 768px) 100vw, 50vw'
                  className='rounded-lg object-contain h-full w-full'
                  priority={true}
                />
              </div>
              <p className='text-center text-sm font-medium text-blue-700'>Dark Mode</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
