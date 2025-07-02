import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Award, Briefcase, Calendar, GraduationCap, MapPin, Star, Trophy, MessageSquare, ThumbsUp } from 'lucide-react'
import Link from 'next/link'

// Mock data - in production this would come from Supabase
const mockLawyer = {
  id: '1',
  username: 'john-smith',
  name: 'John Smith',
  fullName: 'John Smith, Esq.',
  avatar: null,
  initials: 'JS',
  specialty: 'Tenant Rights',
  experience: '15 years',
  location: 'San Francisco, CA',
  verified: true,
  rating: 4.8,
  totalAnswers: 342,
  acceptedAnswers: 187,
  responseTime: '< 2 hours',
  joinedDate: '2023-06-15',
  bio: 'I specialize in tenant rights and landlord-tenant disputes in California. With over 15 years of experience, including 5 years as a legal aid attorney, I\'ve helped hundreds of tenants understand their rights and navigate complex housing laws. I believe everyone deserves quality legal guidance, regardless of their ability to pay.',
  education: [
    { school: 'UC Berkeley School of Law', degree: 'JD', year: '2008' },
    { school: 'Stanford University', degree: 'BA Political Science', year: '2005' },
  ],
  barAdmissions: [
    { state: 'California', year: '2009' },
    { state: 'Nevada', year: '2015' },
  ],
  specialties: ['Tenant Rights', 'Eviction Defense', 'Housing Discrimination', 'Rent Control'],
  badges: [
    { name: 'Top Contributor', description: 'Top 10% of contributors', icon: Trophy },
    { name: 'Quick Responder', description: 'Average response under 2 hours', icon: MessageSquare },
    { name: 'Cited Expert', description: '50+ answers cited legal sources', icon: Award },
  ],
  tier: 'Gold',
  level: 24,
  xp: 18500,
  nextLevelXp: 25000,
}

const recentAnswers = [
  {
    id: '1',
    questionTitle: 'Can my landlord evict me without proper notice?',
    questionSlug: 'can-landlord-evict-without-notice',
    excerpt: 'In California, landlords must provide written notice before eviction. For tenants over one year...',
    upvotes: 24,
    date: '2025-01-15',
    accepted: true,
  },
  {
    id: '2',
    questionTitle: 'Is my security deposit being withheld illegally?',
    questionSlug: 'security-deposit-withheld-illegally',
    excerpt: 'California law requires landlords to return deposits within 21 days with an itemized list...',
    upvotes: 18,
    date: '2025-01-14',
    accepted: true,
  },
]

export async function generateMetadata({ params }: { params: { username: string } }) {
  return {
    title: `${mockLawyer.fullName} - ${mockLawyer.specialty} Lawyer | VERDICT`,
    description: `${mockLawyer.name} is a verified ${mockLawyer.specialty} lawyer with ${mockLawyer.experience} experience. View profile and legal answers.`,
  }
}

export default function LawyerProfilePage({ params }: { params: { username: string } }) {
  const xpProgress = ((mockLawyer.xp - 15000) / (mockLawyer.nextLevelXp - 15000)) * 100

  return (
    <>
      {/* Structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": mockLawyer.fullName,
          "jobTitle": `${mockLawyer.specialty} Lawyer`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": mockLawyer.location,
          },
          "alumniOf": mockLawyer.education.map(edu => ({
            "@type": "EducationalOrganization",
            "name": edu.school,
          })),
        })}
      </script>

      <div className="container py-8 max-w-5xl">
        {/* Profile Header */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={mockLawyer.avatar || undefined} />
                <AvatarFallback className="text-2xl">{mockLawyer.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-bold flex items-center gap-2">
                      {mockLawyer.fullName}
                      {mockLawyer.verified && (
                        <Badge variant="secondary">
                          <Award className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </h1>
                    <p className="text-xl text-muted-foreground mt-1">
                      {mockLawyer.specialty} Attorney
                    </p>
                  </div>
                  <Badge variant={mockLawyer.tier === 'Gold' ? 'default' : 'outline'} className="text-lg px-4 py-2">
                    {mockLawyer.tier}
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {mockLawyer.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    {mockLawyer.experience}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Joined {new Date(mockLawyer.joinedDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="pt-6">
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold flex items-center justify-center gap-1">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  {mockLawyer.rating}
                </div>
                <p className="text-sm text-muted-foreground">Rating</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{mockLawyer.totalAnswers}</div>
                <p className="text-sm text-muted-foreground">Answers</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{mockLawyer.acceptedAnswers}</div>
                <p className="text-sm text-muted-foreground">Accepted</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{mockLawyer.responseTime}</div>
                <p className="text-sm text-muted-foreground">Response</p>
              </div>
            </div>

            {/* Level Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Level {mockLawyer.level} Partner</span>
                <span className="text-sm text-muted-foreground">
                  {mockLawyer.xp.toLocaleString()} / {mockLawyer.nextLevelXp.toLocaleString()} XP
                </span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${xpProgress}%` }}
                />
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {mockLawyer.badges.map((badge) => (
                <div key={badge.name} className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg">
                  <badge.icon className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium text-sm">{badge.name}</p>
                    <p className="text-xs text-muted-foreground">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Button className="w-full sm:w-auto" asChild>
                <Link href={`/l/ask?lawyer=${mockLawyer.username}`}>
                  Ask {mockLawyer.name.split(' ')[0]} a Question
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Content */}
        <Tabs defaultValue="about" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="answers">Recent Answers</TabsTrigger>
            <TabsTrigger value="expertise">Expertise</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Biography</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{mockLawyer.bio}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockLawyer.education.map((edu) => (
                    <div key={edu.school} className="flex items-start gap-3">
                      <GraduationCap className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-medium">{edu.school}</p>
                        <p className="text-sm text-muted-foreground">
                          {edu.degree} • {edu.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bar Admissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {mockLawyer.barAdmissions.map((bar) => (
                    <div key={bar.state} className="flex items-center justify-between">
                      <span className="font-medium">{bar.state}</span>
                      <span className="text-sm text-muted-foreground">Since {bar.year}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="answers" className="space-y-4">
            {recentAnswers.map((answer) => (
              <Card key={answer.id}>
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Link 
                      href={`/l/q/${answer.questionSlug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {answer.questionTitle}
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    {answer.date} • {answer.upvotes} upvotes
                    {answer.accepted && (
                      <Badge variant="secondary" className="ml-2">
                        Accepted Answer
                      </Badge>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{answer.excerpt}</p>
                </CardContent>
              </Card>
            ))}
            <div className="text-center">
              <Button variant="outline" asChild>
                <Link href={`/i/l/${mockLawyer.username}/answers`}>
                  View All {mockLawyer.totalAnswers} Answers
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="expertise" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Areas of Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {mockLawyer.specialties.map((specialty) => (
                    <Badge key={specialty} variant="secondary" className="text-sm">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional Focus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-1">Primary Practice Area</h4>
                  <p className="text-sm text-muted-foreground">
                    {mockLawyer.specialty} with focus on California state law
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Types of Cases</h4>
                  <p className="text-sm text-muted-foreground">
                    Eviction defense, security deposit disputes, habitability issues,
                    rent control violations, and housing discrimination
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Client Types</h4>
                  <p className="text-sm text-muted-foreground">
                    Individual tenants, tenant organizations, and housing nonprofits
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}