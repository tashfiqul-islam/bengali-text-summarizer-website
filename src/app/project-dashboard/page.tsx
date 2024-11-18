'use client'

import React from 'react'
import Image from 'next/legacy/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Brain,
  Code2,
  Text,
  LayoutDashboard,
  NotebookPen,
  LineChart,
  ScrollText,
  MonitorSmartphone,
  Server,
  SunMoon,
  Shapes,
  Cpu,
  GraduationCap,
  User,
  Database,
  Globe,
  BarChart3,
  PieChartIcon,
  ClipboardList,
  Hash,
  Repeat,
  TrendingDown,
  TrendingUp,
  LineChartIcon,
  BarChartIcon,
  BarChart2,
  Search,
  Rocket,
} from 'lucide-react'
import {
  Bar,
  BarChart,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
  PieChart,
  Pie,
  Cell,
  LabelList,
  CartesianGrid,
} from 'recharts'

const bleuMeteorData = [
  { set: 'Training', BLEU: 0.018, METEOR: 0.074 },
  { set: 'Validation', BLEU: 0.022, METEOR: 0.079 },
  { set: 'Test', BLEU: 0.022, METEOR: 0.08 },
]

const coverageData = [
  { name: 'Content Covered', value: 54.1 },
  { name: 'Remaining', value: 45.9 },
]

const bertScoreData = [
  { metric: 'Precision', value: 0.7757 },
  { metric: 'Recall', value: 0.7915 },
  { metric: 'F1', value: 0.7819 },
]

const trainingLossData = [
  { round: 1, loss: 6.998700407077781, epochs: 3, model: 'v3', dataSize: '10k' },
  { round: 2, loss: 2.253774700058099, epochs: 3, model: 'v3', dataSize: '10k' },
  { round: 3, loss: 1.0143020765449546, epochs: 5, model: 'v3', dataSize: '10k' },
  { round: 4, loss: 2.5004007789565295, epochs: 100, model: 'v4', dataSize: '20k' },
]

const challenges = [
  { icon: '📰', text: 'Overwhelming volume of articles' },
  { icon: '⏳', text: 'Time-consuming to read through' },
  { icon: '🔍', text: 'Difficulty in finding key information' },
  { icon: '📚', text: 'Need for concise summaries' },
]

const projectSteps = [
  {
    icon: Search,
    title: 'Web Crawler',
    description: 'Initially developed to fetch articles from various Bengali newspaper portals.',
  },
  {
    icon: Database,
    title: 'Data Collection',
    description: 'Gathered articles and summaries from multiple sources.',
  },
  {
    icon: Brain,
    title: 'Model Training',
    description: 'Utilized a pre-trained model (google/mt5-small) with a Seq2Seq architecture.',
  },
  {
    icon: Rocket,
    title: 'Model Deploy',
    description: 'Deployed in Hugging Face and used HF Inference API to connect with the web.',
  },
  {
    icon: Globe,
    title: 'Web Interface',
    description:
      'Built using Next.js 15 and React 19 for a responsive and user-friendly experience.',
  },
]

