import './globals.css'
import Pages from './components/pages'

export const metadata = {
  title: 'IMDB Clone',
  description: 'Build with TMDB API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Pages />
        {children}</body>
    </html>
  )
}
