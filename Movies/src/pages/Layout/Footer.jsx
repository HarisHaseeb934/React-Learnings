export const Footer = () => {
  return (
    <section className="bg-gray-800 text-white mt-5 ">
      <div className="flex flex justify-center items-center gap-10 p-10 flex-col lg:flex-row">
        <div>
          <h1 className="font-bold">CONTACT</h1>
          <p className = "text-[12px] text-gray-500">Street 2017 Harron Drive</p>
          <p className = "text-[12px] text-gray-500">City Multan</p>
        </div>
        <div>
          <h1 className="font-bold">MENU</h1>
          <p className = "text-[12px] text-gray-500">Home</p>
          <p className = "text-[12px] text-gray-500">Movies</p>
          <p className = "text-[12px] text-gray-500">About</p>
        </div>
        <div>
          <h1 className="font-bold">RECENT POSTS</h1>
          <p className = "text-[12px] text-gray-500">Breaking Down Barriers</p>
          <p className = "text-[12px] text-gray-500">Breaking Down Barriers</p>
          <p className = "text-[12px] text-gray-500">Breaking Down Barriers</p>
        </div>
        <div>
          <h1 className="font-bold">NEWSLETTER</h1>
          <div>
            <input type="text" className="outline-none bg-white"/>
            <button className="px-2 bg-red-500">SIGN UP</button>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="font-bold">Coaching</h1>
        <p className = "text-[12px] text-gray-500">@2018 Coaching Built Using</p>
      </div>
    </section>
  );
};
