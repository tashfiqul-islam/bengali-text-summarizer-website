import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ArticleSummaryProps {
  summary: string;
  handleGenerateSummary: () => void;
}

export default function ArticleSummary({ summary, handleGenerateSummary }: ArticleSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Article Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={handleGenerateSummary} variant="outline">
          Generate Summary
        </Button>
        {summary && (
          <div className="p-4 rounded-md border border-gray-200 bg-gray-50 font-bengali">
            {summary}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
