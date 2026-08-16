export const Home = () => {
  return (
    <section className="w-full bg-gray-900 h-[calc(100dvh-136px)]">
      <div className="max-w-6xl w-full flex flex-col text-white m-auto justify-between items-center p-5 md:flex-row">
        <div>
          <h1 className="text-3xl font-bold">TanStack Project</h1>
          <p className="text-lg">
            Building Project in React using Query, Axios, Router Dom
          </p>
        </div>
        <div className="flex items-center">
          <img src="./Main.png" alt="" width="500px"/>
        </div>
      </div>
    </section>
  );
};
