import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
    const [isHide, setHide] = useState(false);

    const handleClick = () => {
        setHide(prev => !prev)
    }
    return(
        <header className="bg-[rgb(213,230,242)]">
            <div className="flex w-full max-w-2xl m-auto justify-between items-center pt-4 pb-4 relative">
                <h1>Technical</h1>
                <ul className={`${isHide ? "nav hide" : "nav"}`}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
                <div className="md:hidden">
                    <button onClick={handleClick}><GiHamburgerMenu /></button>
                </div>

            </div>
        </header>
    )
}