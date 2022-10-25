import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './css/global.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
// Pages
import Home from './pages/Home'
// import Portfolio from './pages/Portfolio'
// import About from './pages/About'
// import Certification from './pages/Certification'
// import Resume from './pages/Resume'
// import Community from './pages/Community'
// import Contact from './pages/Contact'
// const Home = lazy(() => import('./pages/Home'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const About = lazy(() => import('./pages/About'))
const Certification = lazy(() => import('./pages/Certification'))
const Resume = lazy(() => import('./pages/Resume'))
const Community = lazy(() => import('./pages/Community'))
const Contact = lazy(() => import('./pages/Contact'))

const Main = () => {
  return (
    <main>
      <Router>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/about' element={<About />} />
            <Route path='/certification' element={<Certification />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/community' element={<Community />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </main>
  )
}

function App() {
  if (window.location.pathname == '/') {
    return (
      <div id='container' className='bgImg'>
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    )
  }
  return (
    <div id='container'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
