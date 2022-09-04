import { urlFor } from "../../lib/client";

const ProductCategoryItem = ({ image, header, subTitle, link }) => {
  return (
    <div className="product-category-item">
      <div className="cover-image">
        <img src={urlFor(image)} alt="" />
      </div>
      <a href="/" className="link">
        <div className="contents">
          <div className="item-header">
            <span className="header">{header}</span>
            <span className="sub-text">{subTitle}</span>
          </div>
          <div className="item-button">
            <div className="shop-now-button">Shop Now</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCategoryItem;
