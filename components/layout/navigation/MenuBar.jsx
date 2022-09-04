import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { IoMdCart } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";
import { UseStateContext } from "../../../context/StateContext";
import CartModal from "../../Modals/Cart";
import Topbar from "./Topbar";

const menuList = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Shop",
    link: "/shop",
  },
  {
    text: "Features",
    link: "",
  },
  {
    text: "Blog",
    link: "/blog",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Contact",
    link: "/contact",
  },
];

const MenuBar = () => {
  const [cartTriger, setCartTriger] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const { totalCartItems } = UseStateContext();

  const handleMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenCart = () => {
    setCartTriger(true);
  };
  const handleCloseCart = () => {
    setCartTriger(false);
  };

  return (
    <>
      <div className="d-lg-block d-none">
        <Topbar />
      </div>
      <div
        // className={`wrap-menu-desktop ${
        //   scrollPosition > 300 ? "fix-menu-dekstop" : " "
        // }`}
        className="wrap-menu-desktop"
        style={
          scrollPosition > 25
            ? {
                height: "70px",
                backgroundColor: "rgba(255, 255, 255, 1)",
                boxShadow: "0 0px 3px 0px rgba(0, 0, 0, 0.2)",
                top: 0,
              }
            : {}
        }
      >
        <nav className="container">
          <Link href="/" className="logo">
            <img src={"/images/icons/logo-01.png"} alt="IMG-LOGO" />
          </Link>

          <div className="menu-desktop d-lg-block d-none">
            <ul className="main-menu">
              {menuList.map((item) => (
                <li key={item.text}>
                  <Link href={item.link}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="wrap-icon-header">
            <div className="icon-header-item js-show-modal-search">
              <i>
                <AiOutlineSearch />
              </i>
            </div>

            <div
              className="icon-header-item icon-header-noti js-show-cart"
              data-notify={totalCartItems}
              onClick={handleOpenCart}
            >
              <i>
                <IoMdCart />
              </i>
            </div>

            <div className="icon-header-item icon-header-noti" data-notify="0">
              <i>
                <MdOutlineFavoriteBorder />
              </i>
            </div>
            <div
              className="d-lg-none d-block icon-header-item"
              onClick={handleMenu}
            >
              <i>{showMenu ? <VscChromeClose /> : <FiMenu />}</i>
            </div>
          </div>
        </nav>
      </div>
      {true && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: `${showMenu ? "70px" : "-100%"}`,
            width: "100%",
            transition: "all 0.7s",
          }}
        >
          <Topbar />
          <div className="menu-mobile">
            <ul className="main-menu">
              {menuList.map((item) => (
                <li key={item.text}>
                  <Link href={item.link}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <CartModal cartTriger={cartTriger} handleCloseCart={handleCloseCart} />
    </>
  );
};

export default MenuBar;
