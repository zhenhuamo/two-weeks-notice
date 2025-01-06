// app/templates/[templateId]/page.tsx
import { letterTemplates } from '@/lib/letter-templates'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default function TemplatePage({ params }: { params: { templateId: string } }) {
  const template = letterTemplates[params.templateId]

  if (!template) {
    notFound()
  }

  // 创建示例数据
  const sampleData = {
    employeeName: 'John Doe',
    managerName: 'Jane Smith',
    company: 'Example Corp',
    position: 'Software Engineer',
    lastWorkingDay: '2024-01-19',
    additionalNotes: '',
    template: template.id
  }

  const previewContent = template.generate(sampleData)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{template.name}</h1>
        <p className="mt-2 text-gray-600">{template.description}</p>
      </div>

      <div className="bg-white border rounded-lg p-6 mb-8">
        <pre className="whitespace-pre-wrap font-mono text-sm">
          {previewContent}
        </pre>
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline" asChild>
          <Link href="/templates">
            Back to Templates
          </Link>
        </Button>
        <Button asChild>
          <Link href={`/generator?template=${template.id}`}>
            Use this Template
          </Link>
        </Button>
      </div>
    </div>
  )
}