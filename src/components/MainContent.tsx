import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
// import { Home } from '../pages/Home'
// import { Portfolio } from '../pages/Portfolio'
// import { About } from '../pages/About'
// import { Certification } from '../pages/Certification'
// import { Resume } from '../pages/Resume'
// import { Community } from '../pages/Community'
// import { Contact } from '../pages/Contact'
import NoMatch from '../pages/NoMatch'
const Home = lazy(() => import('../pages/Home'))
const Portfolio = lazy(() => import('../pages/Portfolio'))
const About = lazy(() => import('../pages/About'))
const Certification = lazy(() => import('../pages/Certification'))
const Resume = lazy(() => import('../pages/Resume'))
const Community = lazy(() => import('../pages/Community'))
const Contact = lazy(() => import('../pages/Contact'))

export function MainContent() {
    return (
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
    )
  }