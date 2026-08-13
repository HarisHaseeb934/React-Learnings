    import { NavLink } from "react-router-dom";
    import { useRouteError } from "react-router-dom";

    export const ErrorPage2 = () => {
    const error = useRouteError();

    if (error.status === 404) {
        return (
        <>
            <section className="bg-[url(/Error404.png)] h-screen bg-center bg-cover relative">
            <NavLink to="/admin" className="absolute top-[50%] left-[50%] py-3 px-5 bg-red-600 text-white">Go Back</NavLink>
            </section>
        </>
        );
    }
    };
