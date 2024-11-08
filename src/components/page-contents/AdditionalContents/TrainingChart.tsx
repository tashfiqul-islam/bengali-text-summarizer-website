'use client'

import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Line, LineChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import { TrendingDown, TrendingUp } from 'lucide-react'

// Types for data structures
interface StatCard {
  title: string
  value: string
  change: number
}

interface DataPoint {
  epoch: number
  trainingLoss: number
  validationLoss: number
}

interface TrainingSession {
  name: string
  data: DataPoint[]
}

// Stat cards configuration
const statsCards: StatCard[] = [
  { title: "Training Loss", value: "0.99", change: -18.34 },
  { title: "Validation Loss", value: "0.67", change: -15.21 },
  { title: "Accuracy", value: "92.50", change: 7.89 }
]

// Training sessions data
const trainingSessions: TrainingSession[] = [
  {
    name: "Training 1",
    data: [
      { epoch: 1, trainingLoss: 8.211700, validationLoss: 4.409328 },
      { epoch: 2, trainingLoss: 3.535100, validationLoss: 2.026162 },
      { epoch: 3, trainingLoss: 2.953800, validationLoss: 1.701377 }
    ]
  },
  {
    name: "Training 2",
    data: [
      { epoch: 1, trainingLoss: 2.369700, validationLoss: 1.472677 },
      { epoch: 2, trainingLoss: 2.123700, validationLoss: 1.425006 },
      { epoch: 3, trainingLoss: 2.091400, validationLoss: 1.409577 }
    ]
  },
  {
    name: "Training 3",
    data: [
      { epoch: 1, trainingLoss: 1.046200, validationLoss: 0.692979 },
      { epoch: 2, trainingLoss: 1.015400, validationLoss: 0.683604 },
      { epoch: 3, trainingLoss: 1.027700, validationLoss: 0.676918 },
      { epoch: 4, trainingLoss: 0.988000, validationLoss: 0.672858 },
      { epoch: 5, trainingLoss: 0.994400, validationLoss: 0.671896 }
    ]
  }
]

// Stat card component
const StatCard: React.FC<{ index: number }> = ({ index }) => {
  const card = statsCards[index]
  const isPositive = card.change > 0
  const TrendIcon = isPositive ? TrendingUp : TrendingDown
  const changeColor = isPositive ? 'text-emerald-500' : 'text-rose-500'

  return (
    <div className="h-full p-4 flex flex-col justify-between">
      <h3 className="text-sm font-medium text-muted-foreground">{card.title}</h3>
      <p className="text-2xl font-bold tracking-tight">{card.value}</p>
      <div className={`flex items-center text-sm font-medium ${changeColor}`}>
        <TrendIcon className="h-4 w-4 mr-1" />
        {Math.abs(card.change)}%
      </div>
    </div>
  )
}

// Main chart component
const Chart: React.FC = () => {
  const [selectedTraining, setSelectedTraining] = React.useState(trainingSessions[0].name)

  // Get current training session data
  const currentSession = trainingSessions.find(session => session.name === selectedTraining)
  const chartData = currentSession?.data.map(point => ({
    ...point,
    epoch: `Epoch ${point.epoch}`
  }))

  return (
    <div className="h-full flex flex-col p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-lg font-semibold">Training Progress</h2>
          <p className="text-sm text-muted-foreground">Performance metrics over time</p>
        </div>
        <Select
          value={selectedTraining}
          onValueChange={setSelectedTraining}
        >
          <SelectTrigger className="w-[140px] dark:border-gray-700">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {trainingSessions.map((session) => (
              <SelectItem key={session.name} value={session.name}>
                {session.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis
              dataKey="epoch"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.toFixed(2)}
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
              type="monotone"
              dataKey="trainingLoss"
              stroke="hsl(346, 87%, 43%)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
              name="Training Loss"
            />
            <Line
              type="monotone"
              dataKey="validationLoss"
              stroke="hsl(142, 76%, 36%)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
              name="Validation Loss"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

// Export components
const TrainingChart = {
  StatCard,
  Chart
}

export default TrainingChart
