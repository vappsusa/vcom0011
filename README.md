# VERDICT.COM - UI/UX Implementation

Multi-vertical AI-powered Q&A platform democratizing professional knowledge through AI classification, professional consensus, and community engagement.

## Overview

This repository contains the complete UI/UX implementation for VERDICT.COM, featuring:

- **Marketing Pages**: Homepage, pricing, about
- **Legal Q&A Platform**: Question browsing, verdict scores, lawyer opinions
- **Professional Profiles**: Lawyer directory and detailed profiles
- **Modern Tech Stack**: Next.js 15.3, React 19, Tailwind CSS 4.1, shadcn/ui

## Key Features

### 🤖 AI-Powered Q&A
- AI classification into 200+ legal categories
- Verdict scoring with confidence ratings
- Professional consensus building
- Real-time opinion aggregation

### 👩‍⚖️ Professional Network
- Verified lawyer profiles
- Gamification with XP and badges
- Specialty-based matching
- Professional reputation system

### 🎨 Modern UI/UX
- Fully responsive design
- shadcn/ui component library
- Framer Motion animations
- Accessible and performant

## Tech Stack

### Core
- **Next.js 15.3** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5.8** - Type safety and developer experience
- **Tailwind CSS 4.1** - Utility-first styling

### UI Components
- **shadcn/ui** - Beautiful, accessible components
- **Radix UI** - Unstyled, accessible primitives
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

### Future Integration (Placeholders)
- **Clerk** - Authentication and user management
- **Supabase** - Database and real-time features
- **Vercel AI SDK** - AI integration
- **OpenAI GPT-4** - Legal classification and analysis

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/vappsusa/vcom0011.git
cd vcom0011

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
npm run validate     # Run both type-check and lint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (marketing)/        # Marketing pages
│   │   ├── page.tsx        # Homepage
│   │   ├── pricing/        # Pricing page
│   │   └── about/          # About page
│   ├── (auth)/            # Authentication pages
│   │   ├── sign-in/       # Sign in page
│   │   └── sign-up/       # Sign up page
│   ├── l/                 # Legal vertical
│   │   ├── page.tsx       # Legal hub
│   │   └── q/[slug]/      # Question pages
│   ├── i/l/               # Individual lawyers
│   │   ├── page.tsx       # Lawyer directory
│   │   └── [username]/    # Lawyer profiles
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # shadcn/ui components
│   └── verdict/           # Custom components
└── lib/
    └── utils.ts           # Utility functions
```

## Key Pages

### Marketing
- **Homepage** (`/`) - Hero, features, stats, CTA
- **Pricing** (`/pricing`) - Three-tier pricing with features
- **About** (`/about`) - Mission, technology, team, values

### Legal Platform
- **Legal Hub** (`/l`) - Browse questions, categories, stats
- **Question Detail** (`/l/q/[slug]`) - Full Q&A with verdict scores
- **Lawyer Directory** (`/i/l`) - Browse verified lawyers
- **Lawyer Profile** (`/i/l/[username]`) - Detailed professional profiles

### Authentication
- **Sign In** (`/sign-in`) - User authentication (Clerk placeholder)
- **Sign Up** (`/sign-up`) - User registration (Clerk placeholder)

## Design System

### Colors
- **Primary**: Legal blue theme
- **Secondary**: Supporting grays
- **Accent**: Success/warning/error states

### Typography
- **Font**: Inter (Google Fonts)
- **Scale**: Tailwind's default type scale
- **Hierarchy**: Clear heading and body text distinction

### Components
All UI components follow shadcn/ui patterns:
- Consistent API design
- Full accessibility support
- Customizable with CSS variables
- TypeScript definitions included

## Mock Data

Currently uses mock data for demonstration:
- Sample legal questions with verdict scores
- Lawyer profiles with ratings and experience
- Question categories and statistics
- Professional badges and achievements

## Future Development

### Phase 1: Backend Integration
- Supabase database setup
- Clerk authentication integration
- Real data management

### Phase 2: AI Features
- OpenAI integration for classification
- Verdict score calculation
- Real-time consensus building

### Phase 3: Advanced Features
- Real-time updates
- Advanced search and filtering
- Professional verification system
- Gamification mechanics

## Contributing

This is a demo implementation. For the full production system, see the main VERDICT.COM repository.

## License

Private - VERDICT.COM

---

**VERDICT.COM** - Democratizing professional knowledge through AI and expert consensus.