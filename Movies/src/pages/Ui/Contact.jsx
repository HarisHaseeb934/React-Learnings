import { Form } from "react-router-dom";

export const Contact = () => {
  return (
    <section className="flex flex-col justify-center items-center m-auto lg:w-lg md:w-md">
      <Form method="POST" className="w-full px-8 py-10 my-5 shadow-2xl">
        <h1 className="text-center text-2xl font-bold">Contact Form</h1>
        <div className="flex flex-col my-3">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" className="w-full p-2 outline-none border-1"/>
        </div>
        <div className="flex flex-col my-3 ">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" className="w-full p-2 outline-none border-1"/>
        </div>
        <div className="flex flex-col my-3 ">
          <label htmlFor="message">Message: </label>
          <input type="text-area" name="message" id="message" className="w-full p-2 outline-none border-1"/>
        </div>
        <button type="submit" className="bg-red-500 py-3 px-5 text-white">Submit</button>
      </Form>
    </section>
  );
};
