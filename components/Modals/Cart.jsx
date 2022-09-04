import Link from "next/link";
import { GrClose } from "react-icons/gr";
import { IoIosClose } from "react-icons/io";
import { UseStateContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";
import Button from "../shared/Button";

const CartItem = ({ product }) => {
  const { removeCartItem } = UseStateContext();
  return (
    <div className="cart-item mb-3">
      <div className="cart-item-img" onClick={() => removeCartItem(product)}>
        <img src={urlFor(product.image)} alt="" />
        <div className="hover-effect">
          <i>
            <IoIosClose />
          </i>
        </div>
      </div>
      <div className="cart-item-contents">
        <Link href={`/product/${product.slug}`}>
          <span className="cart-item-title">{product.title}</span>
        </Link>
        <div>
          <span className="quantity">{product.quantity}x</span>
          <span className="price">{product.totalPrice}</span>{" "}
        </div>
      </div>
    </div>
  );
};

const CartModal = ({ cartTriger, handleCloseCart }) => {
  const { cartItems, subTotalPrice } = UseStateContext();
  return (
    <div
      className="cart-modal"
      style={cartTriger ? { visibility: "visible" } : { visibility: "hidden" }}
    >
      <div
        className="cart-wraper"
        style={cartTriger ? { right: 0 } : { right: "-400px" }}
      >
        <div className="cart-container ">
          <div className="cart-header">
            <span className="cart-title">Your Cart</span>
            <span className="close-cart" onClick={handleCloseCart}>
              <GrClose />
            </span>
          </div>
          <div className="cart-body">
            {!cartItems.length && <h6>No Cart Items</h6>}
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <CartItem product={item} />
                </li>
              ))}
            </ul>
          </div>
          <div className="cart-footer">
            <div className="total-price">
              <span>Total: {subTotalPrice}</span>
            </div>
            <div className="buttons">
              <Link href={"/shopping-cart"}>
                <div onClick={handleCloseCart}>
                  <Button>View Cart</Button>
                </div>
              </Link>

              <Button>Check Out</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
