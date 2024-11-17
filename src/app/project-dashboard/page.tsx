'use client'

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  LineChart as RechartsLineChart,
  Radar,
  RadarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  AlertCircle,
  BarChart3,
  Book,
  Brain,
  Clock,
  Database,
  FileText,
  Globe,
  LayoutDashboard,
  LineChart as LucideLineChart,
  Newspaper,
  PieChart,
  Sparkles,
  TrendingUp,
} from 'lucide-react'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

// Type definitions for better code organization and TypeScript support
interface MetricDataPoint {
  name: string
  value: number
}

interface BleuMeteorDataPoint {
  name: string
  bleu: number
  meteor: number
}

interface TrendDataPoint {
  epoch: number
  [key: string]: number
}

interface Challenge {
  icon: typeof BarChart3
  text: string
}

interface Component {
  icon: typeof Globe
  title: string
  description: string
}

// Metrics data with proper typing
const bleuMeteorData: BleuMeteorDataPoint[] = [
  { name: 'Training', bleu: 0.01823, meteor: 0.07397 },
  { name: 'Validation', bleu: 0.02218, meteor: 0.07944 },
  { name: 'Test', bleu: 0.02203, meteor: 0.07978 },
]

const bleuTrendData: TrendDataPoint[] = [
  { epoch: 1, bleu: 0.015 },
  { epoch: 2, bleu: 0.018 },
  { epoch: 3, bleu: 0.02 },
  { epoch: 4, bleu: 0.021 },
  { epoch: 5, bleu: 0.022 },
]

const meteorTrendData: TrendDataPoint[] = [
  { epoch: 1, meteor: 0.065 },
  { epoch: 2, meteor: 0.07 },
  { epoch: 3, meteor: 0.074 },
  { epoch: 4, meteor: 0.077 },
  { epoch: 5, meteor: 0.079 },
]

const semanticQualityData: MetricDataPoint[] = [
  { name: 'BERT Precision', value: 0.7757 },
  { name: 'BERT Recall', value: 0.7915 },
  { name: 'BERT F1', value: 0.7819 },
]

const contentPreservationData: MetricDataPoint[] = [
  { name: 'Content Coverage (Transformers)', value: 0.5409 },
  { name: 'Content Coverage (spaCy)', value: 0.3889 },
]

const concisenessNoveltyData: MetricDataPoint[] = [
  { name: 'Compression Ratio', value: 1.0 },
  { name: 'Novelty Score', value: 0.4375 },
]

const readabilityData: MetricDataPoint[] = [{ name: 'Readability Index', value: 73.515 }]

const challenges: Challenge[] = [
  { icon: BarChart3, text: 'Overwhelming volume of Bengali news content online' },
  { icon: Clock, text: 'Limited time for comprehensive reading' },
  { icon: FileText, text: 'Inherent complexity of the Bengali language' },
  { icon: Brain, text: 'Difficulty in quickly grasping essential information' },
]

const components: Component[] = [
  {
    icon: Globe,
    title: 'Web Crawler',
    description: 'Fetches articles from various Bengali newspaper portals',
  },
  {
    icon: Database,
    title: 'Data Collection',
    description: 'Gathers articles and summaries from multiple sources',
  },
  {
    icon: Sparkles,
    title: 'Model Training',
    description: 'Utilizes pre-trained google/mt5-small with Seq2Seq architecture',
  },
  {
    icon: LayoutDashboard,
    title: 'Web Interface',
    description: 'Built using Next.js 15 and React 19',
  },
]

