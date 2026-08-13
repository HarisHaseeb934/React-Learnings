import { NavLink, Outlet, useLocation } from "react-router-dom"

export const AdminLayout = () => {
    return(
        <>
        <aside>
            <NavLink to= "/admin" end>Overview</NavLink>
            <NavLink to= "/admin/settings" end>Settings</NavLink>
        </aside>
        <Outlet/>
        </>
    )
}

export const Admin = () => {
    const location = useLocation();
    const message = location.state?.message;
    console.log(message)
    return (
        <h1>Admin Page</h1>
    )
}
export const Settings = () => {
    return (
        <h1>Settings Page</h1>
    )
}