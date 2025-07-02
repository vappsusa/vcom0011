import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Simple, Transparent Pricing
        </h1>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Choose the plan that fits your legal needs
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
        {/* Free Plan */}
        <div className="relative rounded-lg border bg-background p-8">
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold">Free</h3>
            <p className="text-sm text-muted-foreground">
              Perfect for basic legal questions
            </p>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">$0</span>
              <span className="ml-1 text-muted-foreground">/month</span>
            </div>
            <Button variant="outline" asChild className="w-full">
              <Link href="/sign-up">Get Started</Link>
            </Button>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                3 questions per month
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                AI classification
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                Basic verdict scores
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                Community support
              </li>
            </ul>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="relative rounded-lg border-2 border-primary bg-background p-8">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
              Most Popular
            </span>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="text-sm text-muted-foreground">
              For individuals with ongoing legal needs
            </p>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">$29</span>
              <span className="ml-1 text-muted-foreground">/month</span>
            </div>
            <Button asChild className="w-full">
              <Link href="/sign-up">Get Started</Link>
            </Button>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                Unlimited questions
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                Priority AI processing
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                Detailed verdict analysis
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                Direct lawyer messaging
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                Case law citations
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                Email support
              </li>
            </ul>
          </div>
        </div>

        {/* Business Plan */}
        <div className="relative rounded-lg border bg-background p-8">
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold">Business</h3>
            <p className="text-sm text-muted-foreground">
              For teams and organizations
            </p>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">$99</span>
              <span className="ml-1 text-muted-foreground">/month</span>
            </div>
            <Button variant="outline" asChild className="w-full">
              <Link href="/contact">Contact Sales</Link>
            </Button>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                Everything in Pro
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                5 team members
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                Dedicated account manager
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                Custom AI training
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                API access
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                Priority phone support
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[58rem] text-center">
        <p className="text-sm text-muted-foreground">
          All plans include our AI-powered classification, verified lawyer network, and verdict scoring system.
          Prices are in USD. Cancel anytime.
        </p>
      </div>
    </div>
  )
}