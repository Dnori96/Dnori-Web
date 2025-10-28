import ProjectCard from "./ProjectCard"

function Main({ lang, icon }) {
  const title = lang == "EN" ? "Frontend Developer" : "Desarrollador Frontend"
  const about = lang == "EN" ? 
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vero" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, tempore corporis"
  const projects = lang == "EN" ? "Projects" : "Proyectos"

    return(
      <main className="flex flex-col justify-evenly items-center gap-40">
        <section className="flex flex-col items-center mt-50 gap-2">
          <h1 className="dark:text-grey-300 text-grey-800 text-6xl font-bold animate-slide-up-fade">{title}</h1>
          <h2 className="dark:text-grey-300 text-grey-800 text-5xl font-medium animate-slide-up-fade">Diego Noriega</h2>
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
          <p className="dark:text-grey-500 text-grey-800 w-3xl h-auto text-balance text-center animate-slide-up-fade">{about}</p>
        </section>
        <section className="flex flex-col gap-4">
          <h3 className="dark:text-grey-300 text-grey-800 text-4xl text-center">{projects}</h3>
          <div className="grid grid-cols-2 gap-6 ">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>
        <section>
          {/* Techs */}
        </section>
      </main>
    )
}

export default Main