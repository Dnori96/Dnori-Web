
function Footer({ onThemeChange, icon }) {

  const updateTheme = () => {
    onThemeChange()
  }
  return(
      <footer className="flex items-center justify-between resize-nav-pad pt-3 dark:text-grey-400 text-grey-800">
        <p className="animate-fade-in xl:text-base md:text-base text-sm">{new Date().getFullYear()} Diego Noriega</p>
        <div className="flex gap-4 items-center">
          <button onClick={updateTheme} className="text-setting cursor-pointer">
            <img src={icon.themeIcon} alt="Theme button" aria-label="Button to change the theme color"/>
          </button>
          <button className="text-setting resize-nav-github">
            <a href="https://github.com/Dnori96" target="blank">
              <img src={icon.github} alt="Link to github" aria-label="Link to github in the form of an icon"/>
            </a>
          </button>
        </div>
      </footer>
  )
}

export default Footer