'use client'

import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

// Data for the coverage chart
export const coverageData = [
  { name: 'Content Covered', value: 54.1 },
  { name: 'Remaining', value: 45.9 },
]

export function Coverage() {
  return (
    <div className='h-full w-full flex flex-col'>
      {/* Header */}
      <div className='mb-4'>
        <h2 className='text-[48px] font-bold text-gray-900 mb-2'>Content Coverage</h2>
        <div className='h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'></div>
      </div>

      {/* Pie Chart */}
      <div className='flex-1 flex items-center justify-center'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={coverageData}
              cx='50%'
              cy='50%'
              labelLine={false}
              outerRadius='75%'
              fill='#8884d8'
              dataKey='value'
              label={({ name, percent, x, y }) => (
                <text
                  x={x}
                  y={y}
                  fill={name === 'Content Covered' ? '#3b82f6' : '#10b981'}
                  fontSize='24px'
                  textAnchor='middle'
                  dominantBaseline='central'
                >
                  {`${name}: ${(percent * 100).toFixed(1)}%`}
                </text>
              )}
            >
              {coverageData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#3b82f6' : '#10b981'} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
