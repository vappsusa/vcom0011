import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Scale } from 'lucide-react'

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Scale className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold">VERDICT</span>
            <span className="text-sm text-muted-foreground">Legal</span>
          </Link>
          <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
            <Link
              href="/l"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Browse Questions
            </Link>
            <Link
              href="/l/categories"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Categories
            </Link>
            <Link
              href="/i/l"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Find Lawyers
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button asChild>
              <Link href="/l/ask">Ask a Question</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}