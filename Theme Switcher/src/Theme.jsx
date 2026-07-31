import { createContext,use,useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("dark");
    const handelTheme = () => {
        setTheme(prev => prev === "dark" ? "light" : "dark");
    }
    return(
        <ThemeContext.Provider value={{theme, handelTheme}}>{children}</ThemeContext.Provider>
    )
}

export const Section = () => {
    let {theme, handelTheme} = use(ThemeContext);

    return(
        <section className={`h-lvh flex flex-col items-center justify-center font-bold ${theme === "dark"? "text-white bg-gray-800": "text-black bg-white"}`}>
            <h1 className="text-2xl">Dark Light Mode Website</h1>
            <button onClick={handelTheme} className="py-4 px-6 rounded my-3 bg-blue-500 font-semibold">Switch to {theme === "dark" ? "Dark Mode" : "Light Mode"}</button>
        </section>
    )
}