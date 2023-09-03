import About from "./components/about"
import Contact from "./components/contact"
import Hero from "./components/hero"
import Projects from "./components/projects"
import Resume from "./components/resume"

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Projects/>
      <About/>
      <Resume/>
      <Contact/>
    </main>
  )
}
