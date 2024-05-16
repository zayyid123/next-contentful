import Navbar from '@/components/Navbar'
import './globals.css'
import Footer from '@/components/Footer'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Navbar/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  )
}
