'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, CodeXml, Database, Layers, Timer, Zap, Network, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define tech stacks with categorization
const modelTechStack = [
  { name: "Python", version: "3.9", icon: "/images/logos/python.png", category: "Language" },
  { name: "PyTorch", version: "1.10", icon: "/images/logos/pytorch.png", category: "ML Framework" },
  { name: "Numpy", version: "1.21", icon: "/images/logos/numpy.png", category: "Data Processing" },
  { name: "Pandas", version: "1.3", icon: "/images/logos/pandas.png", category: "Data Processing" },
  { name: "Hugging Face", version: "4.12", icon: "/images/logos/huggingface.png", category: "ML Tools" },
]

const websiteTechStack = [
  { name: "Next.js", version: "15.0.2", icon: "/images/logos/nextjs.png", category: "Framework" },
  { name: "React", version: "19.0.0-rc", icon: "/images/logos/react.png", category: "Library" },
  { name: "Tailwind CSS", version: "3.4.1", icon: "/images/logos/tailwindcss.png", category: "Styling" },
  { name: "TypeScript", version: "5", icon: "/images/logos/typescript.png", category: "Language" },
  { name: "ESLint", version: "8", icon: "/images/logos/eslint.png", category: "Linting" },
  { name: "shadcn/ui", version: "latest", icon: "/images/logos/shadcn.png", category: "UI Components" },
]

// Card component for model architecture details with horizontal layout
const ArchitectureCard = ({ icon: Icon, title, value }: { icon: React.ElementType, title: string, value: string }) => (
  <Card className="transition-all hover:shadow-md dark:hover:shadow-primary/10">
    <CardContent className="p-4 flex items-center justify-between">
      <div className="flex flex-col">
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-xs text-muted-foreground">{value}</p>
      </div>
      <div className="bg-primary/10 p-3 rounded-full ml-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
    </CardContent>
  </Card>
)

