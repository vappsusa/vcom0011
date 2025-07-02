import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Scale, Users, Brain } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Professional Legal Answers,
            <span className="text-primary"> AI-Powered Consensus</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Get expert legal opinions from verified lawyers. Our AI classifies questions,
            matches you with specialists, and builds consensus from multiple perspectives.
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild>
              <Link href="/l/ask">
                Ask a Legal Question
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/i/l/apply">
                Join as a Lawyer
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            How VERDICT Works
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            AI-powered classification meets human expertise
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-bold">AI Classification</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Every question is instantly classified by AI into 200+ legal categories
              for precise matching with specialists.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-bold">Expert Opinions</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Verified lawyers provide detailed opinions backed by case law and
              professional experience.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Scale className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-bold">Verdict Score</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              AI analyzes all opinions to generate a consensus verdict score
              with confidence ratings.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto max-w-[58rem] text-center">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col items-center space-y-2">
              <p className="text-3xl font-bold text-primary">10,000+</p>
              <p className="text-sm text-muted-foreground">Questions Answered</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Verified Lawyers</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-3xl font-bold text-primary">95%</p>
              <p className="text-sm text-muted-foreground">Accuracy Rate</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-3xl font-bold text-primary">24hr</p>
              <p className="text-sm text-muted-foreground">Avg Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Join thousands getting professional legal insights
          </p>
          <Button size="lg" className="mt-4" asChild>
            <Link href="/sign-up">
              Create Free Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}