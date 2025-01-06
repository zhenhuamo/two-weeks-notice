// app/about/page.tsx
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">About Two Weeks Notice</h1>
        <p className="mt-2 text-lg text-gray-600">
          Helping professionals navigate career transitions with confidence
        </p>
      </div>

      <div className="prose max-w-none space-y-6">
        <section>
          <h2>Our Mission</h2>
          <p>
            Two Weeks Notice is dedicated to helping professionals handle their career transitions
            with professionalism and confidence. We provide tools, templates, and guidance to make
            the resignation process smoother for both employees and employers.
          </p>
        </section>

        <section>
          <h2>What We Offer</h2>
          <ul>
            <li>Professional resignation letter generator</li>
            <li>Curated template library for different industries</li>
            <li>Comprehensive guides on resignation best practices</li>
            <li>Expert advice on handling career transitions</li>
          </ul>
        </section>

        <section>
          <h2>Our Commitment</h2>
          <p>
            We're committed to maintaining the highest standards of professionalism and ethics.
            Our tools and resources are designed to help maintain positive professional
            relationships during career transitions.
          </p>
        </section>

        <div className="mt-8 flex gap-4">
          <Button asChild>
            <Link href="/generator">Create Your Letter</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/guides">View Guides</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}