import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './css/global.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
// Pages
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Certification from './pages/Certification'
import Resume from './pages/Resume'
import Community from './pages/Community'
import Contact from './pages/Contact'

function App() {
  return (
    <div className='container'>
      <Header />
      <Router>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/about' element={<About />} />
            <Route path='/certification' element={<Certification />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/community' element={<Community />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  )
}

export default App
