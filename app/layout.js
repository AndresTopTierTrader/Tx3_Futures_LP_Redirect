import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import '../globals.css'

// Fonts
const inter = Inter({
  subsets: ["latin"],
  weights: ["300", "400", "500", "700", "900"],
});

export default async function Layout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <main className='overflow-x-hidden'>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}