import { useRouteError,useNavigate } from "react-router-dom";
export const Error = () => {
    const navigate = useNavigate();

  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <section className="bg-[url(/Error404.png)] h-screen bg-cover bg-center flex items-center justify-center">
        <button onClick={() => navigate("/")} className="bg-red-400 text-white px-5 py-3 m-2">Go Home</button>
        <button onClick={() => navigate(-1)} className="bg-red-400 text-white px-5 py-3 m-2">Go Back</button>
      </section>
    );
  }
  return(
    <h2>Data Not Found....</h2>
  )
};
