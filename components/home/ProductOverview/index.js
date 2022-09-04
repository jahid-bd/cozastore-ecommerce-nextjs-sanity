import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { VscClose } from "react-icons/vsc";
import { UseStateContext } from "../../../context/StateContext";
import ProductItem from "../../shared/ProductItem";
import ProductView from "../../shared/ProductView";
import { filterData } from "./ConstantDeclaration.js";
import { FilterItem } from "./Helpers";

const ProductOverview = ({ products }) => {
  const [filterTriger, setFilterTriger] = useState(false);
  const [searchTriger, setSearchTriger] = useState(false);
  const [activeTab, setActiveTab] = useState("All Products");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const { quickViewTriger, quickViewProduct, handleCloseQuickView } =
    UseStateContext();

  const filterHandler = () => {
    if (filterTriger) {
      setFilterTriger(false);
    } else {
      setSearchTriger(false);
      setFilterTriger(true);
    }
  };
  const searchHandler = () => {
    if (searchTriger) {
      setSearchTriger(false);
    } else {
      setFilterTriger(false);
      setSearchTriger(true);
    }
  };

  const tabHandler = (tab) => {
    setActiveTab(tab);
  };

  // const fetchData = async () => {
  //   // try {
  //   //   const query = `*[_type == "product" && categorey == "Women"]`;
  //   //   const allProducts = await client.fetch(query);
  //   //   console.log(allProducts);
  //   //   setFilteredProduct(allProducts);
  //   // } catch (e) {
  //   //   console.log(e);
  //   // }
  // };

  useEffect(() => {
    if (activeTab === "All Products") {
      setFilteredProducts(products);
    } else {
      const filtData = products.filter(
        (product) => product.categorey === activeTab
      );
      setFilteredProducts(filtData);
    }
  }, [activeTab]);

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const query = `*[_type == "product"]`;
  //   client.fetch(query).then((data) => setData(data));
  // }, []);

  // useEffect(() => {
  //   console.log("FP:", data);
  // }, [data]);

  const tabs = products.reduce(
    (acc, cur) => {
      if (!acc.includes(cur.categorey)) {
        acc.push(cur.categorey);
      }

      return acc;
    },
    ["All Products"]
  );

  return (
    <section className="product-overview">
      <Container>
        <div className="header">
          <h3>Product Overview</h3>
        </div>

        <div className="filter-bar" style={{ position: "relative" }}>
          <div className="filter-tabs">
            <ul>
              {tabs.map((tab) => (
                <li key={tab} onClick={() => tabHandler(tab)}>
                  <span className={activeTab === tab && "active"}>{tab}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-search-bar">
            <div
              className={`filter ${filterTriger && "filter-active"}`}
              onClick={filterHandler}
            >
              <span>
                <i>{filterTriger ? <AiOutlineClose /> : <BsFilter />}</i>
                Filter
              </span>
            </div>
            <div
              className={`search ${searchTriger ? "search-active" : ""}`}
              onClick={searchHandler}
            >
              <span>
                <i>{searchTriger ? <AiOutlineClose /> : <AiOutlineSearch />}</i>
                Search
              </span>
            </div>
          </div>
        </div>

        {searchTriger && (
          <div className="search-field">
            <div className="field">
              <div className="icon">
                <i>
                  <AiOutlineSearch />
                </i>
              </div>
              <div className="input">
                <input type="text" placeholder="Search" />
              </div>
            </div>
          </div>
        )}

        {filterTriger && (
          <div className="filter-contents">
            <Row>
              {filterData.map((item) => (
                <Col md={6} lg={3} key={item.id}>
                  <FilterItem data={item} />
                </Col>
              ))}
            </Row>
          </div>
        )}

        <div className="products">
          <Row>
            {filteredProducts.map((product) => (
              <Col md={6} lg={3} key={product._id}>
                <ProductItem product={product} />
              </Col>
            ))}
          </Row>
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
      </Container>
    </section>
  );
};

export default ProductOverview;
