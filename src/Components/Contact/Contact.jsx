import "./Contact.css";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h2>Let&apos;s Talk</h2>
          <p>
            I am currently available to take on new projects, so feel free to
            send me a message about anything you&apos;d like me to work on. You
            can contact me at any time.
          </p>
          <div className="contact-detail">
            <p>
              <EmailIcon />
              Email: 07vinaya.k02@gmail.com
            </p>
            <p>
              <LocalPhoneIcon /> Phone: +91 7356141433
            </p>
          </div>
        </div>

        <div className="contact-right">
          <h2>Send a Message</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
