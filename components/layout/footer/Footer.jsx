import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../shared/Button";

const Footer = () => {
  const loop = [1, 2, 3, 4, 5];
  return (
    <footer>
      <Container>
        <Row fluid={"sm"}>
          <Col sm={6} lg={3}>
            <div className="footer-categories pb-5 px-3">
              <h4>Categories</h4>
              <ul>
                <li>
                  <Link href="/">Women</Link>
                </li>
                <li>
                  <Link href="/">Men</Link>
                </li>
                <li>
                  <Link href="/">Shoes</Link>
                </li>
                <li>
                  <Link href="/">Watches</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <div className="footer-help  pb-5 px-3">
              <h4>Help</h4>
              <ul>
                <li>
                  <Link href="/">Track Order</Link>
                </li>
                <li>
                  <Link href="/">Returns</Link>
                </li>
                <li>
                  <Link href="/">Shipping</Link>
                </li>
                <li>
                  <Link href="/">FAQs</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <div className="footer-get-in-touch  pb-5 px-3">
              <h4>Get In Touch</h4>
              <span>
                Any questions? Let us know in store at 8th floor, 379 Hudson St,
                New York, NY 10018 or call us on (+1) 96 716 6879
              </span>
              <div className="social-links">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </Col>
          <Col sm={6} lg={3}>
            <div className="footer-newsletter  pb-5 px-3">
              <h4>News Letter</h4>

              <form>
                <div className="input-wrapper">
                  <input type="email" placeholder="email@example.com" />
                  <div className="input-focus"></div>
                </div>
                <div>
                  <Button className={"btn-secondery"}>Subscribe</Button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom text-center">
          <div className="payment-cards">
            <ul className="d-flex aign-items-center justify-content-center">
              {loop.map((item) => (
                <li key={item}>
                  <img src={`images/icons/icon-pay-0${item}.png`}></img>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>
              Copyright ©2022 All rights reserved | Made with by{" "}
              <a href="">Colorlib</a> & distributed by <a href="">ThemeWagon</a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
