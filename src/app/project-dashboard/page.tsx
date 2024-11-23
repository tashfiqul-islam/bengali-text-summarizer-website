import { Card } from '@/components/ui/card'
import { Header } from '@/components/dashboard-contents/Header'
import { SystemArchitecture } from '@/components/dashboard-contents/SystemArchitecture'
import { WebsiteUI } from '@/components/dashboard-contents/WebsiteUI'

export default function PosterLayout() {
  return (
    <div
      id='poster'
      className='bg-gradient-to-br from-blue-50 to-indigo-50 w-[841mm] h-[1189mm] flex flex-col p-4 gap-4'
    >
      {/* Header - 160mm height, 833mm width */}
      <div className='w-[833mm] h-[160mm] bg-gradient-to-br from-blue-900 to-indigo-800 flex items-center justify-center rounded-lg overflow-hidden shadow-2xl'>
        <Header />
      </div>

      {/* Main content wrapped with id="poster" */}
      <div className='flex flex-col gap-4'>
        {/* Overview - 172mm height, 833mm width */}
        <div className='w-[833mm] h-[172mm] grid grid-cols-3 gap-4'>
          <Card className='bg-white/70 backdrop-blur-sm border-white/20 p-4 overflow-auto rounded-lg'>
            <h2 className='text-xl font-semibold mb-2'>Problem Statement</h2>
          </Card>
          <Card className='bg-white/70 backdrop-blur-sm border-white/20 p-4 overflow-auto rounded-lg'>
            <h2 className='text-xl font-semibold mb-2'>Project Overview</h2>
          </Card>
          <Card className='bg-white/70 backdrop-blur-sm border-white/20 p-4 overflow-auto rounded-lg'>
            <h2 className='text-xl font-semibold mb-2'>Key Features</h2>
          </Card>
        </div>

        {/* System Structure - 312.625mm height, 833mm width */}
        <div className='w-[833mm] h-[312.625mm] grid grid-cols-4 gap-4'>
          <div className='col-span-3 bg-white rounded-xl shadow-2xl overflow-hidden'>
            <SystemArchitecture />
          </div>
          <div className='grid grid-rows-2 gap-4'>
            <Card className='bg-white/70 backdrop-blur-sm border-white/20 p-4 flex items-center justify-center rounded-lg'>
              <h2 className='text-xl font-semibold'>Tech Stack</h2>
            </Card>
            <Card className='bg-white/70 backdrop-blur-sm border-white/20 p-4 flex items-center justify-center rounded-lg'>
              <h2 className='text-xl font-semibold'>Training Loss</h2>
            </Card>
          </div>
        </div>

        {/* Metrics - 172mm height, 833mm width */}
        <div className='w-[833mm] h-[172mm] grid grid-cols-12 gap-4'>
          <Card className='col-span-6 bg-white/70 backdrop-blur-sm border-white/20 p-4 flex items-center justify-center rounded-lg'>
            <h2 className='text-xl font-semibold'>BLEU & METEOR Scores</h2>
          </Card>
          <Card className='col-span-3 bg-white/70 backdrop-blur-sm border-white/20 p-4 flex items-center justify-center rounded-lg'>
            <h2 className='text-xl font-semibold'>Coverage</h2>
          </Card>
          <Card className='col-span-3 bg-white/70 backdrop-blur-sm border-white/20 p-4 flex items-center justify-center rounded-lg'>
            <h2 className='text-xl font-semibold'>BERTScore</h2>
          </Card>
        </div>

        {/* UI & Codebase - 332mm height, 833mm width */}
        <div className='w-[833mm] h-[332mm] grid grid-cols-4 gap-4'>
          <div className='col-span-3'>
            <WebsiteUI />
          </div>
          <div className='grid grid-rows-2 gap-4'>
            <Card className='bg-white/70 backdrop-blur-sm border-white/20 p-4 flex items-center justify-center rounded-lg'>
              <h2 className='text-xl font-semibold'>Website QR Code</h2>
            </Card>
            <Card className='bg-white/70 backdrop-blur-sm border-white/20 p-4 flex items-center justify-center rounded-lg'>
              <h2 className='text-xl font-semibold'>GitHub QR Code</h2>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
