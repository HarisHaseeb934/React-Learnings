export const Contact = () => {
  const handleSubmit = (form) => {
    const formData = Object.fromEntries(form.entries());
    console.log(formData);
  };

  return (
    <section>
      <h1>Contact Us</h1>
      <div className="container">
        <form action={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <textarea
            name="message"
            id="message"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
