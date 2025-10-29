import ProjectCard from "./ProjectCard.jsx"
import { LangContext } from "../context/LangContext.jsx"
import { useContext } from "react"
import projects from "../assets/data/projects.json"

function Main({ icon }) {
  const { lang } = useContext(LangContext)
  
  const title = lang == "EN" ? "Frontend Developer" : "Desarrollador Frontend"
  const about = lang == "EN" ? "About Me" : "Sobre Mi"
  const aboutTxt = lang == "EN" ? 
  "I’m a curious and self-taught person who enjoys programming and learning new things every day. I like working on personal projects, trying out new ideas, and constantly improving in this world of programming." 
  : "Soy una persona curiosa y autodidacta que disfruta programar y aprender cosas nuevas cada día. Me gusta crear proyectos por cuenta propia, probar ideas y seguir mejorando poco a poco en este mundo de la programación."
  const projectsTitle = lang == "EN" ? "Projects" : "Proyectos"

    return(
      <main className="flex flex-col justify-evenly items-center gap-20">
        <section className="flex flex-col justify-center items-center mt-50 mb-30 gap-2">
          <h1 className="dark:text-grey-300 text-grey-800 resize-title font-bold animate-slide-up-fade">{title}</h1>
          <h2 className="dark:text-grey-300 text-grey-800 resize-name font-medium animate-slide-up-fade">Diego Noriega</h2>
          <div className="flex gap-5 mt-4">
            <a 
            className="icons mt-3 mb-2" 
            href="https://github.com/Dnori96" 
            alt="Link to github" 
            aria-label="Link to github in the form of an icon" 
            target="blank"
            >
            <img src={icon.github} className="size-7 animate-slide-up-fade cursor-pointer"/>
            </a>
            <a 
            className="icons mt-3 mb-2" 
            href="https://www.linkedin.com/in/diego-noriega-596997337/" 
            alt="Link to linkedin" 
            aria-label="Link to linkedin in the form of an icon"
            target="blank"
            >
            <img src={icon.linkedin} className="size-7 animate-slide-up-fade cursor-pointer"/>
            </a>
            <a 
            className="icons mt-3 mb-2" 
            href="https://www.instagram.com/diegonori96/" 
            alt="Link to instagram" 
            aria-label="Link to instagram in the form of an icon"
            target="blank"
            >
            <img src={icon.insta} className="size-7 animate-slide-up-fade cursor-pointer"/>
            </a>
          </div>
        </section>
        <section className="flex flex-col justify-center gap-10"> 
          <h3 id="projects" className="dark:text-grey-300 text-grey-800 resize-title-projects animate-fade-in text-center font-bold">{projectsTitle}</h3>
          <div className="grid grid-cols-1 resize-card gap-6 animate-fade-in">
            {projects.projects.map((p, i) => (
              <ProjectCard
                key={i}
                cardInfo={{
                  name: lang === "EN" ? p.nameEN : p.nameES,
                  desc: lang === "EN" ? p.descEN : p.descES,
                  tech: p.tech,
                  github: p.github,
                  website: p.website
                }}
              />
              ))}
          </div>
        </section>
        <section className="flex flex-col gap-3 h-36 mb-10 dark:text-grey-300 text-grey-800 text-center">
          <h3 id="about" className="resize-title-projects font-bold animate-fade-in">{about}</h3>
          <p className="dark:text-grey-500 text-grey-800 xl:w-3xl md:w-2xl w-full h-auto text-wrap text-center animate-fade-in">{aboutTxt}</p>
        </section>
        <section>
          {/* Techs Maybe */}
        </section>
      </main>
    )
}

export default Main