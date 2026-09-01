export const Contact = () => {
  const handleSubmit = (form) => {
    const formData = Object.fromEntries(form.entries());
    console.log(formData);
  };

  return (
    <section className="text-center m-5">
      <h1 className="font-bold text-2xl text-[#66BB6A]">Contact Us</h1>
      <div>
        <form action={handleSubmit} className="w-md p-10 m-auto flex flex-col gap-6 shadow-2xl">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required className="outline-none border-[#66BB6A] border p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required className="outline-none border-[#66BB6A] border p-2"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Enter Your Message" className="outline-none border-[#66BB6A] border p-2"
          ></textarea>
          <button type="submit" value="send" className="bg-[#66BB6A] text-white py-2 hover:text-green-100">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
