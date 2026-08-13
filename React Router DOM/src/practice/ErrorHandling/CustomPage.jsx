import { NavLink } from "react-router-dom";

export const CustomPage = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <NavLink to = "/admin">Go Back To Home</NavLink>
    </>
  );
};
