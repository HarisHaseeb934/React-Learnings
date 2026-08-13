import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError();
    return(
        <div className="text-center">
            <h1>Oops Error Occured</h1>
            <p>{error && error.data}</p>
            <button className="bg-red-500 text-white p-4 m-4">
                <NavLink to={"/"}>Go Back</NavLink>
            </button>
        </div>
    )
}