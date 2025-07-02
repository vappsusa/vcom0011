import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your details below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {/* Placeholder for Clerk SignUp component */}
          <div className="space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              Sign up form will be integrated with Clerk authentication
            </div>
            <Button className="w-full" asChild>
              <Link href="/l">Continue to Legal Q&A</Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or
            </span>
          </div>
        </div>
        <div className="text-center text-sm">
          Already have an account?{' '}
          <Link href="/sign-in" className="underline hover:text-primary">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}