import { Inter } from '@next/font/google'

export const FONT_INTER = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Helvetica Neue', 'sans-serif'],
  adjustFontFallback: true,
})
