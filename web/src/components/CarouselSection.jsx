import Carousel from 'react-bootstrap/Carousel';

import Banner from "../assets/banner.png";

const CarouselSection = () => {
      return (
        <Carousel slide={false}>
          <Carousel.Item>
            <img
              className="d-block w-100 mt-3"
              src={Banner}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 mt-3"
              src={Banner}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 mt-3"
              src={Banner}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      );
}

export default CarouselSection;