const techStack = [
  {
    category: 'Model Technologies',
    items: [
      {
        name: 'Python',
        badge:
          'https://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
      },
      {
        name: 'PyTorch',
        badge:
          'https://img.shields.io/badge/-PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white',
      },
      {
        name: 'Transformers',
        badge:
          'https://img.shields.io/badge/-HuggingFace-FDEE21?style=for-the-badge&logo=HuggingFace&logoColor=black',
      },
      {
        name: 'SacreBLEU',
        badge: 'https://img.shields.io/badge/-SacreBLEU-FFA500?style=for-the-badge',
      },
      {
        name: 'BERTScore',
        badge: 'https://img.shields.io/badge/-BERTScore-FF5733?style=for-the-badge',
      },
      {
        name: 'Spacy',
        badge:
          'https://img.shields.io/badge/-Spacy-09A3D5?style=for-the-badge&logo=spacy&logoColor=white',
      },
      {
        name: 'NLTK',
        badge:
          'https://img.shields.io/badge/-NLTK-3C873A?style=for-the-badge&logo=nltk&logoColor=white',
      },
      {
        name: 'Syllapy',
        badge: 'https://img.shields.io/badge/-Syllapy-4A90E2?style=for-the-badge',
      },
      {
        name: 'Sentence Transformers',
        badge: 'https://img.shields.io/badge/-SentenceTransformers-008080?style=for-the-badge',
      },
      {
        name: 'Matplotlib',
        badge:
          'https://img.shields.io/badge/-Matplotlib-007ACC?style=for-the-badge&logo=matplotlib&logoColor=white',
      },
      {
        name: 'Seq2Seq Trainer',
        badge:
          'https://img.shields.io/badge/-Seq2SeqTrainer-FF9900?style=for-the-badge&logo=huggingface&logoColor=white',
      },
    ],
  },
  {
    category: 'Website Technologies',
    items: [
      {
        name: 'Next.js',
        badge:
          'https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white',
      },
      {
        name: 'React',
        badge:
          'https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black',
      },
      {
        name: 'Tailwind CSS',
        badge:
          'https://img.shields.io/badge/-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white',
      },
      {
        name: 'TypeScript',
        badge:
          'https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white',
      },
      {
        name: 'ESLint',
        badge:
          'https://img.shields.io/badge/-ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white',
      },
      {
        name: 'shadcn/ui',
        badge:
          'https://img.shields.io/badge/-shadcn/ui-000000?style=for-the-badge&logo=vercel&logoColor=white',
      },
      {
        name: 'Recharts',
        badge:
          'https://img.shields.io/badge/-Recharts-FF4500?style=for-the-badge&logo=data:image/svg+xml;base64,...', // Add logo or use blank
      },
      {
        name: 'Zod',
        badge:
          'https://img.shields.io/badge/-Zod-7A49B3?style=for-the-badge&logo=javascript&logoColor=white',
      },
      {
        name: 'Framer Motion',
        badge:
          'https://img.shields.io/badge/-FramerMotion-0055FF?style=for-the-badge&logo=framer&logoColor=white',
      },
      {
        name: 'Lucide',
        badge:
          'https://img.shields.io/badge/-Lucide-F28D00?style=for-the-badge&logo=lucide&logoColor=white',
      },
    ],
  },
]

const students = [
  { name: 'Md Tashfiqul Islam', id: '161 1593 042' },
  { name: 'Amir Hamja Marjan', id: '202 1171 642' },
  { name: 'Tashin Mahmud Khan', id: '201 1819 042' },
  { name: 'Md Simul Hossain', id: '171 1949 642' },
]

