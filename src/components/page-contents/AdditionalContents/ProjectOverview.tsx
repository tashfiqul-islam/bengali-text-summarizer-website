import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, BarChart, FileText, Layers } from "lucide-react"

export default function ProjectOverview() {
  return (
    <Card className="overflow-hidden bg-white/10 dark:bg-gray-800/10 backdrop-filter backdrop-blur-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <CardHeader className="bg-gradient-to-r from-blue-500/80 to-purple-600/80 text-white">
        <CardTitle className="text-2xl font-bold">Project Overview</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <h3 className="text-2xl font-bold mb-2">Bengali Text Summarizer</h3>
        <p className="text-sm text-muted-foreground mb-6">A Machine Learning project using Natural Language Processing</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectDetail icon={<Layers className="h-5 w-5" />} title="Model Architecture" value="Seq2Seq" />
          <ProjectDetail icon={<Cpu className="h-5 w-5" />} title="Pre-trained Model" value="Google/mt5-small" />
          <ProjectDetail icon={<FileText className="h-5 w-5" />} title="Tokenizer" value="MT5Tokenizer" />
          <ProjectDetail icon={<BarChart className="h-5 w-5" />} title="Evaluation Metrics" value="ROUGE-N, BLEU Score" />
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectDetail({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) {
  return (
    <div className="flex items-start space-x-3 bg-white/5 dark:bg-gray-700/5 backdrop-filter backdrop-blur-sm p-3 rounded-lg shadow-md">
      <div className="bg-primary/20 rounded-full p-2">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-sm">{title}</h4>
        <p className="text-sm text-muted-foreground">{value}</p>
      </div>
    </div>
  )
}
