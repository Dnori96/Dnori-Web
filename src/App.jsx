import { useState } from "react"

function App() {
  const [ theme, setTheme ] = useState(localStorage.getItem("theme") ||  "dark")

  const changeTheme = () => {
    const newTheme = theme == "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  } 

  return (
    <>
      <div className="grid min grid-rows-3 h-dvh bg-grey-100 dark:bg-grey-900" data-theme={theme}>
        <header className="flex">
          <nav className="flex p-5">
            <div>
              <a href="#">About</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>
            </div>
            <div>
              <button>##</button>{/* Github Button */}
              <button onClick={changeTheme}>##</button>{/* Theme Button */}
              <button>##</button>{/* Langueage Button */}
            </div>
          </nav>
        </header>
        <div></div>
        <main className="flex flex-col">
          <h1>Frontend Developer</h1>
          <h3>Diego Noriega</h3>
          <div>
            {/* Github Button */}
            {/* Insta Button */}
            {/* linkeding Button */}
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi odit rem blanditiis necessitatibus, beatae ut voluptatum natus, illum error aliquid ipsam incidunt. Doloremque magni cupiditate ad, ducimus voluptatum neque.</p>
          <section>
            {/* Projects Cards */}
          </section>
          <section>
            {/* Techs */}
          </section>
        </main>
        <div></div>
        <footer className="flex absolute bottom-0">
          <p>© {new Date().getFullYear()} Diego Noriega</p>
          <div>
            {/* Theme Button */}
            {/* Langueage Button */}
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