export default function AcademicPosterDashboard() {
  return (
    <div className='relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 p-8 print:p-0'>
      <div className='absolute inset-0 bg-grid-black/[0.02] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]' />
      <div className='relative w-full'>
        {/* Header Section */}
        <header className='relative mb-8 rounded-2xl overflow-hidden shadow-md print:shadow-none'>
          {/* AI Background Image */}
          <div className='absolute inset-0 w-full h-full'>
            <Image
              src='/ai-bg.jpg'
              alt=''
              layout='fill'
              priority
              className='object-cover opacity-[0.15] print:opacity-[0.05]'
            />
          </div>

          {/* Content */}
          <div className='relative z-10 p-8'>
            {/* Project Tag */}
            <div className='absolute right-4 top-4 rounded-full bg-blue-600 px-4 py-1.5 text-sm font-medium text-white shadow-sm'>
              CSE499B Senior Design Project II
            </div>

            <div className='flex flex-col items-center justify-between md:flex-row'>
              <div className='mb-6 md:mb-0 md:mr-8'>
                <Image
                  src='/images/logos/nsu-logo.png'
                  alt='NSU Logo'
                  width={140}
                  height={140}
                  className='rounded-xl'
                  priority
                />
              </div>
              <div className='flex-grow text-center md:text-left'>
                <h1 className='mb-2 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent'>
                  Bengali Text Summarization System
                </h1>
                <p className='text-xl font-semibold text-blue-700'>
                  Department of Computer Science & Engineering
                </p>
                <p className='text-lg text-blue-600'>North South University</p>
              </div>
            </div>

            <div className='mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'>
              {students.map((student, index) => (
                <div
                  key={index}
                  className='flex items-center gap-3 rounded-lg bg-white/90 px-4 py-3'
                >
                  <User className='h-5 w-5 text-blue-600' />
                  <div>
                    <p className='text-sm font-bold text-blue-800'>{student.name}</p>
                    <p className='text-xs text-blue-600'>{student.id}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className='mt-6 flex items-center justify-center'>
              <GraduationCap className='mr-2 h-6 w-6 text-blue-700' />
              <p className='text-lg font-semibold text-blue-700'>
                Supervisor: Dr. Nafisa Noor [NaNr], Assistant Professor
              </p>
            </div>
          </div>
        </header>

        <div className='flex gap-6'>
          {/* Left Column (20%) */}
          <div className='w-[20%] space-y-6'>
            {/* Table of Contents */}
            <Card className='overflow-hidden bg-white/50 backdrop-blur-sm'>
              <CardHeader className='border-b bg-blue-50/50'>
                <CardTitle className='flex items-center text-blue-800'>
                  <ScrollText className='mr-2 h-5 w-5 text-blue-600' />
                  Table of Contents
                </CardTitle>
              </CardHeader>
              <CardContent className='p-0'>
                <nav className='divide-y divide-blue-100'>
                  {[
                    { title: 'Problem Statement', icon: Brain, number: '01' },
                    { title: 'Project Overview', icon: LayoutDashboard, number: '02' },
                    { title: 'Key Features', icon: Shapes, number: '03' },
                    {
                      title: 'Model Performance',
                      icon: LineChart,
                      number: '04',
                      subitems: [
                        { title: 'BLEU & METEOR Scores', icon: BarChart3, number: '4.1' },
                        { title: 'Content Coverage', icon: PieChartIcon, number: '4.2' },
                        { title: 'BERT Score', icon: BarChart3, number: '4.3' },
                        { title: 'Training Details', icon: Database, number: '4.4' },
                        { title: 'Training Loss', icon: LineChart, number: '4.5' },
                      ],
                    },
                    { title: 'Tech Stack', icon: Code2, number: '05' },
                    { title: 'System Architecture', icon: Server, number: '06' },
                    { title: 'Website UI', icon: Globe, number: '07' },
                  ].map((item, index) => (
                    <div key={index} className='p-2'>
                      <div className='flex items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-blue-50'>
                        <span className='flex items-center gap-2'>
                          <item.icon className='h-4 w-4 text-blue-600' />
                          <span className='font-medium text-blue-800'>{item.title}</span>
                        </span>
                        <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
                          {item.number}
                        </Badge>
                      </div>
                      {item.subitems && (
                        <div className='ml-9 mt-1 space-y-1'>
                          {item.subitems.map((subitem, subIndex) => (
                            <div
                              key={subIndex}
                              className='flex items-center justify-between text-sm text-blue-600 hover:text-blue-800'
                            >
                              <span className='flex items-center gap-2'>
                                <subitem.icon className='h-3 w-3' />
                                {subitem.title}
                              </span>
                              <Badge
                                variant='secondary'
                                className='bg-blue-50 text-blue-600 text-xs'
                                style={{
                                  marginLeft: 'auto', // Pushes the sub number to align with the parent number
                                  marginRight: '0.5rem', // Fine-tune spacing if needed
                                }}
                              >
                                {subitem.number}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </CardContent>
            </Card>

            {/* Problem Statement */}
            <Card className='overflow-hidden bg-white/50 backdrop-blur-sm'>
              <CardHeader className='border-b bg-blue-50/50'>
                <div className='flex items-center justify-between'>
                  <CardTitle className='flex items-center text-blue-800'>
                    <Brain className='mr-2 h-5 w-5 text-blue-600' />
                    Problem Statement
                  </CardTitle>
                  <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
                    01
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className='p-4'>
                <p className='mb-4 text-sm leading-relaxed text-blue-800'>
                  The proliferation of Bangla news portals presents a challenge in navigating so
                  many articles within a limited time, compounded by the language's inherent
                  complexity.
                </p>
                <div className='grid grid-cols-2 gap-3'>
                  {challenges.map((item, index) => (
                    <div
                      key={index}
                      className='flex flex-col items-center justify-center text-center bg-blue-50 p-3 rounded-lg space-y-2'
                    >
                      <span className='text-2xl'>{item.icon}</span>
                      <p className='text-xs text-blue-700 leading-tight'>{item.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Overview */}
            <Card className='overflow-hidden bg-white/50 backdrop-blur-sm'>
              <CardHeader className='border-b bg-blue-50/50'>
                <div className='flex items-center justify-between'>
                  <CardTitle className='flex items-center text-blue-800'>
                    <LayoutDashboard className='mr-2 h-5 w-5 text-blue-600' />
                    Project Overview
                  </CardTitle>
                  <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
                    02
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className='p-4'>
                <p className='mb-4 text-sm leading-relaxed text-blue-700'>
                  The Bengali Text Summarizer is an advanced web application developed as part of
                  the CSE499B Senior Design Project II. It leverages cutting-edge NLP techniques to
                  generate concise summaries from Bengali news articles, addressing the challenge of
                  information overload in digital media consumption.
                </p>
                <div className='space-y-3'>
                  {projectSteps.map((step, index) => (
                    <div
                      key={index}
                      className='flex items-center space-x-4 bg-blue-50 p-3 rounded-lg'
                    >
                      <div className='flex-shrink-0'>
                        <step.icon className='h-6 w-6 text-blue-600' />
                      </div>
                      <div className='flex-grow'>
                        <h3 className='text-sm font-semibold text-blue-800'>{step.title}</h3>
                        <p className='text-xs text-blue-700'>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card className='overflow-hidden bg-white/50 backdrop-blur-sm'>
              <CardHeader className='border-b bg-blue-50/50'>
                <div className='flex items-center justify-between'>
                  <CardTitle className='flex items-center text-blue-800'>
                    <Shapes className='mr-2 h-5 w-5 text-blue-600' />
                    Key Features
                  </CardTitle>
                  <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
                    03
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className='p-4'>
                <div className='grid gap-3'>
                  {[
                    {
                      icon: Text,
                      color: 'text-yellow-500',
                      text: 'Input Bengali news articles',
                    },
                    {
                      icon: NotebookPen,
                      color: 'text-green-500',
                      text: 'Generate concise summaries',
                    },
                    {
                      icon: MonitorSmartphone,
                      color: 'text-red-500',
                      text: 'Responsive design for various devices',
                    },
                    { icon: SunMoon, color: 'text-purple-500', text: 'Dark mode support' },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className='flex items-center gap-3 rounded-lg bg-blue-50/50 p-3'
                    >
                      <feature.icon className={`h-5 w-5 ${feature.color}`} />
                      <span className='text-sm text-blue-700'>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column (50%) - Model Performance */}
          <div className='w-[50%] space-y-6'>
            {/* BLEU & METEOR Scores */}
            <Card className='col-span-12 row-span-2 shadow-sm overflow-hidden bg-white/50 backdrop-blur-sm'>
              <CardHeader className='border-b bg-blue-50/50'>
                <div className='flex items-center justify-between'>
                  <CardTitle className='text-2xl font-semibold text-blue-800 flex items-center'>
                    <BarChartIcon className='w-6 h-6 mr-2 text-blue-600' />
                    BLEU & METEOR Scores Across Datasets
                  </CardTitle>
                  <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
                    4.1
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width='100%' height={400}>
                  <BarChart
                    data={bleuMeteorData}
                    margin={{ top: 40, right: 30, left: 20, bottom: 20 }}
                  >
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
                    <Legend
                      verticalAlign='bottom'
                      height={10}
                      wrapperStyle={{ paddingTop: '10px' }}
                    />
                    <Bar dataKey='BLEU' fill='#3b82f6' radius={[4, 4, 0, 0]} name='BLEU Score'>
                      <LabelList dataKey='BLEU' position='top' fill='currentColor' fontSize={16} />
                    </Bar>
                    <Bar dataKey='METEOR' fill='#10b981' radius={[4, 4, 0, 0]} name='METEOR Score'>
                      <LabelList
                        dataKey='METEOR'
                        position='top'
                        fill='currentColor'
                        fontSize={16}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Content Coverage */}
            <Card className='col-span-6 row-span-2 shadow-sm overflow-hidden bg-white/50 backdrop-blur-sm'>
              <CardHeader className='border-b bg-blue-50/50'>
                <div className='flex items-center justify-between'>
                  <CardTitle className='text-2xl font-semibold text-blue-800 flex items-center'>
                    <PieChartIcon className='w-6 h-6 mr-2 text-blue-600' />
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
            <Card className='col-span-6 row-span-2 shadow-sm overflow-hidden bg-white/50 backdrop-blur-sm'>
              <CardHeader className='border-b bg-blue-50/50'>
                <div className='flex items-center justify-between'>
                  <CardTitle className='text-2xl font-semibold text-blue-800 flex items-center'>
                    <BarChart2 className='w-6 h-6 mr-2 text-blue-600' />
                    BERTScore
                  </CardTitle>
                  <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
                    4.3
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width='100%' height={340}>
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

            {/* Training Loss Section - Split into 40-60 Layout */}
            <div className='col-span-12 grid grid-cols-10 gap-6'>
              {/* Training Details Card - 40% */}
              <Card className='col-span-4 shadow-sm overflow-hidden bg-white/50 backdrop-blur-sm'>
                <CardHeader className='border-b bg-blue-50/50'>
                  <div className='flex items-center justify-between'>
                    <CardTitle className='text-2xl font-semibold text-blue-800 flex items-center'>
                      <ClipboardList className='w-6 h-6 mr-2 text-blue-600' />
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
                          index < 3
                            ? 'bg-green-50 dark:bg-green-900/20'
                            : 'bg-red-50 dark:bg-red-900/20'
                        }`}
                      >
                        <h3 className='text-lg font-semibold mb-2 flex items-center gap-2'>
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

              {/* Training Loss Graph Card - 60% */}
              <Card className='col-span-6 shadow-sm overflow-hidden bg-white/50 backdrop-blur-sm'>
                <CardHeader className='border-b bg-blue-50/50'>
                  <div className='flex items-center justify-between'>
                    <CardTitle className='text-2xl font-semibold text-blue-800 flex items-center'>
                      <LineChartIcon className='w-6 h-6 mr-2 text-blue-600' />
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

          {/* Right Column (30%) */}
          <div className='w-[30%] space-y-6'>
            {/* Tech Stack */}
            <Card className='overflow-hidden bg-white/50 backdrop-blur-sm'>
              <CardHeader className='border-b bg-blue-50/50'>
                <div className='flex items-center justify-between'>
                  <CardTitle className='flex items-center text-blue-800'>
                    <Code2 className='mr-2 h-5 w-5 text-blue-600' />
                    Tech Stack
                  </CardTitle>
                  <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
                    05
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className='p-6'>
                <div className='space-y-6'>
                  {techStack.map((category, index) => (
                    <div key={index}>
                      <h3 className='text-xl font-semibold text-blue-800 mb-4'>
                        {category.category}
                      </h3>
                      <div className='flex flex-wrap gap-4'>
                        {category.items.map((tech, techIndex) => (
                          <img key={techIndex} src={tech.badge} alt={tech.name} className='h-8' />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Architecture */}
            <Card className='overflow-hidden bg-white/50 backdrop-blur-sm'>
              <CardHeader className='border-b bg-blue-50/50'>
                <div className='flex items-center justify-between'>
                  <CardTitle className='flex items-center text-blue-800'>
                    <Server className='mr-2 h-5 w-5 text-blue-600' />
                    System Architecture
                  </CardTitle>
                  <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
                    06
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className='p-4'>
                <div className='overflow-hidden rounded-lg bg-white/50 p-4 shadow-sm'>
                  <Image
                    src='/sys-arch.png'
                    alt='System Architecture Diagram'
                    width={400}
                    height={300}
                    layout='responsive'
                    className='rounded-lg'
                  />
                </div>
              </CardContent>
            </Card>

            <Card className='overflow-hidden bg-gradient-to-br from-white/50 to-blue-50/50 backdrop-blur-sm'>
              <CardHeader className='border-b bg-blue-50/50'>
                <div className='flex items-center justify-between'>
                  <CardTitle className='flex items-center text-blue-800'>
                    <Globe className='mr-2 h-5 w-5 text-blue-600' />
                    Website UI
                  </CardTitle>
                  <Badge variant='secondary' className='bg-blue-100 text-blue-700'>
                    07
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className='p-6'>
                <div className='flex flex-col md:flex-row gap-6'>
                  <div className='flex-1 space-y-2'>
                    <div className='overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg'>
                      <div className='relative aspect-[3/4] w-full'>
                        <Image
                          src='/home-white-4k.png'
                          alt='Website Light Mode'
                          layout='fill'
                          className='object-cover'
                        />
                      </div>
                    </div>
                    <p className='text-center text-sm font-medium text-blue-700'>Light Mode</p>
                  </div>
                  <div className='flex-1 space-y-2'>
                    <div className='overflow-hidden rounded-lg bg-gray-900 shadow-md transition-all hover:shadow-lg'>
                      <div className='relative aspect-[3/4] w-full'>
                        <Image
                          src='/home-dark-4k.png'
                          alt='Website Dark Mode'
                          layout='fill'
                          className='object-cover'
                        />
                      </div>
                    </div>
                    <p className='text-center text-sm font-medium text-blue-700'>Dark Mode</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className='mt-8 text-center text-sm text-blue-600'>
          <p>
            © 2024 Bengali Text Summarization Project • Department of Computer Science &
            Engineering, North South University
          </p>
        </footer>
      </div>
    </div>
  )
}
