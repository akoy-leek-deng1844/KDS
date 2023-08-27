import Clients from '../../Components/Clients';
import './About.css';
import Tom from '../../images/TOM.jpg';
import AboutContainer from './AboutContainer';
const About = () => {
  return (
    <div className="aboutPage">
      <div className="heroAbout">
        <div className="title-about">
          <div className="underline-about"></div>
          <h3>About Us</h3>
        </div>
        <h2>Get to know us..</h2>
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
      <div className="our-desc">
        <h4>At Kwintech Digital Solutions</h4>
        <p>
          We drive the transition to more sustainable, reliable & affordable ICT
          Solutions and Solar systems. As solution providers, we have experience
          and expertise on various IT products and various Solar
          solutions. We help our customers make the most informed decision in
          order to meet their objectives. We bring to our customer lower cost,
          best quality products and world-class services.
        </p>
      </div>
      <AboutContainer />
      <Clients />
      <div className="our-desc our-desc2">
        <h4>Team Leader</h4>
        <p>Our team leader is an open minded person who is ever ready to reason with clients. He is a computer science graduate with a vast experience in the world of IT, having an experience of more than 8 years in the field, hence he is able to lead the team to greater heights. </p>
        <figure>
          <img src={Tom} alt="tom" />
          <figcaption>Eng. Tom Maosa</figcaption>
        </figure>
        <h5>CEO</h5>
      </div>
    </div>
  );
}
export default About