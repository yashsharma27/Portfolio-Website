import ContactMe from "./components/ContactMe"
import Education from "./components/Education"
import HeroScreen from "./components/HeroScreen"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import WhatIDo from "./components/WhatIDo"
import WorkExp from "./components/WorkExp"

function App() {
  return <div className="min-h-screen bg-gray-900">
    <div>
      <NavBar />
      <HeroScreen />
      <WhatIDo />
      <Skills/>
      <WorkExp />
      <Education />
      <Projects />
      <ContactMe />
    </div>
  </div>  
}

export default App
