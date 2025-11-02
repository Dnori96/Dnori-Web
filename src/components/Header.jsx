import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useContext } from "react";
import { LangContext } from "../context/LangContext";

function Header({ onThemeChange, icon }) {
	const { lang, setLang } = useContext(LangContext);

	const updateTheme = () => {
		onThemeChange();
	};

	function changeLang(difLang) {
		const newLang = difLang == "EN" ? "ES" : "EN";
		if (lang == newLang) return;

		setLang(newLang);
		localStorage.setItem("lang", newLang);
	}

	const about = lang == "EN" ? "About Me" : "Sobre Mi";
	const projects = lang == "EN" ? "Projects" : "Proyectos";
	const contact = lang == "EN" ? "Contact" : "Contacto";

	return (
		<header>
			<nav className="flex items-center justify-between resize-nav-pad pb-3 dark:text-grey-400 text-grey-800">
				<div className="flex resize-nav-text">
					<a href="#about" className="text-setting">
						{about}
					</a>
					<a href="#projects" className="text-setting">
						{projects}
					</a>
					<a href="mailto:Diego.ale036@gmail.com" className="text-setting" target="blank" alt="mail Diego" aria-label="Link to mail Diego">
						{contact}
					</a>
				</div>
				<div className="flex resize-nav-settings items-center">
					<Menu as="div" className="flex flex-col resize-menu relative gap-2">
						{({ open }) => (
							<>
								<MenuButton className="flex items-center group gap-1 pl-1 pr-1 rounded-md outline-0 cursor-pointer dark:hover:bg-grey-400/10 hover:bg-grey-800/10">
									{lang}
									<img src={icon.arrow} alt="arrow dropdown" className={`resize-nav-arrow transition-transform duration-250 ${open ? "rotate-180" : ""}`} />
								</MenuButton>
								<MenuItems className="flex flex-col absolute z-10 mt-6 w-full p-1 origin-top-right dark:bg-grey-800 bg-grey-400 outline-0 rounded-md">
									<MenuItem>
										<a onClick={() => changeLang("ES")} className="hover:bg-grey-700/50 rounded-sm pl-1 cursor-pointer">
											EN
										</a>
									</MenuItem>
									<MenuItem>
										<a onClick={() => changeLang("EN")} className="hover:bg-grey-700/50 rounded-sm pl-1 cursor-pointer">
											ES
										</a>
									</MenuItem>
								</MenuItems>
							</>
						)}
					</Menu>
					<button onClick={updateTheme} className="text-setting resize-nav-theme cursor-pointer">
						<img src={icon.themeIcon} alt="Theme button" aria-label="Button to change the theme color" />
					</button>
					<button className="text-setting resize-nav-github">
						<a href="https://github.com/Dnori96" target="blank">
							<img src={icon.github} alt="Link to github" aria-label="Link to github in the form of an icon" />
						</a>
					</button>
				</div>
			</nav>
		</header>
	);
}

export default Header;
