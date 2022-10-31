import { useState } from 'react'
import './css/global.css'

// Components
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'
import { Footer } from './components/Footer'

export type NavBarProps = {
  setPage: React.Dispatch<React.SetStateAction<string>>
}
export type MainContentProps = {
  page: string
}

function App() {
  const [page, setPage] = useState<string>("home")

  return (
    <div id='container'>
      <Header setPage={setPage} />
      <MainContent page={page} />
      <Footer />
    </div>
  )
}

export default App
