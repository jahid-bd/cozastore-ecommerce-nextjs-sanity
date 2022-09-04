import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillCaretDown } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import ShoppingCartItem from "../../components/cart/CartItem";
import { UseStateContext } from "../../context/StateContext";

const ShopingCart = () => {
  const { cartItems, subTotalPrice } = UseStateContext();
  const [selectTrig, setSelectTrig] = useState(false);
  const [country, setCountry] = useState("Select a country");

  const handleDrop = () => {
    if (selectTrig) {
      setSelectTrig(false);
    } else {
      setSelectTrig(true);
    }
  };

  const handleSelectInput = (value) => {
    setCountry(value);
    setSelectTrig(false);
  };

  return (
    <>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <Container>
        <div className="shoping-cart-page mt-5">
          <div className="breadcrumbs py-5">
            <ul>
              <li>
                <Link href={"/"}>Home</Link> <MdKeyboardArrowRight />
              </li>
              <li>
                <span>Shopping Cart</span>
              </li>
            </ul>
          </div>

          <div className="cart-contents">
            <Row>
              <Col lg={8}>
                <div className="shoping-cart-table">
                  <table>
                    <tbody>
                      <tr className="table-head">
                        <th className="column-1">Product</th>
                        <th className="column-2"></th>
                        <th className="column-3">Price</th>
                        <th className="column-4">Quantity</th>
                        <th className="column-5">Total</th>
                      </tr>
                      {cartItems.map((item) => (
                        <ShoppingCartItem key={item.id} product={item} />
                      ))}
                    </tbody>
                  </table>
                  <div className="coupon-group">
                    <div className="coupon-input">
                      <input type="text" placeholder="Couopon Code" />
                    </div>
                    <div className="add-coupon-btn">
                      <span>Apply Coupon</span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="shipping-details">
                  <div className="header">
                    <h4>Cart Totals</h4>
                  </div>
                  <div className="sub-total">
                    <span className="total-title">Subtotal:</span>
                    <span className="total-price">${subTotalPrice}</span>
                  </div>
                  <div className="shipping-info">
                    <div className="title">Shipping:</div>
                    <div className="details">
                      <div className="pera">
                        <p>
                          There are no shipping methods available. Please double
                          check your address, or contact us if you need any
                          help.
                        </p>
                      </div>
                      <div className="shipping-address">
                        <span className="st">Shipping Address</span>
                        <div className="select-input" onClick={handleDrop}>
                          <span className="select-text">{country}</span>
                          <div className="d-icon">
                            <AiFillCaretDown />
                          </div>
                          {selectTrig && (
                            <div className="select-dropdown">
                              <ul>
                                <li
                                  className={
                                    country === "Select a country" &&
                                    "active-opt"
                                  }
                                  onClick={() =>
                                    handleSelectInput("Select a country")
                                  }
                                  value={""}
                                >
                                  Select a country
                                </li>
                                <li
                                  onClick={() => handleSelectInput("UK")}
                                  value={"UK"}
                                  className={country === "UK" && "active-opt"}
                                >
                                  UK
                                </li>
                                <li
                                  onClick={() => handleSelectInput("USA")}
                                  value={"USA"}
                                  className={country === "USA" && "active-opt"}
                                >
                                  USA
                                </li>
                                <li
                                  onClick={() => handleSelectInput("Canada")}
                                  value={"Canada"}
                                  className={
                                    country === "Canada" && "active-opt"
                                  }
                                >
                                  Canada
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                        <div className="text-input">
                          <input type="text" placeholder="State /Country" />
                        </div>
                        <div className="text-input">
                          <input type="text" placeholder="Postcode / Zip" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="checkout-group">
                    <div className="total-group">
                      <div className="check-t">
                        <span>Total:</span>
                      </div>
                      <div className="check-amount">
                        <span className="amount">{subTotalPrice}</span>
                      </div>
                    </div>
                    <div className="check-btn">Proceed To Checkout</div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShopingCart;
