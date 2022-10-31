import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './css/global.css'

// Components
import { Header } from './components/Header'
// import { MainContent } from './components/MainContent'
import { Footer } from './components/Footer'

// Pages
import NoMatch from './pages/NoMatch'
const Home = lazy(() => import('./pages/Home'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const About = lazy(() => import('./pages/About'))
const Certification = lazy(() => import('./pages/Certification'))
const Resume = lazy(() => import('./pages/Resume'))
const Community = lazy(() => import('./pages/Community'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  return (
    <div id='container'>
      <Header />
      {/* <MainContent /> */}
      <main>
        <Router>
          <Suspense fallback={<></>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/about' element={<About />} />
              <Route path='/certification' element={<Certification />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/community' element={<Community />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/*' element={<NoMatch />} />
            </Routes>
          </Suspense>
        </Router>
      </main>
      <Footer />
    </div>
  )
}

export default App
