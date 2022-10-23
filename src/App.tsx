import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Router>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </Router>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
