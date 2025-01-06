// app/guides/[guideId]/page.tsx
import { guides } from '@/lib/guides-data'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Markdown from 'react-markdown'

export default function GuidePage({ params }: { params: { guideId: string } }) {
  const guide = guides[params.guideId]

  if (!guide) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{guide.title}</h1>
        <p className="mt-2 text-lg text-gray-600">{guide.description}</p>
      </div>

      <div className="prose max-w-none">
        <Markdown>{guide.content}</Markdown>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <Button variant="outline" asChild>
          <Link href="/guides">
            Back to Guides
          </Link>
        </Button>
        <Button asChild>
          <Link href="/generator">
            Create Your Letter
          </Link>
        </Button>
      </div>
    </div>
  )
}