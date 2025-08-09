import "./globals.css";
import { Inter, DM_Serif_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-serif' })

export const metadata = {
  title: 'Merisio Gianluigi | Coach Strategico e Formatore',
  description: 'Formazione e coaching per professionisti del benessere.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="bg-black text-white font-sans overflow-x-hidden">{children}</body>
    </html>
  )
}
