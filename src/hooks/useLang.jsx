import { useContext } from "react"
import { LangContext } from "../context/LangContext"

export function useLang() { 
    const { lang, setLang } = useContext(LangContext)
    return { lang, setLang }
}