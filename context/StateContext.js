import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import storage from "../utils/Storage";
const Context = createContext();

export const StateContext = ({ children }) => {
  // <<----Product Overview States---->>
  const [quickViewTriger, setQuickViewTriger] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState({});

  const handleOpenQucikView = () => {
    setQuickViewTriger(true);
  };

  const handleCloseQuickView = () => {
    setQuickViewTriger(false);
  };

  const getQuickViewProduct = (product) => {
    setQuickViewProduct({ ...product });
  };

  // <<----Cart States---->>
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity((prev) => (prev += 1));
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => (prev -= 1));
    }
  };
  const [cartItems, setCartItems] = useState([]);

  const getCartItem = (product) => {
    const { image, title, price, slug, _id } = product;
    const cartItem = {
      id: _id,
      quantity,
      totalPrice: price * quantity,
      image: image[0],
      title,
      price,
      slug: slug.current,
    };

    const isItemOnCart = cartItems.find((item) => item.id === _id);

    if (isItemOnCart) {
      const updatedItems = cartItems.map((item) => {
        if (item.id === _id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
            totalPrice: item.totalPrice + price * quantity,
          };
        }
        return item;
      });
      setCartItems(updatedItems);
    } else {
      setCartItems((prev) => [...prev, { ...cartItem }]);
    }
    toast.success(`${quantity} new item(s) have been added to your cart`);
    setQuantity(1);
  };

  const removeCartItem = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };

  const [totalCartItems, setTotalCartItems] = useState(0);

  useEffect(() => {
    if (cartItems.length) {
      const totalCartItems = cartItems.reduce((acc, cur) => {
        acc += cur.quantity;
        return acc;
      }, 0);
      setTotalCartItems(totalCartItems);
    } else {
      setTotalCartItems(0);
    }
  }, [cartItems]);

  const [subTotalPrice, setSubTotalPrice] = useState(0);

  useEffect(() => {
    if (cartItems.length) {
      const totalPrice = cartItems.reduce((acc, cur) => {
        acc += cur.totalPrice;
        return acc;
      }, 0);
      setSubTotalPrice(totalPrice.toFixed(2));
    } else {
      setSubTotalPrice(0);
    }
  }, [cartItems]);

  // Save cartitems to local storage
  const STORAGE_KEY = "cart_storage_key";
  useEffect(() => {
    if (cartItems.length) storage.save(STORAGE_KEY, cartItems);
  }, [cartItems]);

  useEffect(() => {
    const data = storage.get(STORAGE_KEY);

    if (data) {
      setCartItems([...data]);
    }
  }, []);

  // <<----Cart Page States---->>
  const increCartQty = (id) => {
    const updatedCarts = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
          totalPrice: item.totalPrice + item.price,
        };
      }
      return item;
    });
    setCartItems(updatedCarts);
  };
  const decreCartQty = (id) => {
    const updatedCarts = cartItems.map((item) => {
      if (item.id === id) {
        if (item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: item.totalPrice - item.price,
          };
        }
      }
      return item;
    });
    setCartItems(updatedCarts);
  };

  return (
    <Context.Provider
      value={{
        quickViewTriger,
        quickViewProduct,
        handleOpenQucikView,
        handleCloseQuickView,
        getQuickViewProduct,
        cartItems,
        getCartItem,
        quantity,
        increaseQuantity,
        decreaseQuantity,
        removeCartItem,
        totalCartItems,
        subTotalPrice,
        increCartQty,
        decreCartQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const UseStateContext = () => useContext(Context);
