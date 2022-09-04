import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderItem from "./SliderItem";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ButtonCarousel = ({ onClick, side }) => {
  if (side === "left") {
    return (
      <button onClick={onClick} className={"btn-carousel-left"}>
        <BiCaretLeft />
      </button>
    );
  } else if (side === "right") {
    return (
      <button onClick={onClick} className={"btn-carousel-right"}>
        <BiCaretRight />
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

const HeroBanner = ({ banner }) => {
  return (
    <section className="hero-section">
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={false}
        draggable={false}
        ssr={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {banner.map((item) => (
          <SliderItem
            key={item._id}
            title={item.title}
            header={item.header}
            image={item.image}
          />
        ))}
      </Carousel>
    </section>
  );
};

export default HeroBanner;
