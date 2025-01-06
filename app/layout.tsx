// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'  // 添加这行
import './globals.css'
import Header from '@/components/layoutlayout/Header'  // 保持原有路径
import Footer from '@/components/layoutlayout/Footer'  // 保持原有路径

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TwoWeeksNotice - Professional Two Weeks Notice Generator',
  description: 'Create professional two weeks notice letters with our easy-to-use generator, templates, and guides',
  keywords: 'two weeks notice, resignation letter generator, notice letter template, professional resignation',
  openGraph: {
    title: 'TwoWeeksNotice - Professional Two Weeks Notice Generator',
    description: 'Create your professional resignation letter in minutes',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GM34SMVVRM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GM34SMVVRM');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}