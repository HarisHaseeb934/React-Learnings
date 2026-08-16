import { NavLink, useNavigate, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const navigate = useNavigate();
    const error = useRouteError();
    return(
        <section>
            <h1>Oops! Page Not Found.</h1>
            <NavLink to={"/"}><button>Home</button></NavLink>
            <NavLink onClick={() => navigate(-1)}><button>Go Back</button></NavLink>
        </section>
    )
}