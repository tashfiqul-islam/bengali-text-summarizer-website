import { Card } from '@/components/ui/card'

export default function BentoPosterLayout() {
  return (
    <div className='w-[841mm] h-[1189mm] bg-gray-100 p-6 flex flex-col gap-6'>
      {/* Header */}
      <Card className='w-full h-[120mm] bg-blue-100/20 flex items-center justify-center'>
        <span className='text-5xl font-bold'>Header</span>
      </Card>

      <div className='flex gap-6 flex-1'>
        {/* Left Column */}
        <div className='flex flex-col gap-6 w-[60%]'>
          <div className='flex gap-6 h-[180mm]'>
            <Card className='w-1/2 bg-green-100/20 flex items-center justify-center'>
              <span className='text-3xl font-semibold'>Problem Statement</span>
            </Card>
            <Card className='w-1/2 bg-yellow-100/20 flex items-center justify-center'>
              <span className='text-3xl font-semibold'>Project Overview</span>
            </Card>
          </div>
          <Card className='flex-1 bg-red-100/20 flex items-center justify-center'>
            <span className='text-3xl'>Chart 1: BLEU & METEOR Scores</span>
          </Card>
          <div className='flex gap-6 h-[240mm]'>
            <Card className='w-1/2 bg-orange-100/20 flex items-center justify-center'>
              <span className='text-3xl'>Chart 2: Content Coverage</span>
            </Card>
            <Card className='w-1/2 bg-pink-100/20 flex items-center justify-center'>
              <span className='text-3xl'>Chart 3: BERT Scores</span>
            </Card>
          </div>
        </div>

        {/* Right Column */}
        <div className='flex flex-col gap-6 w-[40%]'>
          <Card className='h-[120mm] bg-indigo-100/20 flex items-center justify-center'>
            <span className='text-3xl font-semibold'>Key Features</span>
          </Card>
          <Card className='flex-1 bg-teal-100/20 flex items-center justify-center'>
            <span className='text-3xl font-semibold'>System Architecture Diagram</span>
          </Card>
          <Card className='h-[180mm] bg-purple-100/20 flex items-center justify-center'>
            <span className='text-3xl'>Chart 4: Training Loss</span>
          </Card>
          <div className='flex gap-6 h-[120mm]'>
            <Card className='w-1/2 bg-blue-200/20 flex items-center justify-center'>
              <span className='text-2xl'>QR Code</span>
            </Card>
            <Card className='w-1/2 bg-purple-200/20 flex items-center justify-center'>
              <span className='text-2xl'>Training Details</span>
            </Card>
          </div>
        </div>
      </div>

      {/* Website UI Section */}
      <div className='flex gap-6 h-[220mm]'>
        <Card className='flex-1 bg-pink-100/20 flex items-center justify-center'>
          <span className='text-3xl font-semibold'>Website UI (Light Mode)</span>
        </Card>
        <Card className='flex-1 bg-pink-200/20 flex items-center justify-center'>
          <span className='text-3xl font-semibold'>Website UI (Dark Mode)</span>
        </Card>
      </div>

      {/* Footer */}
      <Card className='w-full h-[80mm] bg-gray-300/20 flex items-center justify-center'>
        <span className='text-3xl font-semibold'>Tech Stacks</span>
      </Card>
    </div>
  )
}
