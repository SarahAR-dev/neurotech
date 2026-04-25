import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { OrderPage } from './pages/OrderPage'
import { SuccessPage } from './pages/SuccessPage'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/commander" element={<OrderPage />} />
          <Route path="/merci" element={<SuccessPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}