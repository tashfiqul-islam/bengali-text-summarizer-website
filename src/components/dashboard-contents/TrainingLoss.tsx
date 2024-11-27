import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const trainingLossData = [
  { round: 1, loss: 6.9987, epochs: 3, model: 'v3', dataSize: '10k' },
  { round: 2, loss: 2.2538, epochs: 3, model: 'v3', dataSize: '10k' },
  { round: 3, loss: 1.0143, epochs: 5, model: 'v3', dataSize: '10k' },
  { round: 4, loss: 2.5004, epochs: 100, model: 'v4', dataSize: '20k' },
]

export function TrainingLoss() {
  return (
    <div className='w-full h-full flex flex-col space-y-6'>
      <div className='mb-8'>
        <h2 className='text-[48px] font-bold text-gray-900 mb-4'>Training Loss</h2>
        <div className='h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full'></div>
      </div>
      <div className='flex-1'>
        <p className='text-[24px] text-gray-600 mb-6'>
          This table presents a comprehensive overview of our model's training progress, showcasing
          the evolution of loss across multiple rounds with varying epochs and data sizes.
        </p>
        <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md'>
          <Table>
            <TableHeader>
              <TableRow className='bg-gradient-to-r from-blue-50 to-purple-50'>
                <TableHead className='text-[22px] font-bold text-gray-900 py-4'>Round</TableHead>
                <TableHead className='text-[22px] font-bold text-gray-900 py-4'>Loss</TableHead>
                <TableHead className='text-[22px] font-bold text-gray-900 py-4'>Epochs</TableHead>
                <TableHead className='text-[22px] font-bold text-gray-900 py-4'>Model</TableHead>
                <TableHead className='text-[22px] font-bold text-gray-900 py-4'>
                  Data Size
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trainingLossData.map((row, index) => (
                <TableRow key={row.round} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <TableCell className='text-[22px] font-medium text-gray-900 py-4'>
                    {row.round}
                  </TableCell>
                  <TableCell className='text-[22px] text-gray-700 py-4'>
                    {row.loss.toFixed(4)}
                  </TableCell>
                  <TableCell className='text-[2px] text-gray-700 py-4'>{row.epochs}</TableCell>
                  <TableCell className='text-[22px] text-gray-700 py-4'>{row.model}</TableCell>
                  <TableCell className='text-[22px] text-gray-700 py-4'>{row.dataSize}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
