// app/stories/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Success Stories | Two Weeks Notice Letter Generator',
  description: 'Read real-world resignation success stories and learn best practices for professional career transitions.',
  keywords: 'resignation success stories, career transition examples, professional resignation experiences, two weeks notice examples'
}

export default function StoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Success Stories</h1>
        <p className="mt-2 text-lg text-gray-600">
          Learn from real-world experiences of successful career transitions
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {STORIES.map((story) => (
          <article key={story.id} className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">{story.title}</h2>
            <p className="text-gray-600 mb-4">{story.summary}</p>
            <div className="text-sm text-gray-500">
              <p>{story.author}</p>
              <p>{story.industry}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

const STORIES = [
  {
    id: '1',
    title: 'A Smooth Transition in Tech',
    author: 'Software Engineer',
    industry: 'Technology',
    summary: `After five years at my company, I used this generator to create a professional resignation letter. The transition was smooth, and I maintained great relationships with my former colleagues.`
  },
  {
    id: '2',
    title: 'Professional Exit in Healthcare',
    author: 'Registered Nurse',
    industry: 'Healthcare',
    summary: `The templates helped me write a respectful resignation letter that acknowledged my team and patients. My manager appreciated the professional approach.`
  },
  {
    id: '3',
    title: 'Career Change Success',
    author: 'Marketing Manager',
    industry: 'Marketing',
    summary: `When changing industries, I needed to write a particularly thoughtful resignation letter. This tool helped me express gratitude while maintaining professionalism.`
  },
  {
    id: '4',
    title: 'Positive Departure in Retail',
    author: 'Store Manager',
    industry: 'Retail',
    summary: `Using a well-written resignation letter helped me leave on good terms. My former employer even became a valuable reference for future opportunities.`
  }
]