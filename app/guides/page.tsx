// app/guides/page.tsx
import { guides, guideCategories } from '@/lib/guides-data'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuidesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Resignation Guides</h1>
        <p className="mt-2 text-lg text-gray-600">
          Comprehensive guides to help you navigate your resignation process professionally
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.values(guides).map((guide) => (
          <Link key={guide.id} href={`/guides/${guide.id}`}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle>{guide.title}</CardTitle>
                <CardDescription>{guide.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="inline-block px-2 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
                  {guideCategories[guide.category]}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}