import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mariam Lawal | Portfolio',
  description: 'Hi there, my name is Mariam Lawal, a professional combination or a graphic designer, a virtual assistant and finally an executive support specialist. I am here to help you with your business needs. I am a creative and detail-oriented professional with a passion for design and organization. I have a proven track record of delivering high-quality work on time and within budget.',
  generator: 'Mariam Lawal',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
