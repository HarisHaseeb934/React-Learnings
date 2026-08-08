import { NavLink, useRouteError } from "react-router-dom"

export const Error = () => {
    const error = useRouteError();
    return(
        <div>
            <h1>Oops! An error occured</h1>
            <p>{error.data}</p>
            <NavLink to={"/"}>Go to Home</NavLink>
        </div>
    )
}