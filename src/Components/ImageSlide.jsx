import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 
import { nanoid } from "nanoid";
const ImageSlide = ({icon}) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {icon.map((item)=>{
            return (
              <div key={nanoid()} className="imgContainer">
                <img src={item} alt="image" />
                <button className="btn">
                  <a href="https://wa.me/message/KGBFUPECLR7ZE1" target="_blank">
                    Get service
                  </a>
                </button>
              </div>
            );
        })}
      </Slider>
    </div>
  );
};
export default ImageSlide;
