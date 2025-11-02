import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { Spotlight } from '@/components/ui/spotlight'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.5,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://ghoospace.vercel.app/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Guan Ting Ho',
    template: '%s | Nim'
  },
  description:  'Powered by Nim.\nNim is a free and open-source personal website template built with Next.js 15, React 19 and Motion-Primitives.',
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="hidden sm:block">
              <Spotlight
                trackWindow
                size={200}
                className="from-zinc-500/60 via-zinc-300/25 to-transparent blur-2xl dark:from-white/80 dark:via-zinc-400/40"
                springOptions={{
                  bounce: 0.3,
                  duration: 0.1,
                }}
              />
            </div>
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
