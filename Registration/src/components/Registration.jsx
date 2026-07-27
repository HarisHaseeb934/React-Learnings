import { useState } from "react";
// import { Form as SignUp } from "./SignUp";
// import { Login as SignIn } from "./SignIn";
export const Registration = () => {
  const [isloggedIn, setLoggedIn] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  function handleChange(event) {
    let { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(user);
  }

  function handleLoginChange(event) {
    setLoggedIn(!isloggedIn);
    setUser({
      name: "",
      email: "",
      phone: "",
      password: "",
    });
  }
  return (
    <section>
      <form className="flex flex-col w-[100%] px-6 w-lg justify-center items-center m-auto my-5 gap-4 shadow-2xl py-8 relative">
        <h1>{isloggedIn ? "SignIn" : "SignUp"}</h1>
        {!isloggedIn && (
          <div className="flex flex-col w-[100%] px-6">
            <label htmlFor="name">Name:</label>
            <input
              className = "text-[18px] outline-none border-blue-500 border-1 py-2 rounded-lg px-2"
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="flex flex-col w-[100%] px-6">
        <label htmlFor="email">Email:</label>
        <input
          className = "text-[18px] outline-none border-blue-500 border-1 rounded-lg py-2 px-2"
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        </div>
        {!isloggedIn && (
          <div className="flex flex-col w-[100%] px-6">
            <label htmlFor="email">Phone:</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className = "text-[18px] outline-none border-blue-500  border-1 rounded-lg py-2 px-2 "
            />
          </div>
        )}
        <div className="flex flex-col w-[100%] px-6">
        <label htmlFor="password">Password:</label>
        <input
          className = "text-[18px] outline-none border-blue-500 border-1 rounded-lg py-2 px-2"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        </div>
        <a type="button" onClick={handleLoginChange} className="absolute bottom-16 left-12 text-blue-500">
          {isloggedIn ? "SignUp" : "SignIn"}
        </a>
        <button type="submit" onClick={handleSubmit} className="bg-blue-500 text-white px-5 py-2 rounded-md">
          Submit
        </button>
      </form>
    </section>
  );
};
