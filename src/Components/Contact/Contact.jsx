import "./Contact.css";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f7d4f965-4488-43da-8afd-162e35bd2775");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully");
    }
  };

  return (
    <div id="contact" className="contact">
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
          <form onSubmit={onSubmit} className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
