import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './css/global.css'

// Pages
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div className='container'>
      <header>
        <h1>
          <a href='/'>Stephen Trudell</a>
        </h1>
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
    </div>
  )
}

export default App
