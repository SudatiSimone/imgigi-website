import "./globals.css";

export const metadata = {
  title: 'Merisio Gianluigi | Coach Strategico e Formatore',
  description: 'Formazione e coaching per professionisti del benessere.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}