import { NavLink } from "react-router-dom"

export const Header = () => {
    return(
        <header className="w-full">
            <div className="max-w-5xl w-full flex justify-between m-auto items-center p-5">
                <NavLink>The Odyssey</NavLink>

                <ul className="flex gap-5">
                    <li>
                        <NavLink to={"/"}>Odysseus</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/old"}>Athena</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/query"}>Penelope</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}