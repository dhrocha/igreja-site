import { Header } from './components/Header'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { Church } from './components/Church'
import { Institute } from './components/Institute'
import { Schedule } from './components/Schedule'
import { Pastor } from './components/Pastor'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip" href="#igreja">
        Ir para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Church />
        <Institute />
        <Schedule />
        <Pastor />
      </main>
      <Footer />
    </>
  )
}
