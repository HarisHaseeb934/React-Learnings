export const Contact = () => {

    function handleFormSubmit(formData){
        const form = Object.fromEntries(formData.entries());
        console.log(form)
    }

  return (
    <section>
      <h2>Contact Us</h2>
      <div>
        <form action={handleFormSubmit}>
          <input
            type="text"
            name="userName"
            autoComplete="false"
            required
            placeholder="Enter User Name...."
          />
          <input
            type="email"
            name="email"
            autoComplete="false"
            required
            placeholder="Enter Email...."
          />
          <textarea
            name="message"
            autoComplete="false"
            required
            placeholder="Enter Your message"
          ></textarea>
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
