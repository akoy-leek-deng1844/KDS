import { services } from "./Links"
import Service from "./Service";
const Services = () => {
  
  return (
    <div className="services" id="services">
      <div className="title title-services">
        <h2 className="page">Our services</h2>
        <div className="underline"></div>
      </div>

      <div className="service-container">
        {services.map((service) => {
          return <Service key={service.id} {...service} />;
        })}
      </div>
    </div>
  );
}
export default Services