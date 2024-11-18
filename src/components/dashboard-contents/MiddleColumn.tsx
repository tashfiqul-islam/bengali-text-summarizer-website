'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  BarChartIcon,
  PieChartIcon,
  BarChart2,
  ClipboardList,
  LineChartIcon,
  Hash,
  Cpu,
  Repeat,
  TrendingDown,
  TrendingUp,
  Database,
} from 'lucide-react'
import {
  BarChart,
  LineChart as RechartsLineChart,
  PieChart,
  ResponsiveContainer,
  Bar,
  Line,
  Pie,
  Cell,
  LabelList,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts'
import { bleuMeteorData, coverageData, bertScoreData, trainingLossData } from '@/lib/constants'

export const MiddleColumn: React.FC = () => {
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

      {/* Training Loss Section */}
      <div className='grid grid-cols-10 gap-6'>
        {/* Training Details */}
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

        {/* Training Loss Graph */}
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
            <ResponsiveContainer width='100%' height={400}>
              <RechartsLineChart
                data={trainingLossData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
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
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
