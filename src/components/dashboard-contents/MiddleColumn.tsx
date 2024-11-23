'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BarChartIcon, PieChartIcon, BarChart2 } from 'lucide-react'
import {
  BarChart,
  LineChart as RechartsLineChart,
  PieChart,
  ResponsiveContainer,
  Bar,
  Pie,
  Cell,
  LabelList,
  Legend,
  XAxis,
  YAxis,
} from 'recharts'
import { bleuMeteorData, coverageData, bertScoreData, trainingLossData } from '@/lib/constants'

interface MiddleColumnProps {
  className?: string
}

export const MiddleColumn: React.FC<MiddleColumnProps> = ({ className }) => {
  return (
    <div className='w-[50%] space-y-6'>
      {/* BLEU & METEOR Scores */}
      <Card className='overflow-hidden bg-white/50 backdrop-blur-sm shadow-md'>
        <CardHeader className='border-b bg-blue-50/50'>
          <div className='flex items-center justify-between'>
            <CardTitle className='text-2xl font-semibold text-blue-800 flex items-center'>
              <BarChartIcon className='w-6 h-12 mr-2 text-blue-600' />
              BLEU & METEOR Scores Across Datasets
            </CardTitle>
            <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
              4.1
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={400}>
            <BarChart data={bleuMeteorData} margin={{ top: 40, right: 30, left: 20, bottom: 20 }}>
              <XAxis
                dataKey='set'
                tick={{ fontSize: 16, fill: 'currentColor' }}
                axisLine={{ stroke: 'currentColor' }}
                tickLine={{ stroke: 'currentColor' }}
              />
              <YAxis
                tick={{ fontSize: 16, fill: 'currentColor' }}
                axisLine={{ stroke: 'currentColor' }}
                tickLine={{ stroke: 'currentColor' }}
              />
              <Legend verticalAlign='bottom' height={10} wrapperStyle={{ paddingTop: '10px' }} />
              <Bar dataKey='BLEU' fill='#3b82f6' radius={[4, 4, 0, 0]} name='BLEU Score'>
                <LabelList dataKey='BLEU' position='top' fill='currentColor' fontSize={16} />
              </Bar>
              <Bar dataKey='METEOR' fill='#10b981' radius={[4, 4, 0, 0]} name='METEOR Score'>
                <LabelList dataKey='METEOR' position='top' fill='currentColor' fontSize={16} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Content Coverage */}
      <Card className='overflow-hidden bg-white/50 backdrop-blur-sm shadow-md'>
        <CardHeader className='border-b bg-blue-50/50'>
          <div className='flex items-center justify-between'>
            <CardTitle className='text-2xl font-semibold text-blue-800 flex items-center'>
              <PieChartIcon className='w-6 h-12 mr-2 text-blue-600' />
              Content Coverage
            </CardTitle>
            <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
              4.2
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={350}>
            <PieChart>
              <Pie
                data={coverageData}
                cx='50%'
                cy='50%'
                labelLine={false}
                outerRadius={120}
                fill='#8884d8'
                dataKey='value'
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
              >
                {coverageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#3b82f6' : '#10b981'} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* BERTScore */}
      <Card className='overflow-hidden bg-white/50 backdrop-blur-sm shadow-md'>
        <CardHeader className='border-b bg-blue-50/50'>
          <div className='flex items-center justify-between'>
            <CardTitle className='text-2xl font-semibold text-blue-800 flex items-center'>
              <BarChart2 className='w-6 h-12 mr-2 text-blue-600' />
              BERTScore
            </CardTitle>
            <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
              4.3
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer
            width='100%'
            height={340}
            style={{ paddingTop: '20px', paddingBottom: '20px' }}
          >
            <BarChart
              data={bertScoreData}
              layout='vertical'
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis
                type='number'
                domain={[0, 1]}
                tick={{ fontSize: 16, fill: 'currentColor' }}
                axisLine={{ stroke: 'currentColor' }}
                tickLine={{ stroke: 'currentColor' }}
              />
              <YAxis
                dataKey='metric'
                type='category'
                tick={{ fontSize: 16, fill: 'currentColor' }}
                axisLine={{ stroke: 'currentColor' }}
                tickLine={{ stroke: 'currentColor' }}
              />
              <Bar dataKey='value' fill='#8b5cf6' radius={[0, 4, 4, 0]}>
                <LabelList
                  dataKey='value'
                  position='right'
                  fill='currentColor'
                  fontSize={16}
                  formatter={(value: number) => value.toFixed(4)}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
