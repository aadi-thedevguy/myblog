import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

export default function Layout({ children }) {
  return (
    <div style={{position : 'relative'}}>

      <Navbar />
      <main style={{marginTop: '5rem'}}>{children}</main>
      <Footer />
    </div>
  )
}