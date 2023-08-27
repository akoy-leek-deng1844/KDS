import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <div className="overview">
      <div className="title">
        <h2 className="page">Overview</h2>
        <div className="underline"></div>
      </div>
      <article className="overview-desc">
        <p>
          Kwintech Digital Solutions is a Kenyan based company that offers borderless IT services nationwide. The organization has a variety of technology service visions, including CCTV installation, computer repair and maintenance, networking, computer accessories, electrical works, solar installation, website design, Point of sales systems and general supplies.
          Kwintech started in 2016 and we have years of experience in modern and traditional technologies.
        </p> <br />
        <p>
          At Kwintech, we are committed to assisting businesses adjust to the fast changing world of innovation in order to thrive. We have worked with various sectors of the Kenyan economy, both governmental and non-governmental organizations. Our services as designed to suit clients of all sizes and types. Be it small or big, all have a place in our services. 
        </p>
        
      </article>
      
        <Link className="btn" to="about">More about us..</Link>
    
    </div>
  );
}
export default Overview