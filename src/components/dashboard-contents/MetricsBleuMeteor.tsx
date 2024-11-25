'use client'

import React from 'react'
import { BarChart, Bar, XAxis, YAxis, LabelList, Legend, ResponsiveContainer } from 'recharts'
import { CardContent } from '@/components/ui/card'

// Data for BLEU & METEOR Scores
const bleuMeteorData = [
  { set: 'Training', BLEU: 0.018, METEOR: 0.074 },
  { set: 'Validation', BLEU: 0.022, METEOR: 0.079 },
  { set: 'Test', BLEU: 0.022, METEOR: 0.08 },
]

export function MetricsBleuMeteor() {
  return (
    <div className='h-full w-full flex flex-col'>
      {/* Header */}
      <div className='mb-4'>
        <h2 className='text-[48px] font-bold text-gray-900 mb-2'>BLEU & METEOR Scores</h2>
        <div className='h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'></div>
      </div>

      {/* Chart Content */}
      <CardContent className='flex flex-1 items-center justify-center p-4'>
        <div className='w-full flex items-center justify-center h-[450px]'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={bleuMeteorData} margin={{ top: 20, right: 30, left: 30, bottom: 20 }}>
              <XAxis
                dataKey='set'
                tick={{ fontSize: 22, fill: 'currentColor' }}
                axisLine={{ stroke: 'currentColor' }}
                tickLine={{ stroke: 'currentColor' }}
              />
              <YAxis
                tick={{ fontSize: 22, fill: 'currentColor' }}
                axisLine={{ stroke: 'currentColor' }}
                tickLine={{ stroke: 'currentColor' }}
              />
              <Legend
                verticalAlign='bottom'
                wrapperStyle={{ paddingTop: '10px', fontSize: '22px', fill: 'currentColor' }}
              />
              <Bar dataKey='BLEU' fill='#3b82f6' radius={[4, 4, 0, 0]} name='BLEU Score'>
                <LabelList dataKey='BLEU' position='top' fill='currentColor' fontSize={22} />
              </Bar>
              <Bar dataKey='METEOR' fill='#10b981' radius={[4, 4, 0, 0]} name='METEOR Score'>
                <LabelList dataKey='METEOR' position='top' fill='currentColor' fontSize={22} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </div>
  )
}
