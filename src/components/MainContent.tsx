import { lazy, Suspense } from 'react'
import { MainContentProps } from '../App'
import '../css/global.css'

// Pages
import NoMatch from '../pages/NoMatch'
const Home = lazy(() => import('../pages/Home'))
const Portfolio = lazy(() => import('../pages/Portfolio'))
const About = lazy(() => import('../pages/About'))
const Certification = lazy(() => import('../pages/Certification'))
const Resume = lazy(() => import('../pages/Resume'))
const Community = lazy(() => import('../pages/Community'))
const Contact = lazy(() => import('../pages/Contact'))

export function MainContent({ page }: MainContentProps) {
  return (
    <main>
      <Suspense fallback={<><p>Loading...</p></>}>
        {page == "home" && <Home />}
        {page == "port" && <Portfolio />}
        {page == "about" && <About />}
        {page == "cert" && <Certification />}
        {page == "resume" && <Resume />}
        {page == "comm" && <Community />}
        {page == "cont" && <Contact />}
        {page == "nomatch" && <NoMatch />}
      </Suspense>
    </main>
  )
}