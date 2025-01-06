// src/components/layout/Footer.tsx
import Link from 'next/link'

const Footer = () => {
  const footerNavs = [
    {
      title: 'Resources',
      links: [
        { name: 'Templates', href: '/templates' },
        { name: 'Guides', href: '/guides' },
        { name: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Tools',
      links: [
        { name: 'Letter Generator', href: '/generator' },
        { name: 'Document Converter', href: '/converter' },
        { name: 'Email Templates', href: '/email-templates' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ]

  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          {footerNavs.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                {group.title}
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} TwoWeeksNotice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer