import { useState } from "react"
import { icon } from "./assets/icons"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

function App() {
  const [ theme, setTheme ] = useState(localStorage.getItem("theme") ||  "dark")
  const [ lang, setLang ] = useState(localStorage.getItem("lang") || "EN")

  const changeTheme = () => {
    const newTheme = theme == "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }
  
  const github = theme == "dark" ? icon.githubLight : icon.githubDark
  const linkedin = theme == "dark" ? icon.inLight : icon.inDark
  const insta = theme == "dark" ? icon.instaLight : icon.instaDark
  const themeIcon = theme == "dark" ? icon.themeLight : icon.themeDark
  const arrow = theme == "dark" ? icon.arrowLight : icon.arrowDark

  return (
    <div className="grid grid-rows-[auto_auto_1fr_auto_auto] pl-10 pr-10 pt-4 pb-4 h-dvh bg-grey-100 dark:bg-grey-900 color-transition" data-theme={theme}>
      <header>
        <nav className="flex items-center justify-between pl-10 pr-10 pb-3 dark:text-grey-400 text-grey-800">
          <div className="flex gap-4 text-base">
            <a href="#" className="text-setting">About</a>
            <a href="#" className="text-setting">Projects</a>
            <a href="#" className="text-setting">Contact</a>
          </div>
          <div className="flex gap-4 items-center">
            <Menu as="div" className="flex flex-col w-10 relative gap-2">
              <MenuButton className="flex items-center gap-1 pl-1">
                {lang}
                <img src={arrow} alt="arrow dropdown" className="size-3"/>
              </MenuButton>
              <MenuItems className="flex flex-col absolute z-10 mt-6 w-full p-1 origin-top-right bg-grey-800 rounded-md">
                  <MenuItem value="EN" className="hover:bg-grey-700/50 rounded-sm pl-1 cursor-pointer">
                    <a>EN</a>
                  </MenuItem>
                  <MenuItem value="ES" className="hover:bg-grey-700/50 rounded-sm pl-1 cursor-pointer">
                    <a>ES</a>
                  </MenuItem>
              </MenuItems>
            </Menu>
            <button onClick={changeTheme} className="text-setting">
              <img src={themeIcon} alt="Theme button" aria-label="Button to change the theme color"/>
            </button>
            <button className="text-setting">
              <a href="https://github.com/Dnori96" target="blank">
                <img src={github} alt="Link to github" aria-label="Link to github in the form of an icon"/>
              </a>
            </button>
          </div>
        </nav>
      </header>
      <div className="divider"></div>
      <main className="flex flex-col justify-evenly items-center gap-4">
        <section className="flex flex-col items-center gap-2">
          <h1 className="dark:text-grey-300 text-grey-800 text-6xl font-bold animate-slide-up-fade">Frontend Developer</h1>
          <h2 className="dark:text-grey-300 text-grey-800 text-5xl font-medium animate-slide-up-fade">Diego Noriega</h2>
          <div className="flex gap-5 mt-4">
            <a 
            className="icons mt-3 mb-2" 
            href="https://github.com/Dnori96" 
            alt="Link to github" 
            aria-label="Link to github in the form of an icon" 
            target="blank"
            >
              <img src={github} className="size-7 animate-slide-up-fade cursor-pointer"/>
            </a>
            <a 
            className="icons mt-3 mb-2" 
            href="https://www.linkedin.com/in/diego-noriega-596997337/" 
            alt="Link to linkedin" 
            aria-label="Link to linkedin in the form of an icon"
            target="blank"
            >
              <img src={linkedin} className="size-7 animate-slide-up-fade cursor-pointer"/>
            </a>
            <a 
            className="icons mt-3 mb-2" 
            href="https://www.instagram.com/diegonori96/" 
            alt="Link to instagram" 
            aria-label="Link to instagram in the form of an icon"
            target="blank"
            >
              <img src={insta} className="size-7 animate-slide-up-fade cursor-pointer"/>
            </a>
          </div>
          <p className="dark:text-grey-500 text-grey-800 w-3xl h-auto text-balance text-center animate-slide-up-fade">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam modi odit rem blanditiis necessitatibus, beatae ut voluptatum natus, illum error aliquid ipsam incidunt. Doloremque magni cupiditate ad, ducimus voluptatum neque.</p>
        </section>
        <section>
          {/* Projects Cards */}
        </section>
        <section>
          {/* Techs */}
        </section>
      </main>
      <div className="divider"></div>
      <footer className="flex items-center justify-between pl-10 pr-10 pt-3 dark:text-grey-400 text-grey-800">
        <p className="animate-fade-in">© {new Date().getFullYear()} Diego Noriega</p>
        <div className="flex gap-4 items-center">
          <button onClick={changeTheme} className="text-setting">
            <img src={themeIcon} alt="Theme button" aria-label="Button to change the theme color"/>
          </button>
          <button className="text-setting">
            <a href="https://github.com/Dnori96" target="blank">
              <img src={github} alt="Link to github" aria-label="Link to github in the form of an icon"/>
            </a>
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
