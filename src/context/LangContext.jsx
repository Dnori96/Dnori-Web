import { createContext, useState } from "react";

export const LangContext = createContext();

function LangProvider({ children }) {
	const [lang, setLang] = useState(localStorage.getItem("lang") || "EN");

	return (
		<LangContext.Provider
			value={{
				lang,
				setLang,
			}}
		>
			{children}
		</LangContext.Provider>
	);
}

export default LangProvider;
