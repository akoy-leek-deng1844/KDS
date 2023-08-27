import React, { useRef , useState} from "react";
import emailjs from "@emailjs/browser";
import "../Pages/ContactPage/Contact.css";
import { toast } from "react-toastify";
const Form = () => {
  const form = useRef();
  const [isDisabled, setIsDisabled] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
setIsDisabled(true);
    emailjs
      .sendForm(
        "service_vw8uqop",
        "template_3jmqy5a",
        form.current,
        "BjJ0foUQVuyZWqMKg"
      )
      .then(
        () => {
          toast.success("Message sent successfully");
          form.current.reset();
        },
        (error) => {
          toast.error(error);
        }
      )
      .finally(() => {
        setIsDisabled(false);
      });
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="name">Name</label>
      <input type="text" name="user_name" id="name" required />
      <label htmlFor="email">Email</label>
      <input type="email" name="user_email" id="email" required />
      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        name="user_phone"
        id="phone"
        pattern="[0-9]{10}"
        required
      />
      <label htmlFor="org">Organization (Optional)</label>
      <input type="text" name="user_org" id="org" />
      <label htmlFor="msg">Message</label>
      <textarea name="message" id="msg" />
      <button className="btn" type="submit" value="Send" disabled={isDisabled}>
        {isDisabled ? "Sending..." : "Send"}
      </button>
    </form>
  );
};
export default Form;
