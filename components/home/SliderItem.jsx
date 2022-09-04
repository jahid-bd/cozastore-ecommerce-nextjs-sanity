import { Container } from "react-bootstrap";
import { urlFor } from "../../lib/client";
import Button from "../shared/Button";

const SliderItem = ({ title, header, image, link }) => {
  const imgUrl = urlFor(image);
  return (
    <div className="slider-item" style={{ backgroundImage: `url(${imgUrl})` }}>
      <Container>
        <div className="slider-content">
          <div className="slider-title">
            <span>{title}</span>
          </div>
          <div className="slider-header">
            <h1>{header}</h1>
          </div>
          <div className="shonow-btn">
            <Button className="btn-secondery-2">Shop Now</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SliderItem;
