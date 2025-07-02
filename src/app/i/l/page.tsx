import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { Award, Briefcase, Star, MessageSquare } from 'lucide-react'

// Mock data - in production this would come from Supabase
const mockLawyers = [
  {
    id: '1',
    username: 'john-smith',
    name: 'John Smith, Esq.',
    avatar: null,
    initials: 'JS',
    specialty: 'Tenant Rights',
    experience: '15 years',
    location: 'San Francisco, CA',
    verified: true,
    rating: 4.8,
    totalAnswers: 342,
    responseTime: '< 2 hours',
    bio: 'Specialized in tenant rights and landlord-tenant disputes. Former legal aid attorney.',
    badges: ['Top Contributor', 'Quick Responder', 'Cited Expert'],
    tier: 'Gold',
  },
  {
    id: '2',
    username: 'sarah-johnson',
    name: 'Sarah Johnson, JD',
    avatar: null,
    initials: 'SJ',
    specialty: 'Family Law',
    experience: '12 years',
    location: 'Los Angeles, CA',
    verified: true,
    rating: 4.9,
    totalAnswers: 567,
    responseTime: '< 4 hours',
    bio: 'Family law specialist focusing on divorce, custody, and adoption cases.',
    badges: ['Expert Verified', 'Helpful Answers'],
    tier: 'Platinum',
  },
  {
    id: '3',
    username: 'michael-chen',
    name: 'Michael Chen, Attorney',
    avatar: null,
    initials: 'MC',
    specialty: 'Business Law',
    experience: '20 years',
    location: 'New York, NY',
    verified: true,
    rating: 4.7,
    totalAnswers: 234,
    responseTime: '< 6 hours',
    bio: 'Corporate attorney with expertise in startups, contracts, and intellectual property.',
    badges: ['Startup Expert', 'Deal Maker'],
    tier: 'Silver',
  },
]

const specialties = [
  { name: 'Family Law', count: 89 },
  { name: 'Criminal Law', count: 76 },
  { name: 'Business Law', count: 65 },
  { name: 'Real Estate', count: 54 },
  { name: 'Employment Law', count: 48 },
  { name: 'Immigration', count: 42 },
  { name: 'Personal Injury', count: 38 },
  { name: 'Bankruptcy', count: 31 },
]

export default function LawyerDirectoryPage() {
  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Find Verified Legal Professionals</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Connect with experienced lawyers specializing in your legal needs
        </p>
        <Button size="lg" asChild>
          <Link href="/i/l/apply">Join as a Lawyer</Link>
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Lawyer List */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Featured Lawyers</h2>
            <Badge variant="secondary">{mockLawyers.length} Active</Badge>
          </div>
          
          <div className="space-y-4">
            {mockLawyers.map((lawyer) => (
              <Card key={lawyer.id}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={lawyer.avatar || undefined} />
                      <AvatarFallback className="text-lg">{lawyer.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">
                            <Link 
                              href={`/i/l/${lawyer.username}`}
                              className="hover:text-primary transition-colors"
                            >
                              {lawyer.name}
                            </Link>
                            {lawyer.verified && (
                              <Badge variant="secondary" className="ml-2">
                                <Award className="h-3 w-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {lawyer.specialty} • {lawyer.experience} • {lawyer.location}
                          </CardDescription>
                        </div>
                        <Badge variant={lawyer.tier === 'Platinum' ? 'default' : 'outline'}>
                          {lawyer.tier}
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {lawyer.bio}
                      </p>
                      <div className="flex items-center gap-6 mt-3 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="font-medium">{lawyer.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4 text-muted-foreground" />
                          <span>{lawyer.totalAnswers} answers</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4 text-muted-foreground" />
                          <span>{lawyer.responseTime}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        {lawyer.badges.slice(0, 3).map((badge) => (
                          <Badge key={badge} variant="secondary" className="text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button variant="outline">Load More Lawyers</Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Filter by Specialty */}
          <Card>
            <CardHeader>
              <CardTitle>Browse by Specialty</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {specialties.map((specialty) => (
                <Link
                  key={specialty.name}
                  href={`/i/l/specialty/${specialty.name.toLowerCase().replace(' ', '-')}`}
                  className="flex items-center justify-between p-4 hover:bg-muted transition-colors"
                >
                  <span className="font-medium">{specialty.name}</span>
                  <Badge variant="secondary">{specialty.count}</Badge>
                </Link>
              ))}
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card>
            <CardHeader>
              <CardTitle>Are You a Lawyer?</CardTitle>
              <CardDescription>
                Join our network of verified legal professionals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                <li>• Build your reputation</li>
                <li>• Help people with legal questions</li>
                <li>• Earn recognition and rewards</li>
                <li>• Flexible time commitment</li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/i/l/apply">Apply Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}