import {NavLink} from "react-router-dom"

export const Home = () => {
    return (
        <section className="bg-[url(bg.jpg)] h-[70vh] flex justify-center items-center">
            <NavLink to="/movies" className = "bg-red-500 px-5 py-3 text-white ">Browse</NavLink>
        </section>  
    )
}

// flex flex-col justify-center items-center 