export default function ProjectDashboard() {
  // Tab configuration for better maintainability
  const tabs = [
    { value: 'overview', icon: LayoutDashboard, label: 'Overview' },
    { value: 'primary-metrics', icon: Clock, label: 'Primary Metrics' },
    { value: 'additional-metrics', icon: BarChart3, label: 'Additional Metrics' },
    { value: 'architecture', icon: Newspaper, label: 'Architecture' },
  ] as const

  return (
    <div className='container mx-auto px-4 py-8'>
      {/* Header Section with refined typography and spacing */}
      <div className='mb-12'>
        <h1 className='text-4xl font-bold tracking-tight text-foreground/90'>
          Bengali Text Summarizer
        </h1>
        <p className='mt-2 text-xl text-muted-foreground'>
          CSE499B Senior Design Project II - B.Sc. Final Year Project
        </p>
      </div>

      <Tabs defaultValue='overview' className='space-y-8'>
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-border' />
          </div>
          <TabsList className='relative z-10 flex justify-start space-x-4 rounded-none bg-transparent p-0'>
            {tabs.map(({ value, icon: Icon, label }) => (
              <TabsTrigger
                key={value}
                value={value}
                className='rounded-full border border-border bg-background px-6 py-2.5 data-[state=active]:border-primary data-[state=active]:bg-primary/5 data-[state=active]:text-primary'
              >
                <div className='flex items-center gap-2'>
                  <Icon className='h-4 w-4' />
                  <span className='font-medium'>{label}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <TabsContent value='overview' className='space-y-8'>
          {/* Problem Statement Card */}
          <Card className='overflow-hidden border-border bg-card'>
            <CardHeader>
              <CardTitle className='flex items-center gap-2 text-2xl'>
                <AlertCircle className='h-6 w-6 text-primary' />
                Problem Statement
              </CardTitle>
            </CardHeader>
            <CardContent className='p-6'>
              <p className='mb-6 text-lg text-muted-foreground'>
                The proliferation of Bangla news portals presents a challenge in navigating so many
                articles within a limited time, compounded by the language's inherent complexity.
              </p>
              <div className='grid gap-6 md:grid-cols-2'>
                {challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md'
                  >
                    <challenge.icon className='h-8 w-8 text-primary' />
                    <span className='text-base font-medium'>{challenge.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Components Grid */}
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {components.map((component, index) => (
              <Card key={index} className='border-border bg-card transition-shadow hover:shadow-md'>
                <CardHeader>
                  <CardTitle className='flex items-center justify-between text-lg'>
                    {component.title}
                    <component.icon className='h-6 w-6 text-primary' />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-muted-foreground'>{component.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Primary Metrics Overview */}
          <Card className='border-border bg-card'>
            <CardHeader>
              <CardTitle className='text-2xl'>Performance Overview</CardTitle>
              <CardDescription>BLEU & METEOR Scores Across Datasets</CardDescription>
            </CardHeader>
            <CardContent className='p-6'>
              <ChartContainer
                config={{
                  bleu: { label: 'BLEU Score', color: 'hsl(var(--primary))' },
                  meteor: { label: 'METEOR Score', color: 'hsl(var(--secondary))' },
                }}
                className='h-[400px]'
              >
                <ResponsiveContainer width='100%' height='100%'>
                  <BarChart
                    data={bleuMeteorData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <XAxis dataKey='name' />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey='bleu' fill='var(--color-bleu)' />
                    <Bar dataKey='meteor' fill='var(--color-meteor)' />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='primary-metrics' className='space-y-8'>
          <div className='grid gap-8 md:grid-cols-2'>
            {/* BLEU Score Trend */}
            <Card className='border-border bg-card'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <TrendingUp className='h-5 w-5 text-primary' />
                  BLEU Score Trend
                </CardTitle>
                <CardDescription>Score progression over epochs</CardDescription>
              </CardHeader>
              <CardContent className='p-6'>
                <ChartContainer
                  config={{
                    bleu: { label: 'BLEU Score', color: 'hsl(var(--primary))' },
                  }}
                  className='h-[300px]'
                >
                  <ResponsiveContainer width='100%' height='100%'>
                    <AreaChart
                      data={bleuTrendData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id='bleuGradient' x1='0' y1='0' x2='0' y2='1'>
                          <stop offset='5%' stopColor='var(--color-bleu)' stopOpacity={0.8} />
                          <stop offset='95%' stopColor='var(--color-bleu)' stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey='epoch' />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type='monotone'
                        dataKey='bleu'
                        stroke='var(--color-bleu)'
                        fillOpacity={1}
                        fill='url(#bleuGradient)'
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* METEOR Score Trend */}
            <Card className='border-border bg-card'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <LucideLineChart className='h-5 w-5 text-secondary' />
                  METEOR Score Trend
                </CardTitle>
                <CardDescription>Score progression over epochs</CardDescription>
              </CardHeader>
              <CardContent className='p-6'>
                <ChartContainer
                  config={{
                    meteor: { label: 'METEOR Score', color: 'hsl(var(--secondary))' },
                  }}
                  className='h-[300px]'
                >
                  <ResponsiveContainer width='100%' height='100%'>
                    <AreaChart
                      data={meteorTrendData}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id='meteorGradient' x1='0' y1='0' x2='0' y2='1'>
                          <stop offset='5%' stopColor='var(--color-meteor)' stopOpacity={0.8} />
                          <stop offset='95%' stopColor='var(--color-meteor)' stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey='epoch' />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type='monotone'
                        dataKey='meteor'
                        stroke='var(--color-meteor)'
                        fillOpacity={1}
                        fill='url(#meteorGradient)'
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* BLEU & METEOR Comparison */}
            <Card className='md:col-span-2 border-border bg-card'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <PieChart className='h-5 w-5 text-accent' />
                  BLEU & METEOR Comparison
                </CardTitle>
                <CardDescription>Scores across different datasets</CardDescription>
              </CardHeader>
              <CardContent className='p-6'>
                <ChartContainer
                  config={{
                    bleu: { label: 'BLEU Score', color: 'hsl(var(--primary))' },
                    meteor: { label: 'METEOR Score', color: 'hsl(var(--secondary))' },
                  }}
                  className='h-[400px]'
                >
                  <ResponsiveContainer width='100%' height='100%'>
                    <RadarChart
                      data={bleuMeteorData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                      <PolarGrid stroke='var(--color-muted)' />
                      <PolarAngleAxis dataKey='name' tick={{ fill: 'var(--color-foreground)' }} />
                      <PolarRadiusAxis
                        angle={30}
                        domain={[0, 0.1]}
                        tick={{ fill: 'var(--color-foreground)' }}
                      />
                      <Radar
                        name='BLEU'
                        dataKey='bleu'
                        stroke='var(--color-bleu)'
                        fill='var(--color-bleu)'
                        fillOpacity={0.6}
                      />
                      <Radar
                        name='METEOR'
                        dataKey='meteor'
                        stroke='var(--color-meteor)'
                        fill='var(--color-meteor)'
                        fillOpacity={0.6}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </RadarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value='additional-metrics' className='space-y-8'>
          <div className='grid gap-8 md:grid-cols-2'>
            {/* Semantic Quality */}
            <Card className='border-border bg-card'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <BarChart3 className='h-5 w-5 text-primary' />
                  Semantic Quality
                </CardTitle>
              </CardHeader>
              <CardContent className='p-6'>
                <ChartContainer
                  config={{
                    value: { label: 'Score', color: 'hsl(var(--primary))' },
                  }}
                  className='h-[300px]'
                >
                  <ResponsiveContainer width='100%' height='100%'>
                    <BarChart
                      data={semanticQualityData}
                      layout='vertical'
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis type='number' domain={[0, 1]} />
                      <YAxis dataKey='name' type='category' width={150} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey='value' fill='var(--color-value)' />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Content Preservation */}
            <Card className='border-border bg-card'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <PieChart className='h-5 w-5 text-secondary' />
                  Content Preservation
                </CardTitle>
              </CardHeader>
              <CardContent className='p-6'>
                <ChartContainer
                  config={{
                    value: { label: 'Coverage', color: 'hsl(var(--secondary))' },
                  }}
                  className='h-[300px]'
                >
                  <ResponsiveContainer width='100%' height='100%'>
                    <RadarChart data={contentPreservationData}>
                      <PolarGrid stroke='var(--color-muted)' />
                      <PolarAngleAxis dataKey='name' tick={{ fill: 'var(--color-foreground)' }} />
                      <PolarRadiusAxis
                        angle={30}
                        domain={[0, 1]}
                        tick={{ fill: 'var(--color-foreground)' }}
                      />
                      <Radar
                        dataKey='value'
                        stroke='var(--color-value)'
                        fill='var(--color-value)'
                        fillOpacity={0.6}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </RadarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Conciseness and Novelty */}
            <Card className='border-border bg-card'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <FileText className='h-5 w-5 text-accent' />
                  Conciseness and Novelty
                </CardTitle>
              </CardHeader>
              <CardContent className='p-6'>
                <ChartContainer
                  config={{
                    value: { label: 'Score', color: 'hsl(var(--accent))' },
                  }}
                  className='h-[300px]'
                >
                  <ResponsiveContainer width='100%' height='100%'>
                    <BarChart
                      data={concisenessNoveltyData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis dataKey='name' />
                      <YAxis domain={[0, 1]} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey='value' fill='var(--color-value)' />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Readability */}
            <Card className='border-border bg-card'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Book className='h-5 w-5 text-muted-foreground' />
                  Readability
                </CardTitle>
              </CardHeader>
              <CardContent className='p-6'>
                <ChartContainer
                  config={{
                    value: { label: 'Index', color: 'hsl(var(--muted-foreground))' },
                  }}
                  className='h-[300px]'
                >
                  <ResponsiveContainer width='100%' height='100%'>
                    <RechartsLineChart data={readabilityData}>
                      <XAxis dataKey='name' />
                      <YAxis domain={[0, 100]} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type='monotone'
                        dataKey='value'
                        stroke='var(--color-value)'
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 8 }}
                      />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value='architecture' className='space-y-8'>
          <Card className='border-border bg-card'>
            <CardHeader>
              <CardTitle className='text-2xl flex items-center gap-2'>
                <Newspaper className='h-6 w-6 text-primary' />
                System Architecture
              </CardTitle>
              <CardDescription>Complete system flow from frontend to backend</CardDescription>
            </CardHeader>
            <CardContent className='p-6'>
              <img
                src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bengali%20Text%20Summarization%20-%20System%20Architecture%20Diagram-aFF2NFuGdTcDdTyiFBEWpJUI7VeB90.png'
                alt='System Architecture Diagram'
                className='w-full rounded-lg border shadow-lg transition-transform duration-300 hover:scale-105'
              />
              <div className='mt-8 grid gap-8 md:grid-cols-2'>
                <div className='space-y-4'>
                  <h4 className='text-xl font-semibold flex items-center gap-2'>
                    <Globe className='h-5 w-5 text-primary' />
                    Frontend Framework
                  </h4>
                  <ul className='space-y-2 text-sm text-muted-foreground'>
                    {[
                      { icon: LayoutDashboard, text: 'Next.js 15 + React 19' },
                      { icon: Newspaper, text: 'User Interface (Website)' },
                      { icon: FileText, text: 'Article Input/Output Handling' },
                    ].map((item, index) => (
                      <li
                        key={index}
                        className='flex items-center gap-2 p-2 rounded-lg bg-gradient-to-br from-background to-muted/50 transition-colors duration-300 hover:bg-muted/20'
                      >
                        <item.icon className='h-4 w-4 text-primary' />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='space-y-4'>
                  <h4 className='text-xl font-semibold flex items-center gap-2'>
                    <Database className='h-5 w-5 text-secondary' />
                    Backend Framework
                  </h4>
                  <ul className='space-y-2 text-sm text-muted-foreground'>
                    {[
                      { icon: Sparkles, text: 'Hugging Face Inference Endpoint' },
                      { icon: FileText, text: 'Data Preprocessing Pipeline' },
                      { icon: Brain, text: 'Bengali Text Summarizer Model' },
                    ].map((item, index) => (
                      <li
                        key={index}
                        className='flex items-center gap-2 p-2 rounded-lg bg-gradient-to-br from-background to-muted/50 transition-colors duration-300 hover:bg-muted/20'
                      >
                        <item.icon className='h-4 w-4 text-secondary' />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
