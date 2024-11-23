'use client'

import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { LineChart as RechartsLineChart, CartesianGrid, XAxis, YAxis, Legend, Line } from 'recharts'
import {
  ClipboardList,
  Cpu,
  Repeat,
  Database,
  Hash,
  TrendingDown,
  TrendingUp,
  LineChart as LineChartIcon,
} from 'lucide-react'
import { trainingLossData } from '@/lib/constants'

interface MiddleRightColumnProps {
  className?: string
}

export const MiddleRightColumn: React.FC<MiddleRightColumnProps> = ({ className }) => {
  return (
    <div className='grid grid-cols-10 gap-6'>
      {/* Training Details: 40% Width */}
      <Card className='col-span-4 overflow-hidden bg-white/50 backdrop-blur-sm shadow-md'>
        <CardHeader className='border-b bg-blue-50/50'>
          <div className='flex items-center justify-between'>
            <CardTitle className='text-2xl font-semibold text-blue-800 flex items-center'>
              <ClipboardList className='w-6 h-12 mr-2 text-blue-600' />
              Training Details
            </CardTitle>
            <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
              4.4
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-2 gap-4'>
            {trainingLossData.map((round, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  index < 3 ? 'bg-green-50 dark:bg-green-900/20' : 'bg-red-50 dark:bg-red-900/20'
                }`}
              >
                <h3 className='text-lg font-semibold mb-2 flex items-center gap-4'>
                  <Hash className='w-4 h-4' />
                  Round {round.round}
                </h3>
                <div className='space-y-2'>
                  <p className='flex items-center gap-2 text-sm'>
                    <Cpu className='w-4 h-4' />
                    Model {round.model}
                  </p>
                  <p className='flex items-center gap-2 text-sm'>
                    <Repeat className='w-4 h-4' />
                    {round.epochs} epochs
                  </p>
                  <p className='flex items-center gap-2 text-sm'>
                    <Database className='w-4 h-4' />
                    {round.dataSize} data
                  </p>
                  <p
                    className={`flex items-center gap-2 text-sm font-medium ${
                      index < 3
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-red-600 dark:text-red-400'
                    }`}
                  >
                    {index < 3 ? (
                      <TrendingDown className='w-4 h-4' />
                    ) : (
                      <TrendingUp className='w-4 h-4' />
                    )}
                    Loss: {round.loss.toFixed(4)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Training Loss Graph: 60% Width */}
      <Card className='col-span-6 overflow-hidden bg-white/50 backdrop-blur-sm shadow-md'>
        <CardHeader className='border-b bg-blue-50/50'>
          <div className='flex items-center justify-between'>
            <CardTitle className='text-2xl font-semibold text-blue-800 flex items-center'>
              <LineChartIcon className='w-6 h-12 mr-2 text-blue-600' />
              Training Loss Across Rounds
            </CardTitle>
            <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
              4.5
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <RechartsLineChart
            data={trainingLossData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            width={800}
            height={400}
          >
            <CartesianGrid strokeDasharray='3 3' stroke='#e0e0e0' />
            <XAxis
              dataKey='round'
              tick={{ fontSize: 14, fill: 'currentColor' }}
              axisLine={{ stroke: 'currentColor' }}
              tickLine={{ stroke: 'currentColor' }}
              label={{
                value: 'Round',
                position: 'insideBottom',
                offset: -10,
                fill: 'currentColor',
              }}
            />
            <YAxis
              tick={{ fontSize: 14, fill: 'currentColor' }}
              axisLine={{ stroke: 'currentColor' }}
              tickLine={{ stroke: 'currentColor' }}
              label={{
                value: 'Loss',
                angle: -90,
                position: 'insideLeft',
                offset: -5,
                fill: 'currentColor',
              }}
            />
            <Legend verticalAlign='top' height={36} iconType='circle' />
            <Line
              type='monotone'
              dataKey='loss'
              stroke='#f97316'
              strokeWidth={2}
              dot={{ r: 6, strokeWidth: 2, fill: '#fff' }}
              name='Training Loss'
            />
          </RechartsLineChart>
        </CardContent>
      </Card>
    </div>
  )
}
