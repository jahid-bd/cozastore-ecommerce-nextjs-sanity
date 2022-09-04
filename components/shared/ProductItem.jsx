import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { UseStateContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";

const ProductItem = ({ product }) => {
  const { handleOpenQucikView, getQuickViewProduct } = UseStateContext();

  const { image, title, price, slug } = product;

  const quickViewHandler = () => {
    getQuickViewProduct(product);
    handleOpenQucikView();
  };

  return (
    <div className="product-item">
      <div className="image-container">
        <img src={urlFor(image[0])} alt="" />
        <a className="quick-btn" onClick={quickViewHandler}>
          Quick View
        </a>
      </div>
      <div className="product-contents">
        <div className="titles">
          <Link href={`/product/${slug.current}`}>
            <div>
              <span className="title">{title}</span>
            </div>
          </Link>
          <div>
            <span className="price">${price}</span>
          </div>
        </div>
        <div className="heart">
          <i className="outline">
            <AiOutlineHeart />
          </i>
          {/* <i className="fill">
            <AiFillHeart />
          </i> */}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
