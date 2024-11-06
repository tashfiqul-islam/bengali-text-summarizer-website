'use client'

import { useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Layers, Box, FileText, LineChart, Code, Server, Cpu } from 'lucide-react'

// Define project metadata
const projectMetadata = {
  title: "Bengali Text Summarizer",
  description: "An AI-powered web application for generating concise summaries of Bengali news articles.",
  progress: 75,
  features: [
    { title: "Seq2Seq Architecture", description: "Utilizes advanced NLP techniques", icon: Layers },
    { title: "Google/mt5-small", description: "Pre-trained model for efficient learning", icon: Box },
    { title: "MT5Tokenizer", description: "Specialized for Bengali language", icon: FileText },
    { title: "ROUGE-N & BLEU", description: "Industry-standard evaluation metrics", icon: LineChart },
  ],
  techStack: {
    model: [
      { name: "Python", version: "3.9", icon: "python.svg", color: "bg-blue-500", description: "Core programming language for ML" },
      { name: "PyTorch", version: "1.10", icon: "pytorch.svg", color: "bg-orange-500", description: "Deep learning framework" },
      { name: "NumPy", version: "1.21", icon: "numpy.svg", color: "bg-blue-400", description: "Numerical computing library" },
      { name: "Pandas", version: "1.3", icon: "pandas.svg", color: "bg-purple-500", description: "Data manipulation library" },
      { name: "Hugging Face", version: "4.12", icon: "huggingface.svg", color: "bg-yellow-500", description: "NLP model hub and tools" },
    ],
    website: [
      { name: "Next.js", version: "15.0", icon: "nextjs.svg", color: "bg-black", description: "React framework for production" },
      { name: "React", version: "19.0", icon: "react.svg", color: "bg-blue-600", description: "UI library for web apps" },
      { name: "TypeScript", version: "5.0", icon: "typescript.svg", color: "bg-blue-700", description: "Typed superset of JavaScript" },
      { name: "TailwindCSS", version: "3.4", icon: "tailwind.svg", color: "bg-teal-500", description: "Utility-first CSS framework" },
      { name: "Node.js", version: "20.11", icon: "nodejs.svg", color: "bg-green-600", description: "JavaScript runtime" },
      { name: "NPM", version: "10.9", icon: "npm.svg", color: "bg-red-500", description: "Package manager for Node.js" },
      { name: "ESLint", version: "8.0", icon: "eslint.svg", color: "bg-purple-600", description: "JavaScript linter tool" },
    ]
  }
}

// TechIcon component for rendering individual technology items
interface TechIconProps {
  name: string;
  version: string;
  icon: string;
  color: string;
  description: string;
}

const TechIcon = ({ name, version, icon, color, description }: TechIconProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div 
          className={`flex items-center space-x-2 p-2 rounded-lg ${color} text-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer w-full`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img 
            src={`/images/logos/${icon}`} 
            alt={name} 
            className="w-8 h-8"
          />
          <div className="flex flex-col flex-grow">
            <span className="text-sm font-semibold">{name} <span className="font-normal">v{version}</span></span>
            <span className="text-xs mt-1">{description}</span>
          </div>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent>
        <p className="text-sm">{name} v{version}: {description}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

export default function ProjectOverview() {
  // Calculate the height based on 65% of the viewport height
  const cardHeight = useCallback(() => {
    const totalHeight = 800
    const padding = 16 // 4px * 4 for top, right, bottom, left
    return Math.floor((totalHeight - padding) * 0.65)
  }, [])

  return (
    <div className="w-full h-full p-4">
      <Card 
        className="w-full overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950 text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl"
        style={{ height: `${cardHeight()}px` }}
      >
        <CardContent className="p-4 h-full flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <h2 className="text-2xl font-bold mb-1 text-blue-400">
              {projectMetadata.title}
            </h2>
            <p className="text-gray-300 text-sm">{projectMetadata.description}</p>
          </motion.div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex-grow">
              <div className="flex justify-between mb-1">
                <span className="text-gray-300 text-xs">Project Progress</span>
                <span className="text-gray-300 text-xs font-semibold">{projectMetadata.progress}%</span>
              </div>
              <Progress 
                value={projectMetadata.progress} 
                className="h-1.5 bg-gray-800 bg-blue-500"
              />
            </div>
          </div>

          <Tabs defaultValue="features" className="flex-grow flex flex-col min-h-0">
            <TabsList className="grid w-full grid-cols-3 h-8 mb-3">
              <TabsTrigger value="features" className="flex items-center justify-center text-xs">
                <Cpu className="w-3 h-3 mr-1.5" />
                Key Features
              </TabsTrigger>
              <TabsTrigger value="modeltech" className="flex items-center justify-center text-xs">
                <Server className="w-3 h-3 mr-1.5" />
                Model Tech
              </TabsTrigger>
              <TabsTrigger value="webtech" className="flex items-center justify-center text-xs">
                <Code className="w-3 h-3 mr-1.5" />
                Web Tech
              </TabsTrigger>
            </TabsList>
            <AnimatePresence mode="wait">
              <TabsContent value="features" className="flex-grow min-h-0 data-[state=active]:flex flex-col">
                <div className="grid grid-cols-2 gap-2 h-full">
                  {projectMetadata.features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-blue-950/50 p-2 rounded-lg backdrop-blur-sm border border-blue-900/50 hover:border-blue-700/50 transition-all flex flex-col"
                    >
                      <div className="flex items-center mb-1">
                        <feature.icon className="w-4 h-4 mr-2 text-blue-400" />
                        <h3 className="text-xs font-semibold text-gray-100">{feature.title}</h3>
                      </div>
                      <p className="text-gray-300 text-[10px]">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="modeltech" className="flex-grow min-h-0 data-[state=active]:flex flex-col">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-3 overflow-y-auto pr-2 h-full"
                >
                  {projectMetadata.techStack.model.map((tech) => (
                    <TechIcon key={tech.name} {...tech} />
                  ))}
                </motion.div>
              </TabsContent>
              <TabsContent value="webtech" className="flex-grow min-h-0 data-[state=active]:flex flex-col">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-3 overflow-y-auto pr-2 h-full"
                >
                  {projectMetadata.techStack.website.map((tech) => (
                    <TechIcon key={tech.name} {...tech} />
                  ))}
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