// Tech stack item component
const TechStackItem = ({ name, version, icon, category }: { name: string, version: string, icon: string, category: string }) => {
  // Memoize the image loading function to optimize performance
  const imageLoader = useCallback(({ src }: { src: string }) => src, [])

  return (
    <Card className="group transition-all hover:shadow-md dark:hover:shadow-primary/10">
      <CardContent className="p-2 sm:p-4 flex flex-col sm:flex-col items-center justify-between h-full">
        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-1 sm:mb-3 group-hover:scale-110 transition-transform overflow-hidden bg-transparent dark:bg-white">
          <Image
            loader={imageLoader}
            src={icon}
            alt={`${name} logo`}
            width={16}
            height={16}
            className="w-4 h-4 sm:w-6 sm:h-6 object-contain transition-transform group-hover:scale-110"
            priority
          />
        </div>
        <div className="text-center space-y-0 sm:space-y-1">
          <h4 className="font-semibold text-xs sm:text-sm">{name}</h4>
          <p className="text-[10px] sm:text-xs text-muted-foreground">v{version}</p>
          <span className="inline-block text-[8px] sm:text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded-full bg-secondary text-secondary-foreground">
            {category}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ProjectOverview() {
  const [activeTab, setActiveTab] = useState("model-architecture")
  const [activeMobileSection, setActiveMobileSection] = useState("architecture")

  return (
    <div className="h-[600px] w-full bg-background text-foreground">
      <Tabs defaultValue="model-architecture" className="h-full flex flex-col" onValueChange={setActiveTab}>
        {/* Tab headers - Fixed height */}
        <TabsList className="w-full grid grid-cols-3 mb-4 flex-none">
          <TabsTrigger value="model-architecture" className="flex items-center justify-center">
            <Brain className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Model Architecture</span>
            <span className="sm:hidden">Model</span>
          </TabsTrigger>
          <TabsTrigger value="model-tech-stack" className="flex items-center justify-center">
            <Layers className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Model Tech Stack</span>
            <span className="sm:hidden">Model Tech</span>
          </TabsTrigger>
          <TabsTrigger value="website-tech-stack" className="flex items-center justify-center">
            <Globe className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Website Tech Stack</span>
            <span className="sm:hidden">Web Tech</span>
          </TabsTrigger>
        </TabsList>
          
        {/* Content area - Scrollable on mobile only */}
        <div className="flex-1 overflow-y-auto sm:overflow-visible px-4">
          <div className="h-full flex flex-col">
            {/* Model Architecture Tab Content */}
            <TabsContent 
              value="model-architecture" 
              className={`mt-0 flex-1 flex flex-col ${activeTab === "model-architecture" ? "" : "hidden"}`}
            >
              {/* Mobile pills for switching between Architecture and Initialization */}
              <div className="flex space-x-2 mb-4 sm:hidden">
                <Button
                  variant={activeMobileSection === "architecture" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveMobileSection("architecture")}
                  className="flex-1"
                >
                  Architecture
                </Button>
                <Button
                  variant={activeMobileSection === "initialization" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveMobileSection("initialization")}
                  className="flex-1"
                >
                  Initialization
                </Button>
              </div>

              {/* Architecture Cards Section */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 ${activeMobileSection === "architecture" ? "block" : "hidden sm:block"}`}>
                <ArchitectureCard icon={Network} title="Type" value="Seq2Seq" />
                <ArchitectureCard icon={Database} title="Base Model" value="google/mt5-small" />
                <ArchitectureCard icon={Zap} title="Evaluation Metrics" value="ROUGE-N & BLEU" />
                <ArchitectureCard icon={Timer} title="Training Length" value="11 Epochs" />
              </div>

              {/* Model Initialization Section */}
              <div className={`flex flex-col ${activeMobileSection === "initialization" ? "block" : "hidden sm:block"}`}>
                {/* Header */}
                <div className="flex items-center gap-2 text-sm font-medium mb-3">
                  <CodeXml className="h-5 w-5 text-primary" />
                  Model Initialization
                </div>
                
                {/* Code Card - Reduced height with scroll on mobile, fixed height on desktop */}
                <Card className="overflow-hidden mb-2">
                  <CardContent className="p-0">
                    {/* Code container with internal scroll */}
                    <div className="max-h-[360px] sm:max-h-[205px] overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-secondary/20">
                      <pre className="bg-muted font-mono leading-relaxed">
                        <code className="block whitespace-pre text-xs sm:text-sm px-4 py-3">
{`# Import required libraries
import torch
from transformers import MT5ForConditionalGeneration, MT5Tokenizer

# Initialize model and tokenizer
model_name = "google/mt5-small"
tokenizer = MT5Tokenizer.from_pretrained(model_name)
model = MT5ForConditionalGeneration.from_pretrained(model_name)

# Tokenize the datasets
train_inputs = tokenize_data(df_4_train, max_length=512, max_target_length=100)
val_inputs = tokenize_data(df_4_val, max_length=512, max_target_length=100)
test_inputs = tokenize_data(df_4_test, max_length=512, max_target_length=100)

# Set up training arguments
training_args = Seq2SeqTrainingArguments(
    output_dir="./results",
    eval_strategy="epoch",
    learning_rate=1e-5,
    per_device_train_batch_size=8,
    per_device_eval_batch_size=8,
    num_train_epochs=5,
    weight_decay=0.01,
    save_total_limit=2,
    predict_with_generate=True,
    save_safetensors=False
)`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Model Tech Stack Tab Content */}
            <TabsContent value="model-tech-stack" className={`mt-0 ${activeTab === "model-tech-stack" ? "" : "hidden"}`}>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-4">
                {modelTechStack.map((tech) => (
                  <TechStackItem key={tech.name} {...tech} />
                ))}
              </div>
            </TabsContent>

            {/* Website Tech Stack Tab Content */}
            <TabsContent value="website-tech-stack" className={`mt-0 ${activeTab === "website-tech-stack" ? "" : "hidden"}`}>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-4">
                {websiteTechStack.map((tech) => (
                  <TechStackItem key={tech.name} {...tech} />
                ))}
              </div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  )
}
