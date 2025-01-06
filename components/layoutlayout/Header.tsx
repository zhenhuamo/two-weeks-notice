// src/components/layout/Header.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Header = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Generator', href: '/generator' },
    { name: 'Templates', href: '/templates' },
    { name: 'Guides', href: '/guides' },
    { name: 'Q&A', href: '/qa' },
  ]

  return (
    <header className="border-b">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              TwoWeeksNotice
            </Link>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Button variant="outline">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header