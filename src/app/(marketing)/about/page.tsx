import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto max-w-[58rem] space-y-8">
        <div className="space-y-4">
          <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            About VERDICT
          </h1>
          <p className="text-xl text-muted-foreground">
            Democratizing professional knowledge through AI and expert consensus
          </p>
        </div>

        <div className="prose prose-gray max-w-none dark:prose-invert">
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            VERDICT is revolutionizing how people access professional legal advice. We believe everyone
            deserves high-quality legal insights, regardless of their ability to pay traditional lawyer fees.
            By combining cutting-edge AI technology with a network of verified legal professionals, we're
            creating a platform where expertise meets accessibility.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">How It Works</h2>
          <p className="text-muted-foreground leading-relaxed">
            Every question submitted to VERDICT goes through our sophisticated AI classification system,
            which categorizes it into one of 200+ legal specialties. This ensures your question reaches
            the lawyers best equipped to answer it. Multiple lawyers provide their opinions, which are
            then analyzed by our AI to create a consensus verdict score.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Technology</h2>
          <p className="text-muted-foreground leading-relaxed">
            Built on the latest AI models including GPT-4, our platform processes questions with 95%
            classification accuracy. We use advanced caching and optimization to keep costs low while
            maintaining high quality. Every question costs us less than $0.0003 to process, allowing
            us to offer free tiers and affordable pricing.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">The Team</h2>
          <p className="text-muted-foreground leading-relaxed">
            VERDICT was founded by a team of technologists and legal professionals who saw the gap
            between those who need legal advice and those who can afford it. Our diverse team includes
            AI researchers, software engineers, and practicing lawyers committed to making legal
            knowledge accessible to all.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Values</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Accessibility: Legal advice should be available to everyone</li>
            <li>Accuracy: AI-powered classification with human expertise</li>
            <li>Transparency: Clear verdict scores and confidence ratings</li>
            <li>Privacy: Your legal questions remain confidential</li>
            <li>Innovation: Continuously improving our AI and platform</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Future Vision</h2>
          <p className="text-muted-foreground leading-relaxed">
            While we're starting with legal questions, VERDICT's vision extends beyond law. We plan to
            expand into medical and financial verticals, creating a comprehensive platform for
            professional knowledge. Imagine getting consensus opinions from verified doctors for health
            questions or financial advisors for investment queries - all powered by the same AI-driven
            approach.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button size="lg" asChild>
            <Link href="/l/ask">Ask Your First Question</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/i/l/apply">Join as a Professional</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}