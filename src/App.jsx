import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { icon } from "./assets/icons";
import { Analytics } from "@vercel/analytics/react";

function App() {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

	const changeTheme = () => {
		const newTheme = theme == "dark" ? "light" : "dark";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	const github = theme == "dark" ? icon.githubLight : icon.githubDark;
	const linkedin = theme == "dark" ? icon.inLight : icon.inDark;
	const insta = theme == "dark" ? icon.instaLight : icon.instaDark;
	const themeIcon = theme == "dark" ? icon.themeLight : icon.themeDark;
	const arrow = theme == "dark" ? icon.arrowLight : icon.arrowDark;

	return (
		<div className="grid grid-rows-[auto_auto_1fr_auto_auto] grid-cols-1 pl-10 pr-10 pt-4 pb-4 h-dvh scroll-smooth bg-grey-100 dark:bg-grey-900 color-transition overflow-y-scroll" data-theme={theme}>
			<Header onThemeChange={changeTheme} icon={{ github, arrow, themeIcon }} />
			<div className="divider"></div>
			<Main icon={{ github, linkedin, insta }} />
			<div className="divider"></div>
			<Footer onThemeChange={changeTheme} icon={{ themeIcon, github }} />
			<Analytics />
		</div>
	);
}

export default App;
