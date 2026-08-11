export const Contact = () => {
  const handleSubmit = (form) => {
    const formData = Object.fromEntries(form.entries());
    console.log(formData);
  };

  return (
    <section className="w-full text-center m-5">
      <h1>Contact Us</h1>
      <div>
        <form action={handleSubmit} className="">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required className=""
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required className=""
          />
          <textarea
            name="message"
            id="message"
            placeholder="Enter Your Message" className=""
          ></textarea>
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
