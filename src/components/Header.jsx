import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

function Header({ lang, onThemeChange, onLangChange, icon }) {

  const updateTheme = () => {
    onThemeChange()
  }

  const updateLang = () => {
    onLangChange()
  }

  const about = lang == "EN" ? "About" : "Sobre Mi"
  const projects = lang == "EN" ? "Projects" : "Proyectos"
  const contact = lang == "EN" ? "Contact" : "Contacto"

  return(
    <header>
        <nav className="flex items-center justify-between pl-10 pr-10 pb-3 dark:text-grey-400 text-grey-800">
          <div className="flex gap-4 text-base">
            <a href="#" className="text-setting">{about}</a>
            <a href="#" className="text-setting">{projects}</a>
            <a href="#" className="text-setting">{contact}</a>
          </div>
          <div className="flex gap-4 items-center">
            <Menu as="div" className="flex flex-col w-10 relative gap-2">
              <MenuButton className="flex items-center gap-1 pl-1 outline-0">
                {lang}
                <img src={icon.arrow} alt="arrow dropdown" className="size-3"/>
              </MenuButton>
              <MenuItems className="flex flex-col absolute z-10 mt-6 w-full p-1 origin-top-right bg-grey-800 outline-0 rounded-md">
                  <MenuItem onClick={updateLang} className="hover:bg-grey-700/50 rounded-sm pl-1 cursor-pointer">
                    <a>EN</a>
                  </MenuItem>
                  <MenuItem onClick={updateLang} className="hover:bg-grey-700/50 rounded-sm pl-1 cursor-pointer">
                    <a>ES</a>
                  </MenuItem>
              </MenuItems>
            </Menu>
            <button onClick={updateTheme} className="text-setting">
              <img src={icon.themeIcon} alt="Theme button" aria-label="Button to change the theme color"/>
            </button>
            <button className="text-setting">
              <a href="https://github.com/Dnori96" target="blank">
                <img src={icon.github} alt="Link to github" aria-label="Link to github in the form of an icon"/>
              </a>
            </button>
          </div>
        </nav>
      </header>
  )
}

export default Header