import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError();
    return(
        <div>
            <h1>Oops an Error Occured</h1>
            {error && <p>{error.data}</p>}
            <NavLink to={'/'}>Go Back</NavLink>
        </div>
    )
}
