import { Button, Title } from "../../Links";

const Contact = () => {
  const spanTwo = { '--i': '2' };
  const spanThree = { '--i': '3' };
  const spanFour = { '--i': '4' };

  return (
    <>
      <section className="contact show-animate" id="contact">
        <h2>
          <Title firstWord='Contact' secondWord='Me' />
          <span className="animate" style={spanTwo}></span>
        </h2>
        <form
          onSubmit="emailSend(); reset(); return false;"
          className="contact-content"
          name="submit-to-google-sheet"
        >
          <div className="contact-box">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              id="message"
              rows="6"
              placeholder="Message"
            ></textarea>
            <span className="animate" style={spanFour}></span>
          </div>
          <div className="btn-box btns">
            <Button word='Submit' type='submit' />
            <span className="animate" style={spanThree}></span>
          </div>
        </form>
      </section>
    </>
  );
};
export default Contact;
