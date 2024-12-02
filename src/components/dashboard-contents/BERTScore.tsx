'use client'

import React from 'react'
import { BarChart, Bar, XAxis, YAxis, LabelList, ResponsiveContainer } from 'recharts'

// Data for the BERTScore chart
const bertScoreData = [
  { metric: 'Precision', value: 0.8642 },
  { metric: 'Recall', value: 0.8574 },
  { metric: 'F1 Score', value: 0.8608 },
]

export function BERTScore() {
  return (
    <div className='h-full w-full flex flex-col'>
      {/* Header */}
      <div className='mb-4'>
        <h2 className='text-[48px] font-bold text-gray-900 mb-2'>BERTScore</h2>
        <div className='h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'></div>
      </div>

      {/* Bar Chart */}
      <div className='flex-1 flex items-center justify-center'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            data={bertScoreData}
            layout='vertical'
            margin={{ top: 20, right: 20, left: 40, bottom: 20 }} // Added left margin
          >
            {/* X-Axis */}
            <XAxis
              type='number'
              domain={[0, 1]}
              tick={{ fontSize: 24, fill: 'currentColor' }}
              axisLine={{ stroke: 'currentColor' }}
              tickLine={{ stroke: 'currentColor' }}
            />
            {/* Y-Axis */}
            <YAxis
              dataKey='metric'
              type='category'
              tick={{ fontSize: 24, fill: 'currentColor' }}
              axisLine={{ stroke: 'currentColor' }}
              tickLine={{ stroke: 'currentColor' }}
              width={120} // Increased width to fit "Precision"
            />
            {/* Bar */}
            <Bar dataKey='value' fill='#8b5cf6' radius={[0, 4, 4, 0]}>
              <LabelList
                dataKey='value'
                position='right'
                fill='currentColor'
                fontSize={24}
                formatter={(value: number) => value.toFixed(4)}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
