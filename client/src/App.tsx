import Header from './components/Header'
import Hero from './components/Hero'
import WorkshopDetails from './components/WorkshopDetails'
import LearningOutcomes from './components/LearningOutcomes'
import FAQ from './components/FAQ'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WorkshopDetails />
        <LearningOutcomes />
        <FAQ />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
