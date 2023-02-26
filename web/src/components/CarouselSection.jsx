import Carousel from "react-bootstrap/Carousel";

import Banner from "../assets/banner.png";
import Banner2 from "../assets/banner-2.png";
import Banner3 from "../assets/banner-3.png";
import Banner4 from "../assets/banner-4.png";

const CarouselSection = () => {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img className="d-block w-100 h-[400px] mt-3" src={Banner} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-[400px] mt-3" src={Banner2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-[400px] mt-3" src={Banner3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-[400px] mt-3" src={Banner4} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSection;
