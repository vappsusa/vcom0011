import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react'

// Mock data - in production this would come from Supabase
const mockQuestions = [
  {
    id: '1',
    slug: 'can-landlord-evict-without-notice',
    title: 'Can my landlord evict me without proper notice?',
    category: 'Tenant Rights',
    subcategory: 'Eviction',
    verdictScore: 8.5,
    confidence: 92,
    answerCount: 12,
    timeAgo: '2 hours ago',
    aiSummary: 'Multiple lawyers agree that landlords must provide proper notice before eviction in most jurisdictions...'
  },
  {
    id: '2',
    slug: 'divorce-asset-division-prenup',
    title: 'How is property divided in divorce with a prenuptial agreement?',
    category: 'Family Law',
    subcategory: 'Divorce',
    verdictScore: 7.8,
    confidence: 88,
    answerCount: 8,
    timeAgo: '5 hours ago',
    aiSummary: 'Prenuptial agreements generally govern asset division, but courts may review for fairness...'
  },
  {
    id: '3',
    slug: 'startup-equity-vesting-schedule',
    title: 'What is a standard vesting schedule for startup equity?',
    category: 'Business Law',
    subcategory: 'Equity',
    verdictScore: 9.2,
    confidence: 95,
    answerCount: 15,
    timeAgo: '1 day ago',
    aiSummary: 'The industry standard is a 4-year vesting schedule with a 1-year cliff...'
  },
]

const categories = [
  { name: 'Employment Law', count: 1234 },
  { name: 'Family Law', count: 987 },
  { name: 'Criminal Law', count: 654 },
  { name: 'Business Law', count: 543 },
  { name: 'Real Estate', count: 432 },
  { name: 'Immigration', count: 321 },
]

export default function LegalHubPage() {
  return (
    <div className="container py-8">
      {/* Hero Section */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Legal Questions & Expert Answers</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Browse thousands of legal questions answered by verified lawyers
        </p>
        <Button size="lg" asChild>
          <Link href="/l/ask">
            Ask Your Legal Question
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Questions</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,543</div>
            <p className="text-xs text-muted-foreground">+23% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Lawyers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">523</div>
            <p className="text-xs text-muted-foreground">Verified professionals</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2 hrs</div>
            <p className="text-xs text-muted-foreground">To first answer</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Accuracy</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.8%</div>
            <p className="text-xs text-muted-foreground">Classification accuracy</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Recent Questions */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Recent Questions</h2>
          <div className="space-y-4">
            {mockQuestions.map((question) => (
              <Card key={question.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-xl">
                        <Link 
                          href={`/l/q/${question.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {question.title}
                        </Link>
                      </CardTitle>
                      <CardDescription>
                        {question.aiSummary}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        {question.verdictScore}/10
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {question.confidence}% confidence
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <Badge variant="secondary">{question.category}</Badge>
                    <Badge variant="outline">{question.subcategory}</Badge>
                    <span className="text-sm text-muted-foreground">
                      {question.answerCount} answers
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {question.timeAgo}
                    </span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" asChild>
              <Link href="/l/questions">View All Questions</Link>
            </Button>
          </div>
        </div>

        {/* Categories Sidebar */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Popular Categories</h2>
          <Card>
            <CardContent className="p-0">
              {categories.map((category, index) => (
                <Link
                  key={category.name}
                  href={`/l/${category.name.toLowerCase().replace(' ', '-')}`}
                  className="flex items-center justify-between p-4 hover:bg-muted transition-colors"
                >
                  <span className="font-medium">{category.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {category.count.toLocaleString()}
                  </span>
                </Link>
              ))}
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Need Legal Help?</CardTitle>
              <CardDescription>
                Get personalized answers from verified lawyers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" asChild>
                <Link href="/l/ask">Ask a Question</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}