import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-2">Bengali Text Summarizer</h3>
        <p className="text-sm text-muted-foreground mb-4">A Machine Learning project using NLP.</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li><span className="font-medium">Model Architecture:</span> Seq2Seq</li>
          <li><span className="font-medium">Pre-trained Model:</span> Google/mt5-small</li>
          <li><span className="font-medium">Tokenizer:</span> MT5Tokenizer</li>
          <li><span className="font-medium">Training Data:</span> Custom dataset of Bengali news articles and summaries</li>
          <li><span className="font-medium">Evaluation Metrics:</span> ROUGE-N, BLEU Score</li>
        </ul>
      </CardContent>
    </Card>
  )
}
