'use client'

import React from 'react'
import { TrendingDown, TrendingUp } from 'lucide-react'

// Types for data structures
interface StatCard {
  title: string
  value: string
  change: number
}

// Stat cards configuration
const statsCards: StatCard[] = [
  { title: 'Training Loss', value: '0.99', change: -18.34 },
  { title: 'Validation Loss', value: '0.67', change: -15.21 },
  { title: 'Accuracy', value: '73.24%', change: 7.89 },
]

interface StatCardProps {
  index: number
}

// Stat card component
export const StatCard: React.FC<StatCardProps> = ({ index }) => {
  const card = statsCards[index]
  const isPositive = card.change > 0
  const TrendIcon = isPositive ? TrendingUp : TrendingDown
  const changeColor = isPositive ? 'text-emerald-500' : 'text-emerald-500'

  return (
    <div className='h-full p-4 flex flex-col justify-between'>
      <h3 className='text-sm font-medium text-muted-foreground'>{card.title}</h3>
      <p className='text-2xl font-bold tracking-tight'>{card.value}</p>
      <div className={`flex items-center text-sm font-medium ${changeColor}`}>
        <TrendIcon className='h-4 w-4 mr-1' />
        {Math.abs(card.change)}%
      </div>
    </div>
  )
}

export default StatCard
