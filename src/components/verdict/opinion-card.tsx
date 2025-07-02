import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ThumbsUp, Award, Calendar, FileText } from 'lucide-react'
import Link from 'next/link'

interface LawyerOpinion {
  id: string
  lawyerId: string
  lawyerName: string
  lawyerSpecialty: string
  lawyerExperience: string
  lawyerVerified: boolean
  opinion: string
  citations: string[]
  confidence: number
  upvotes: number
  postedAt: string
}

export function LawyerOpinionCard({ opinion }: { opinion: LawyerOpinion }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-lg font-semibold text-primary">
                {opinion.lawyerName.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <Link 
                href={`/i/l/${opinion.lawyerId}`}
                className="font-semibold hover:text-primary transition-colors"
              >
                {opinion.lawyerName}
              </Link>
              {opinion.lawyerVerified && (
                <Badge variant="secondary" className="ml-2">
                  <Award className="h-3 w-3 mr-1" />
                  Verified
                </Badge>
              )}
              <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                <span>{opinion.lawyerSpecialty}</span>
                <span>{opinion.lawyerExperience}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <Badge variant="outline">{opinion.confidence}% confident</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {opinion.opinion}
        </p>
        
        {opinion.citations.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2 flex items-center gap-1">
              <FileText className="h-3 w-3" />
              Legal Citations
            </h4>
            <div className="flex flex-wrap gap-2">
              {opinion.citations.map((citation) => (
                <Badge key={citation} variant="secondary" className="text-xs">
                  {citation}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(opinion.postedAt).toLocaleDateString()}
            </span>
          </div>
          <Button variant="ghost" size="sm">
            <ThumbsUp className="h-4 w-4 mr-1" />
            {opinion.upvotes}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}