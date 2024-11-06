'use client'

import { useState, useMemo, useCallback } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import { TrendingDown, ChevronLeft, ChevronRight, Info } from 'lucide-react'

// Define types for our data structures
interface TrainingData {
  epoch: number
  trainingLoss: number
  validationLoss: number
}

interface TrainingSession {
  name: string
  data: TrainingData[]
}

// Training data
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

export default function TrainingChart() {
  const [activeSessionIndex, setActiveSessionIndex] = useState(0)
  const [activeTooltipData, setActiveTooltipData] = useState<TrainingData | null>(null)

  // Memoize the current session data
  const currentSession = useMemo(() => trainingSessions[activeSessionIndex], [activeSessionIndex])

  // Calculate percentage decrease in loss
  const percentDecrease = useMemo(() => {
    const initialLoss = currentSession.data[0].trainingLoss
    const finalLoss = currentSession.data[currentSession.data.length - 1].trainingLoss
    return ((initialLoss - finalLoss) / initialLoss * 100).toFixed(2)
  }, [currentSession])

  // Memoize session navigation functions to prevent unnecessary re-renders
  const nextSession = useCallback(() => setActiveSessionIndex((prev) => (prev + 1) % trainingSessions.length), [])
  const prevSession = useCallback(() => setActiveSessionIndex((prev) => (prev - 1 + trainingSessions.length) % trainingSessions.length), [])

  // Calculate the height based on 65% of 800px minus padding
  const chartHeight = useMemo(() => {
    const totalHeight = 800
    const padding = 8 // 4px top + 4px bottom
    const availableHeight = totalHeight - padding
    return Math.floor(availableHeight * 0.65)
  }, [])

  // Handle mouse move on chart for custom tooltip
  const handleMouseMove = useCallback((props: any) => {
    if (props.activePayload && props.activePayload[0]) {
      setActiveTooltipData(props.activePayload[0].payload)
    }
  }, [])

  // Handle mouse leave on chart
  const handleMouseLeave = useCallback(() => {
    setActiveTooltipData(null)
  }, [])

  return (
    <Card className={`w-full h-[${chartHeight}px] overflow-hidden bg-gradient-to-br from-teal-50 to-purple-50 dark:from-teal-950/50 dark:to-purple-950/50 transition-shadow duration-300 ease-in-out hover:shadow-lg`}>
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-teal-600 dark:text-teal-400">
            {currentSession.name}
          </CardTitle>
          <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 text-xs">
            {currentSession.data.length} Epochs
          </Badge>
        </div>
        <CardDescription className="text-teal-500 dark:text-teal-400">
          Training and Validation Loss
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 h-[calc(100%-8rem)]">
        <div className="w-full h-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart 
              data={currentSession.data} 
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
              <XAxis 
                dataKey="epoch" 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => `Epoch ${value}`}
                fontSize={10}
                stroke="currentColor"
                opacity={0.5}
              />
              <YAxis 
                tickLine={false} 
                axisLine={false} 
                fontSize={10}
                stroke="currentColor"
                opacity={0.5}
              />
              <Line 
                type="monotone" 
                dataKey="trainingLoss" 
                stroke="#0d9488" 
                strokeWidth={2} 
                dot={{ r: 3, fill: "#0d9488" }}
                activeDot={{ r: 5, fill: "#0d9488" }}
              />
              <Line 
                type="monotone" 
                dataKey="validationLoss" 
                stroke="#a855f7" 
                strokeWidth={2} 
                dot={{ r: 3, fill: "#a855f7" }}
                activeDot={{ r: 5, fill: "#a855f7" }}
              />
            </LineChart>
          </ResponsiveContainer>
          {activeTooltipData && (
            <TooltipProvider>
              <Tooltip open={true}>
                <TooltipTrigger asChild>
                  <div className="absolute inset-0" />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-sm">
                    <p className="font-bold">Epoch {activeTooltipData.epoch}</p>
                    <p className="text-teal-600">Training Loss: {activeTooltipData.trainingLoss.toFixed(6)}</p>
                    <p className="text-purple-600">Validation Loss: {activeTooltipData.validationLoss.toFixed(6)}</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <TrendingDown className="h-4 w-4 text-teal-500 dark:text-teal-400" />
          <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
            {percentDecrease}% Decrease
          </span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                  <Info className="h-3 w-3 text-teal-500 dark:text-teal-400" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">Decrease in training loss from first to last epoch</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex space-x-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSession}
            className="h-7 w-7 p-0 bg-teal-100 hover:bg-teal-200 dark:bg-teal-900/50 dark:hover:bg-teal-900"
          >
            <ChevronLeft className="h-4 w-4 text-teal-600 dark:text-teal-400" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSession}
            className="h-7 w-7 p-0 bg-teal-100 hover:bg-teal-200 dark:bg-teal-900/50 dark:hover:bg-teal-900"
          >
            <ChevronRight className="h-4 w-4 text-teal-600 dark:text-teal-400" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
