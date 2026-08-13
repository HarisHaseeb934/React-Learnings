import { NavLink, useNavigate, useRouteError } from "react-router-dom"

export const Error = () => {
    const navigate = useNavigate();
    const error = useRouteError();

    if(error.status === 404){
        return(
            <section>
                <div className={`bg-[url(/Error404.png)] h-screen bg-cover bg-center`}>
                    <NavLink onClick={() => navigate(-1)} end className={`px-5 py-3 bg-red-400 text-white m-5`}>Go Back</NavLink>
                    <NavLink to= "/" end className={`px-5 py-3 bg-red-400 text-white m-5`}>Go Home</NavLink>
                </div>
            </section>
        )
    }
}