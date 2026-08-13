import { NavLink } from "react-router-dom"

export const Header = () => {
    return(
        <>
        <div>
            <ul>
                <li>
                    <NavLink to= "/" className={({isActive}) => isActive ? "text-blue-500" : "text-black"}>Home</NavLink>
                    <NavLink to= "/product" className={({isActive}) => isActive ? "text-blue-500" : "text-black"}>Product</NavLink>
                    <NavLink to= "/about" className={({isActive}) => isActive ? "text-blue-500" : "text-black"}>About</NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}