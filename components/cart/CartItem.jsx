import { IoIosClose } from "react-icons/io";
import { UseStateContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";

const ShoppingCartItem = ({ product }) => {
  const { image, title, price, quantity, totalPrice, id } = product;
  const { increCartQty, decreCartQty, removeCartItem } = UseStateContext();
  return (
    <tr className="table-row">
      <td className="column-1">
        <div className="product">
          <div className="image" onClick={() => removeCartItem(product)}>
            <img src={urlFor(image)} alt="" />
            <div className="hover-effect">
              <i>
                <IoIosClose />
              </i>
            </div>
          </div>
        </div>
      </td>
      <td className="column-2">
        <div className="title">
          <span>{title}</span>
        </div>
      </td>
      <td className="column-3">
        <div className="price">
          <span>${price}</span>
        </div>
      </td>
      <td className="column-4">
        <div className="quantity-group">
          <span className="decrease" onClick={() => decreCartQty(id)}>
            -
          </span>
          <span className="quantity">{quantity}</span>
          <span className="increase" onClick={() => increCartQty(id)}>
            +
          </span>
        </div>
      </td>
      <td className="column-5">
        <div className="total">
          <span>${totalPrice}</span>
        </div>
      </td>
    </tr>
  );
};

export default ShoppingCartItem;
