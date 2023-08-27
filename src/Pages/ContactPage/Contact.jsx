import Form from "../../Components/Form";
import whatsapp from "../../images/pic12.jpeg";
import { FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import { social } from "../../Components/Links";
const Contact = () => {
  return (
    <>
      <div className="contact-center">
        <div className="heroAbout">
          <div className="title-about">
            <div className="underline-about"></div>
            <h3>Contact Us</h3>
          </div>
          <h2>Reach to us..</h2>
          <div className="custom-shape-divider-bottom-1688297073">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <article className="contact-desc">
          <h4>Want to reach out to us?</h4>
          <p>
            Get in touch with our team with a click of a button! We promise an
            instant reply not later than 24 hours in case of an emaill.
          </p>
          <p>
            You have multiple options to reach us, any would be fine with us.
            You can call our <strong>phones</strong>, send us a{" "}
            <strong>Whatsapp message </strong>
            or write us an <strong>email</strong>. <br />
            You convenience, your choice!
          </p>
        </article>
        <div className="contact-info">
          <article className="card shortCard">
            <div className="card-child">
              <span>
                <FaPhone />
              </span>
              <div className="call-info">
                <h4>Call our office</h4>
                <p>Tel: +254(020)8012012</p>
                <p>Tel: +254718366012</p>
              </div>
            </div>
            <div className="card-child">
              <span>
                <FaMapMarkerAlt />
              </span>
              <div className="call-info">
                <h4>Visit our office</h4>
                <p>Twin towers Kisii first floor Room TT110</p>
                <p>P.O.Box 425 - 40200 Kisii, Kenya</p>
              </div>
            </div>
          </article>
          <article className="social shortCard card">
            <figure>
              <img src={whatsapp} alt="whatsapp" />
            </figure>
            <div>
              <div className="whatsappLink">
                <a href="https://wa.me/message/KGBFUPECLR7ZE1">
                  <FaWhatsapp />
                </a>
                <p>Click your favorite icon</p>
              </div>
              <ul className="social-icons">
                {social.map((link) => {
                  const { id, url, icon } = link;
                  return (
                    <a target="_blank" key={id} href={url}>
                      {icon}
                    </a>
                  );
                })}
              </ul>
            </div>
          </article>

          <article className="card">
            <Form />
          </article>
        </div>
      </div>
    </>
  );
}
export default Contact