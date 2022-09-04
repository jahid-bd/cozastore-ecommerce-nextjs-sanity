import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  AiFillHeart,
  AiOutlineExpandAlt,
  AiOutlineGooglePlus,
} from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { UseStateContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";
import SelectInput from "../product/SelectInput";
import Button from "./Button";

const ProductView = ({ product }) => {
  const { quantity, increaseQuantity, decreaseQuantity, getCartItem } =
    UseStateContext();
  const [activeImg, setActiveImg] = useState(0);
  const [fullscreenTrig, setFullsecreenTrig] = useState(false);

  const { image, title, short_description, price, sizes, colors } = product;

  const images = image.map((img) => urlFor(img));

  const sizeArr = sizes.map((opt) => ({
    text: `Size ${opt}`,
    value: opt,
  }));

  const colorArr = colors.map((opt) => ({
    text: opt,
    value: opt,
  }));

  const handleNextImg = () => {
    if (activeImg < images.length - 1) {
      setActiveImg((prev) => (prev += 1));
    }

    if (activeImg === images.length - 1) {
      setActiveImg(0);
    }
  };
  const handlePrevImg = () => {
    if (activeImg > 0) {
      setActiveImg((prev) => (prev -= 1));
    }
    if (activeImg === 0) {
      setActiveImg(images.length - 1);
    }
  };

  const handleCurrentImg = (index) => {
    setActiveImg(index);
  };

  const handleCloseBtn = () => {
    setFullsecreenTrig(false);
  };

  const handleExtendBtn = () => {
    setFullsecreenTrig(true);
  };

  const handleCartBtn = () => {
    getCartItem(product);
  };

  return (
    <div className="product-view">
      <Row>
        <Col md={6}>
          <div className="image-gallery">
            <div className="image-list">
              <ul>
                {images.map((img, index) => (
                  <li
                    className={activeImg === index && "active-img"}
                    onClick={() => handleCurrentImg(index)}
                    key={index}
                  >
                    <img src={img} alt="" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="image-window">
              <img src={images[activeImg]} alt="" />
              <div className="expand" onClick={handleExtendBtn}>
                <i>
                  <AiOutlineExpandAlt />
                </i>
              </div>
              <div className="prev-btn" onClick={handlePrevImg}>
                <i>
                  <RiArrowLeftSLine />
                </i>
              </div>
              <div className="next-btn" onClick={handleNextImg}>
                <i>
                  <RiArrowRightSLine />
                </i>
              </div>
            </div>

            {fullscreenTrig && (
              <div className="fullscreen-img-window">
                <div className="image">
                  <img src={images[activeImg]} alt="" />
                </div>
                <div className="left-slider-btn" onClick={handlePrevImg}>
                  <i>
                    <RiArrowLeftSLine />
                  </i>
                </div>
                <div className="right-slider-btn" onClick={handleNextImg}>
                  <i>
                    <RiArrowRightSLine />
                  </i>
                </div>
                <div className="close-window-btn" onClick={handleCloseBtn}>
                  <i>
                    <CgClose />
                  </i>
                </div>
              </div>
            )}
          </div>
        </Col>
        <Col md={6}>
          <div className="product-details">
            <div className="header">
              <h5>{title}</h5>
              <span>${price}</span>
              <p>{short_description}</p>
            </div>
            <div className="details-body">
              <SelectInput label={"Size"} options={sizeArr} />
              <SelectInput label={"Color"} options={colorArr} />

              <div className="quantity-group">
                <span className="decrease" onClick={decreaseQuantity}>
                  -
                </span>
                <span className="quantity">{quantity}</span>
                <span className="increase" onClick={increaseQuantity}>
                  +
                </span>
              </div>
              <div className="button" onClick={handleCartBtn}>
                <Button className="btn-secondery-2">Add To Cart</Button>
              </div>
            </div>
            <div className="details-footer">
              <span className="heart-icon">
                <AiFillHeart />
              </span>
              <span>
                <TiSocialFacebook />
              </span>
              <span>
                <TiSocialTwitter />
              </span>
              <span>
                <AiOutlineGooglePlus />
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductView;
