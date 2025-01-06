// app/templates/page.tsx
import { TemplateCard } from '@/components/templates/TemplateCard'
import { TemplateCategory as TemplateCategoryComponent } from '@/components/templates/TemplateCategory'
import { 
  letterTemplates, 
  templateCategories, 
  type TemplateCategory 
} from '@/lib/letter-templates'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FileText, Download, Mail } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Two Weeks Notice Templates 2024 | Professional Resignation Letter Samples',
  description: 'Download free, professional two weeks notice letter templates. Available in Word, Google Docs, PDF & email formats. Copy and paste templates for immediate use.',
  keywords: 'two weeks notice template, resignation letter template free, two week notice letter copy and paste, professional resignation letter samples, notice letter template word, two weeks notice email template, how to write two weeks notice letter, resignation letter examples',
  openGraph: {
    title: 'Free Professional Two Weeks Notice Letter Templates',
    description: 'Download ready-to-use resignation letter templates in multiple formats',
    type: 'website',
  }
}

export default function TemplatesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Two Weeks Notice Templates
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose from our collection of professionally crafted resignation letter templates. 
              Free downloads in multiple formats.
            </p>
            <Button asChild size="lg">
              <Link href="/generator">Create Your Letter Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Format Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Available Formats</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <FileText className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Word Templates</h3>
              <p className="text-gray-600">
                Download and edit in Microsoft Word. Perfect for customization and printing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <Download className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Google Docs</h3>
              <p className="text-gray-600">
                Open and edit directly in Google Docs. Easy to share and collaborate.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <Mail className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Email Format</h3>
              <p className="text-gray-600">
                Copy and paste ready templates for quick email resignation notices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Template Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {(Object.entries(templateCategories) as [TemplateCategory, string][]).map(([category, categoryName]) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold mb-8">{categoryName}</h2>
              <p className="text-lg text-gray-600 mb-8">{getCategoryDescription(category)}</p>
              <TemplateCategoryComponent
                title={categoryName}
                templates={Object.values(letterTemplates).filter(
                  template => template.category === category
                )}
              />
            </div>
          ))}
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-blue">
          <h2>How to Use Our Two Weeks Notice Templates</h2>
          <p>
            Our professional resignation letter templates make it easy to write a proper two weeks notice. 
            Each template is designed to help you maintain positive professional relationships while 
            transitioning to your next opportunity.
          </p>
          
          <h3>Key Features of Our Templates:</h3>
          <ul>
            <li>Professional formatting for all industries</li>
            <li>Easy customization options</li>
            <li>Multiple download formats (Word, PDF, Google Docs)</li>
            <li>Copy and paste ready email templates</li>
            <li>Industry-specific variations</li>
          </ul>

          <h3>Common Two Weeks Notice Scenarios:</h3>
          <ul>
            <li>Standard professional resignation</li>
            <li>Career advancement opportunities</li>
            <li>Relocation notices</li>
            <li>Industry transitions</li>
            <li>Immediate departure situations</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Write Your Resignation Letter?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose a template or use our letter generator to create your custom resignation letter
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/generator">Use Letter Generator</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#templates">Browse Templates</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

function getCategoryDescription(category: TemplateCategory): string {
  switch (category) {
    case 'professional':
      return 'Professional templates perfect for corporate environments, featuring formal language and proper business formatting.';
    case 'casual':
      return 'Maintain professionalism while expressing gratitude in a more personal tone, ideal for smaller companies or close-knit teams.';
    case 'industry-specific':
      return 'Specialized templates tailored for specific industries, including technical, healthcare, retail, and education sectors.';
    default:
      return 'Choose from our collection of professionally crafted resignation letter templates.';
  }
}