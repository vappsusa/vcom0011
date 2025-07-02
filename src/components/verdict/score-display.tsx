'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { motion } from 'framer-motion'

interface VerdictScoreDisplayProps {
  score: number
  confidence: number
  consensusStrength?: string
}

export function VerdictScoreDisplay({ score, confidence, consensusStrength = 'Moderate' }: VerdictScoreDisplayProps) {
  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600'
    if (score >= 6) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="text-center"
        >
          <div className="mb-4">
            <span className={`text-6xl font-bold ${getScoreColor(score)}`}>
              {score.toFixed(1)}
            </span>
            <span className="text-2xl text-muted-foreground">/10</span>
          </div>
          <Progress value={score * 10} className="h-3 mb-4" />
          <div className="flex justify-center gap-2">
            <Badge variant="outline">Verdict Score</Badge>
            <Badge variant="secondary">{confidence}% Confidence</Badge>
            <Badge variant="secondary">{consensusStrength} Consensus</Badge>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Based on analysis of multiple expert opinions
          </p>
        </motion.div>
      </CardContent>
    </Card>
  )
}