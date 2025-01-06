// app/generator/page.tsx
import { LetterGenerator } from '@/components/letter-generator/LetterGenerator'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FileText, Mail, Download, HelpCircle } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Two Weeks Notice Letter Generator 2024 | Create Professional Resignation Letter',
  description: 'Create your customized two weeks notice letter in minutes. Professional templates, instant download in Word, PDF, or email format. Free resignation letter generator with copy and paste options.',
  keywords: 'two weeks notice generator, how to write resignation letter, two weeks notice template free, professional resignation letter creator, resignation letter sample, two week notice letter copy and paste, notice period letter generator, write resignation letter online',
  openGraph: {
    title: 'Create Your Professional Two Weeks Notice Letter',
    description: 'Generate a polished resignation letter in minutes with our free tool.',
    type: 'website',
  }
}

export default function GeneratorPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Two Weeks Notice Letter Generator
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Create a polished resignation letter in minutes. Choose from professional templates 
              and customize to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <FileText className="h-6 w-6 text-blue-600" />
              <span>Professional Templates</span>
            </div>
            <div className="flex items-center space-x-3">
              <Download className="h-6 w-6 text-blue-600" />
              <span>Multiple Formats</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-6 w-6 text-blue-600" />
              <span>Email Ready</span>
            </div>
            <div className="flex items-center space-x-3">
              <HelpCircle className="h-6 w-6 text-blue-600" />
              <span>Step-by-Step Guide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <LetterGenerator />
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 prose prose-blue">
          <h2>Tips for Writing Your Two Weeks Notice</h2>
          <p>
            A professional resignation letter helps maintain positive relationships with your employer. 
            Here are some key elements to include in your letter:
          </p>
          <ul>
            <li>Clear statement of resignation</li>
            <li>Last working day</li>
            <li>Offer to help with transition</li>
            <li>Expression of gratitude</li>
            <li>Professional closing</li>
          </ul>

          <h3>Common Scenarios</h3>
          <div className="grid md:grid-cols-2 gap-6 not-prose">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Career Advancement</h4>
              <p className="text-sm text-gray-600">
                Professional template for moving to a new opportunity
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Relocation</h4>
              <p className="text-sm text-gray-600">
                Template for leaving due to moving or relocation
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Career Change</h4>
              <p className="text-sm text-gray-600">
                Template for transitioning to a different industry
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Personal Reasons</h4>
              <p className="text-sm text-gray-600">
                Professional template for personal circumstances
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">When should I submit my two weeks notice?</h3>
              <p className="text-gray-600">
                Submit your resignation letter at least two weeks before your intended last day, 
                preferably in person or via email to your direct supervisor.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What format should I use?</h3>
              <p className="text-gray-600">
                Our generator provides multiple formats including Word, PDF, and email templates. 
                Choose the format that best suits your company&apos;s culture and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">
            Need Additional Templates?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Browse our complete collection of professional resignation letter templates
          </p>
          <Button asChild size="lg">
            <Link href="/templates">View All Templates</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}