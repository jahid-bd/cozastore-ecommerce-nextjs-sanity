import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { VscClose } from "react-icons/vsc";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { UseStateContext } from "../../context/StateContext";
import ProductItem from "../shared/ProductItem";
import ProductView from "../shared/ProductView";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ButtonCarousel = ({ onClick, side }) => {
  if (side === "left") {
    return (
      <button onClick={onClick} className={"btn-left"}>
        <FiChevronLeft />
      </button>
    );
  } else if (side === "right") {
    return (
      <button onClick={onClick} className={"btn-right"}>
        <FiChevronRight />
      </button>
    );
  }
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <ButtonCarousel onClick={() => onClick()} side="right" />;
};
const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <ButtonCarousel onClick={() => onClick()} side="left" />;
};

const RelatedProducts = ({ products }) => {
  const { quickViewTriger, quickViewProduct, handleCloseQuickView } =
    UseStateContext();
  return (
    <div className="related-products ">
      <div className="header text-center">
        <h2>Related Products</h2>
      </div>
      <div className="product-showcase">
        <Carousel
          responsive={responsive}
          ssr={true}
          // infinite={true}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {products.map((product) => (
            <div style={{ marginRight: "30px" }} key={product._id}>
              <ProductItem product={product} />
            </div>
          ))}
        </Carousel>
      </div>
      {quickViewTriger && (
        <div className="quick-view">
          <div className="quick-view-container">
            <ProductView product={quickViewProduct} />
            <div className="close-view" onClick={handleCloseQuickView}>
              <i>
                <VscClose />
              </i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RelatedProducts;
