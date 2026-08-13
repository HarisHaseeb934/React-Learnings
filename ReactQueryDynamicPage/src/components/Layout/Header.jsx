import { NavLink } from "react-router-dom"

export const Header = () =>{
    return(
        <header className="w-full bg-gray-800">
            <div className="max-w-5xl w-full flex justify-between m-auto text-white p-5">
                <h1>Fetch Techniques</h1>

                <ul className="flex gap-6">
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/rq"}>Fetch</NavLink></li>
                </ul>
            </div>
        </header>
    )
}