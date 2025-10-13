import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // normal, semi-bold e bold
})

export const metadata = {
  title: 'MS BIM Engenharia',
  description: 'Especialistas em projetos de instalações no Revit com tecnologia BIM.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  )
  
}
