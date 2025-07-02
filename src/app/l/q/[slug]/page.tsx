import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import { Suspense } from 'react'
import { User, Calendar, Award, ThumbsUp } from 'lucide-react'
import { VerdictScoreDisplay } from '@/components/verdict/score-display'
import { LawyerOpinionCard } from '@/components/verdict/opinion-card'

// Enable PPR
export const experimental_ppr = true

// Mock data - in production this would come from Supabase
const mockQuestion = {
  id: '1',
  slug: 'can-landlord-evict-without-notice',
  title: 'Can my landlord evict me without proper notice?',
  body: 'I\'ve been renting an apartment in California for 3 years. My landlord told me verbally yesterday that I need to leave by the end of the month. I\'ve always paid rent on time and haven\'t violated any lease terms. They claim they want to renovate the unit. Do I have to leave? What are my rights?',
  category: 'Tenant Rights',
  subcategory: 'Eviction',
  keywords: ['eviction', 'tenant rights', 'California', 'notice period', 'renovation'],
  askedBy: 'Anonymous',
  askedAt: '2025-01-15T10:30:00Z',
  location: 'California',
  verdictScore: 8.5,
  confidence: 92,
  consensusStrength: 'Strong',
}

const mockOpinions = [
  {
    id: '1',
    lawyerId: 'john-smith',
    lawyerName: 'John Smith, Esq.',
    lawyerSpecialty: 'Tenant Rights',
    lawyerExperience: '15 years',
    lawyerVerified: true,
    opinion: 'In California, landlords must provide written notice before eviction. For a tenant who has lived in the unit for more than one year, the required notice period is 60 days for a no-fault eviction. Verbal notice is not legally sufficient. You have strong protections under California law.',
    citations: ['Cal. Civ. Code § 1946.1', 'Cal. Civ. Code § 827'],
    confidence: 95,
    upvotes: 24,
    postedAt: '2025-01-15T11:45:00Z',
  },
  {
    id: '2',
    lawyerId: 'sarah-johnson',
    lawyerName: 'Sarah Johnson, JD',
    lawyerSpecialty: 'Real Estate Law',
    lawyerExperience: '12 years',
    lawyerVerified: true,
    opinion: 'I agree with the previous opinion. Additionally, if you\'re in a rent-controlled area, there may be additional protections. The landlord cannot evict you for renovations without proper notice and, in some cases, relocation assistance. Document everything and request written notice.',
    citations: ['Ellis Act', 'Local rent control ordinances'],
    confidence: 90,
    upvotes: 18,
    postedAt: '2025-01-15T13:20:00Z',
  },
]

export async function generateMetadata({ params }: { params: { slug: string } }) {
  // In production, fetch from database
  return {
    title: `${mockQuestion.title} - Legal Answer | VERDICT`,
    description: `Expert legal opinions on: ${mockQuestion.title}. Get consensus from verified lawyers.`,
    keywords: mockQuestion.keywords,
  }
}

export default function QuestionPage({ params }: { params: { slug: string } }) {
  return (
    <>
      {/* Structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "QAPage",
          "name": mockQuestion.title,
          "text": mockQuestion.body,
          "answerCount": mockOpinions.length,
          "dateCreated": mockQuestion.askedAt,
          "keywords": mockQuestion.keywords.join(", "),
        })}
      </script>

      <div className="container py-8 max-w-5xl">
        {/* Question Header */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="text-2xl">{mockQuestion.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {mockQuestion.askedBy}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(mockQuestion.askedAt).toLocaleDateString()}
                  </span>
                  <Badge variant="secondary">{mockQuestion.location}</Badge>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Badge>{mockQuestion.category}</Badge>
              <Badge variant="outline">{mockQuestion.subcategory}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{mockQuestion.body}</p>
          </CardContent>
        </Card>

        {/* Main Content with Tabs */}
        <Tabs defaultValue="verdict" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="verdict">AI Verdict</TabsTrigger>
            <TabsTrigger value="opinions">Lawyer Opinions ({mockOpinions.length})</TabsTrigger>
            <TabsTrigger value="analysis">Legal Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="verdict" className="space-y-4">
            <Suspense fallback={<Skeleton className="h-[200px]" />}>
              <VerdictScoreDisplay 
                score={mockQuestion.verdictScore} 
                confidence={mockQuestion.confidence}
                consensusStrength={mockQuestion.consensusStrength}
              />
            </Suspense>
            
            <Card>
              <CardHeader>
                <CardTitle>AI Consensus Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Based on {mockOpinions.length} expert opinions, there is strong consensus that:
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-sm">
                  <li>California law requires 60-day written notice for tenants over 1 year</li>
                  <li>Verbal notice is not legally sufficient</li>
                  <li>You may have additional protections under local rent control</li>
                  <li>Document all communications and request written notice</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="opinions" className="space-y-4">
            <Suspense fallback={<OpinionsSkeleton />}>
              {mockOpinions.map((opinion) => (
                <LawyerOpinionCard key={opinion.id} opinion={opinion} />
              ))}
            </Suspense>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Legal Framework Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Relevant Statutes</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• California Civil Code § 1946.1 - Notice requirements</li>
                    <li>• California Civil Code § 827 - Month-to-month tenancies</li>
                    <li>• Local rent control ordinances (if applicable)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Precedents</h4>
                  <p className="text-sm text-muted-foreground">
                    Courts have consistently held that proper written notice is mandatory
                    for evictions, and verbal notice does not satisfy statutory requirements.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Recommended Actions</h4>
                  <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                    <li>Request written notice from your landlord</li>
                    <li>Document all interactions</li>
                    <li>Review your lease agreement</li>
                    <li>Consult with a local tenant rights attorney</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

function OpinionsSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-[200px]" />
      <Skeleton className="h-[200px]" />
    </div>
  )
}