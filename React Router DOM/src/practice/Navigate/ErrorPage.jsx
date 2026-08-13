import {NavLink, useNavigate, useRouteError} from "react-router-dom";

export const ErrorPage = () => {
    const navigate = useNavigate();
    const error = useRouteError();
    console.log(error)
    return(
        <section  className="bg-[url(/Error404.png)] h-screen bg-cover bg-center">
            <NavLink to= "/admin">Go to Admin</NavLink>
            <NavLink onClick={() => navigate("/admin", {state: {message: "Hello Admin"}})}>Go Back</NavLink>
        </section>
    )
}