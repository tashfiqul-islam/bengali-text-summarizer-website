import { Card } from '@/components/ui/card'
import { Header } from '@/components/dashboard-contents/Header'
import { SystemArchitecture } from '@/components/dashboard-contents/SystemArchitecture'
import { WebsiteUI } from '@/components/dashboard-contents/WebsiteUI'
import { ProblemStatement } from '@/components/dashboard-contents/ProblemStatement'
import { ProjectOverview } from '@/components/dashboard-contents/ProjectOverview'
import { KeyFeatures } from '@/components/dashboard-contents/KeyFeatures'
import { TechStack } from '@/components/dashboard-contents/TechStack'
import { TrainingLoss } from '@/components/dashboard-contents/TrainingLoss'
import { MetricsBleuMeteor } from '@/components/dashboard-contents/MetricsBleuMeteor'
import { Coverage } from '@/components/dashboard-contents/Coverage'
import { BERTScore } from '@/components/dashboard-contents/BERTScore'
import { QRCodeWebsite } from '@/components/dashboard-contents/QRCodeWebsite'
import { QRCodeGithub } from '@/components/dashboard-contents/QRCodeGithub'

export default function PosterLayout() {
  return (
    <div
      id='poster'
      className='bg-gradient-to-br from-blue-50 to-indigo-50 w-[841mm] h-[1189mm] flex flex-col p-4 gap-4'
    >
      {/* Header - 170mm height */}
      <div className='w-[833mm] h-[170mm] bg-gradient-to-br from-blue-900 to-indigo-800 flex items-center justify-center rounded-lg overflow-hidden shadow-md'>
        <Header />
      </div>

      {/* Overview - 180mm height */}
      <div className='w-[833mm] h-[180mm] grid grid-cols-3 gap-4'>
        <Card className='bg-white/70 backdrop-blur-sm border-white/20 overflow-hidden rounded-lg shadow-md'>
          <ProblemStatement />
        </Card>
        <Card className='bg-white/70 backdrop-blur-sm border-white/20 overflow-hidden rounded-lg shadow-md'>
          <ProjectOverview />
        </Card>
        <Card className='bg-white/70 backdrop-blur-sm border-white/20 overflow-hidden rounded-lg shadow-md'>
          <KeyFeatures />
        </Card>
      </div>

      {/* System Structure - 320mm height */}
      <div className='w-[833mm] h-[320mm] grid grid-cols-4 grid-rows-2 gap-4'>
        <div className='col-span-3 row-span-2 bg-white rounded-lg shadow-md overflow-hidden'>
          <SystemArchitecture />
        </div>
        <Card className='row-span-1 bg-white/70 backdrop-blur-sm border-white/20 p-4 flex items-center justify-center rounded-lg shadow-md'>
          <TechStack />
        </Card>
        <Card className='row-span-1 bg-white/70 backdrop-blur-sm border-white/20 p-4 flex items-center justify-center rounded-lg shadow-md'>
          <TrainingLoss />
        </Card>
      </div>

      {/* Metrics - 180mm height */}
      <div className='w-[833mm] h-[180mm] grid grid-cols-12 gap-4'>
        <Card className='col-span-6 bg-white/70 backdrop-blur-sm border-white/20 p-4 flex flex-col items-center justify-center rounded-lg shadow-md'>
          <MetricsBleuMeteor />
        </Card>
        <Card className='col-span-3 bg-white/70 backdrop-blur-sm border-white/20 p-4 flex flex-col items-center justify-center rounded-lg shadow-md'>
          <Coverage />
        </Card>
        <Card className='col-span-3 bg-white/70 backdrop-blur-sm border-white/20 p-4 flex flex-col items-center justify-center rounded-lg shadow-md'>
          <BERTScore />
        </Card>
      </div>

      {/* UI & Codebase - 331mm height */}
      <div className='w-[833mm] h-[331mm] grid grid-cols-10 gap-4'>
        <div className='col-span-4 bg-white rounded-lg shadow-md overflow-hidden'>
          <WebsiteUI theme='Light' />
        </div>
        <div className='col-span-4 bg-gray-900 rounded-lg shadow-md overflow-hidden'>
          <WebsiteUI theme='Dark' />
        </div>
        <div className='col-span-2 grid grid-rows-2 gap-4'>
          <Card className='bg-white/70 backdrop-blur-sm border-white/20 p-4 flex flex-col items-center justify-center rounded-lg shadow-md'>
            <QRCodeWebsite />
          </Card>
          <Card className='bg-white/70 backdrop-blur-sm border-white/20 p-4 flex flex-col items-center justify-center rounded-lg shadow-md'>
            <QRCodeGithub />
          </Card>
        </div>
      </div>
    </div>
  )
}
