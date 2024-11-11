'use client'

import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Line,
  LineChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'

// Types for data structures
interface DataPoint {
  epoch: number
  trainingLoss: number
  validationLoss: number
}

interface TrainingSession {
  name: string
  data: DataPoint[]
}

// Training sessions data
const trainingSessions: TrainingSession[] = [
  {
    name: 'Training 1',
    data: [
      { epoch: 1, trainingLoss: 8.2117, validationLoss: 4.409328 },
      { epoch: 2, trainingLoss: 3.5351, validationLoss: 2.026162 },
      { epoch: 3, trainingLoss: 2.9538, validationLoss: 1.701377 },
    ],
  },
  {
    name: 'Training 2',
    data: [
      { epoch: 1, trainingLoss: 2.3697, validationLoss: 1.472677 },
      { epoch: 2, trainingLoss: 2.1237, validationLoss: 1.425006 },
      { epoch: 3, trainingLoss: 2.0914, validationLoss: 1.409577 },
    ],
  },
  {
    name: 'Training 3',
    data: [
      { epoch: 1, trainingLoss: 1.0462, validationLoss: 0.692979 },
      { epoch: 2, trainingLoss: 1.0154, validationLoss: 0.683604 },
      { epoch: 3, trainingLoss: 1.0277, validationLoss: 0.676918 },
      { epoch: 4, trainingLoss: 0.988, validationLoss: 0.672858 },
      { epoch: 5, trainingLoss: 0.9944, validationLoss: 0.671896 },
    ],
  },
]

// Main chart component
const Chart: React.FC = () => {
  const [selectedTraining, setSelectedTraining] = React.useState(trainingSessions[0].name)

  // Get current training session data
  const currentSession = trainingSessions.find(session => session.name === selectedTraining)
  const chartData = currentSession?.data.map(point => ({
    ...point,
    epoch: `Epoch ${point.epoch}`,
  }))

  return (
    <div className='h-full flex flex-col p-6'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0'>
        <div>
          <h2 className='text-lg font-semibold'>Training Progress</h2>
          <p className='text-sm text-muted-foreground'>Performance metrics over time</p>
        </div>
        <Select value={selectedTraining} onValueChange={setSelectedTraining}>
          <SelectTrigger className='w-[140px] dark:border-gray-700'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {trainingSessions.map(session => (
              <SelectItem key={session.name} value={session.name}>
                {session.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className='flex-1'>
        <ResponsiveContainer width='100%' height='100%'>
          <LineChart data={chartData} margin={{ left: -20, right: 20, top: 5, bottom: 15 }}>
            <CartesianGrid strokeDasharray='3 3' stroke='hsl(var(--border))' vertical={false} />
            <XAxis
              dataKey='epoch'
              stroke='hsl(var(--muted-foreground))'
              fontSize={12}
              tickLine={false}
              axisLine={false}
              dy={25} // Push X-axis labels down by 10 pixels
            />
            <YAxis
              stroke='hsl(var(--muted-foreground))'
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={value => value.toFixed(2)}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                borderRadius: '8px',
                border: '1px solid hsl(var(--border))',
                boxShadow: 'hsl(var(--shadow)) 0px 4px 12px',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Line
              type='monotone'
              dataKey='trainingLoss'
              stroke='hsl(346, 87%, 43%)'
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
              name='Training Loss'
            />
            <Line
              type='monotone'
              dataKey='validationLoss'
              stroke='hsl(142, 76%, 36%)'
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
              name='Validation Loss'
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

// Export component
const TrainingChart = {
  Chart,
}

export default TrainingChart
