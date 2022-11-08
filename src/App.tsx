import { useState } from 'react'
import './css/global.css'

// Components
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'
import { Footer } from './components/Footer'

function App() {
  const [page, setPage] = useState("home")

  return (
    <div className='container'>
      <Header setPage={setPage} />
      <MainContent page={page} />
      <Footer />
    </div>
  )
}

export default App
