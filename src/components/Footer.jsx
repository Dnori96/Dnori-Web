
function Footer({ onThemeChange, icon }) {

  const updateTheme = () => {
    onThemeChange()
  }
  return(
      <footer className="flex items-center justify-between pl-10 pr-10 pt-3 dark:text-grey-400 text-grey-800">
        <p className="animate-fade-in">© {new Date().getFullYear()} Diego Noriega</p>
        <div className="flex gap-4 items-center">
          <button onClick={updateTheme} className="text-setting">
            <img src={icon.themeIcon} alt="Theme button" aria-label="Button to change the theme color"/>
          </button>
          <button className="text-setting">
            <a href="https://github.com/Dnori96" target="blank">
              <img src={icon.github} alt="Link to github" aria-label="Link to github in the form of an icon"/>
            </a>
          </button>
        </div>
      </footer>
  )
}

export default Footer