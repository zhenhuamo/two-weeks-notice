// app/page.tsx
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowRight, FileText, Download, Copy } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Two Weeks Notice Letter Generator | Free Professional Templates 2024',
  description: 'Create professional resignation letters in minutes. Free templates for Word, Google Docs & email formats. Step-by-step guide for writing two weeks notice letters.',
  keywords: 'two weeks notice letter generator, resignation letter template free, how to write two weeks notice, professional resignation letter template, two weeks notice email format, two week notice letter copy and paste, resignation letter sample, notice period template',
  openGraph: {
    title: 'Two Weeks Notice Letter Generator | Free Professional Templates',
    description: 'Create the perfect resignation letter in minutes with our free professional templates.',
    type: 'website',
  }
}

export default function Home() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-24 lg:pt-24">
            <div className="text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
                Professional Two Two Weeks Notice<br />
                <span className="text-blue-600">Letter Generator</span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-gray-600">
                Create a polished resignation letter in minutes with our free professional templates. 
                Perfect for any job or industry.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/generator" className="flex items-center gap-2">
                    Create Your Letter <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/templates">View All Templates</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Everything You Need for a Professional Resignation
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <FileText className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Multiple Formats</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Microsoft Word templates</li>
                  <li>Google Docs formats</li>
                  <li>Email-ready versions</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <Download className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Easy to Use</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Step-by-step generator</li>
                  <li>Professional templates</li>
                  <li>Instant downloads</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <Copy className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Industry Specific</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Tailored templates</li>
                  <li>Professional formats</li>
                  <li>Best practices included</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Popular Letter Types</h2>
              <p className="mt-4 text-xl text-gray-600">Choose the perfect template for your situation</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {LETTER_TYPES.map((type) => (
                <article key={type.title} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={type.link}>Use Template</Link>
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-blue">
            <h2>How to Write a Professional Two Weeks Notice Letter</h2>
            <p>
              Writing a professional resignation letter is an important step in your career transition. 
              Our free letter generator and templates help you create the perfect two weeks notice 
              that maintains positive relationships with your employer.
            </p>
            <h3>Key Elements of a Professional Resignation Letter</h3>
            <ul>
              <li>Clear statement of resignation</li>
              <li>Last working day specification</li>
              <li>Transition plan details</li>
              <li>Professional gratitude</li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-50">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Write Your Professional Resignation Letter?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Create a polished two weeks notice letter in minutes
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/generator">
                Create Your Letter Now
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

const LETTER_TYPES = [
  {
    title: "Standard Professional",
    description: "Formal two weeks notice letter suitable for most corporate environments",
    link: "/generator?template=professional"
  },
  {
    title: "Short Notice",
    description: "Template for situations requiring immediate or urgent departure",
    link: "/generator?template=short-notice"
  },
  {
    title: "IT & Technology",
    description: "Specialized template for technology professionals",
    link: "/generator?template=tech"
  },
  {
    title: "Retail & Service",
    description: "Template designed for retail and service industry positions",
    link: "/generator?template=retail"
  },
  {
    title: "Healthcare",
    description: "Professional template for medical and healthcare professionals",
    link: "/generator?template=healthcare"
  },
  {
    title: "Grateful Exit",
    description: "Template emphasizing appreciation and positive relationships",
    link: "/generator?template=grateful"
  }
]