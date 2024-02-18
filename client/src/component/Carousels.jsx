import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpeg';

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
          src={image2}
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
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
