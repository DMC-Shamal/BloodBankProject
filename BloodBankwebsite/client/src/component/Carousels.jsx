import Carousel from 'react-bootstrap/Carousel';
import image2 from '../images/image2.jpeg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';

function DarkVariantExample() {
  const imageStyle = {
    width: '300px',
    height: '400px',
    //margin: '0 20px' // Adjust margin as needed
  };

  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image6}
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image5}
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          style={imageStyle}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
