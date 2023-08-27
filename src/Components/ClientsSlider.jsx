import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { clientsImages } from "./Links";
import "./Components.css"
const ClientsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div  className="clientslider">
      <Slider {...settings}>
        {clientsImages.map((item) => {
          return <img key={item.id} src={item.image} alt="image" />;
        })}
      </Slider>
    </div>
  );
};
export default ClientsSlider;
