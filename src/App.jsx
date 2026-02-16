import { useState } from "react"
import './App.css'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'

function App() {
  const [section, setSection] = useState("about");

  return (
    <>
      <Header
        title="Nagy Ábel"
        message="Software developer"
        onNavigate={setSection}
        currentSection={section}
      />

      {section === "about" && <About />}
      {section === "contact" && <Contact />}
      {section === "portfolio" && <Portfolio />}

      <Footer year="© Copyright 2026"/>
    </>
  )
}

export default App