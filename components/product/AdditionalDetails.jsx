import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { GrStar } from "react-icons/gr";
import { MdOutlineStarOutline } from "react-icons/md";
import Button from "../shared/Button";

const AdditionalDetails = ({ details }) => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabLink = (value) => {
    setActiveTab(value);
  };

  const { weight, dimensions, materials, colors, sizes, description } = details;

  return (
    <div className="additional-details">
      <div className="tabs">
        <ul>
          <li
            onClick={() => handleTabLink("description")}
            className={activeTab === "description" && "active-tab"}
          >
            <span>Description</span>
          </li>
          <li
            onClick={() => handleTabLink("additionalInfo")}
            className={activeTab === "additionalInfo" && "active-tab"}
          >
            <span>Additional Information</span>
          </li>
          <li
            onClick={() => handleTabLink("reviews")}
            className={activeTab === "reviews" && "active-tab"}
          >
            <span>Reviews(1)</span>
          </li>
        </ul>
      </div>
      <div className="details-body">
        {activeTab === "description" && (
          <div className="description-contents">
            <p>{description}</p>
          </div>
        )}

        {activeTab === "additionalInfo" && (
          <div className="additional-contents">
            <Row>
              <Col sm={10} md={8} lg={6} style={{ margin: "0 auto" }}>
                <div className="content-wraper">
                  <ul>
                    <li>
                      <span className="title">Weight</span>
                      <span className="value">{weight}</span>
                    </li>
                    <li>
                      <span className="title">Dimensions</span>
                      <span className="value">{dimensions}</span>
                    </li>
                    <li>
                      <span className="title">Materials</span>
                      <span className="value">{materials}</span>
                    </li>
                    <li>
                      <span className="title">Color</span>
                      <span className="value">{colors}</span>
                    </li>
                    <li>
                      <span className="title">Size</span>
                      <span className="value">{sizes}</span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="review-contents">
            <Row>
              <Col sm={10} md={8} lg={6} style={{ margin: "0 auto" }}>
                <div className="reviews">
                  <div className="review-item">
                    <div className="avatar">
                      <img src="/images/avatar-01.jpg" alt="" />
                    </div>
                    <div className="review-details">
                      <div className="review-header">
                        <span className="name">Ariana Grande</span>
                        <span className="rating">
                          <GrStar />
                          <GrStar />
                          <GrStar />
                          <GrStar />
                        </span>
                      </div>
                      <div className="comment">
                        <p>
                          Quod autem in homine praestantissimum atque optimum
                          est, id deseruit. Apud ceteros autem philosophos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="add-review">
                  <div className="header">
                    <h5>Add a Review</h5>
                    <p>
                      Your email address will not be published. Required fields
                      are marked*{" "}
                    </p>
                  </div>

                  <div className="review-form">
                    <form>
                      <div className="rating-input">
                        <span>Your Rating</span>
                        <span className="rating-icons">
                          <MdOutlineStarOutline />
                          <MdOutlineStarOutline />
                          <MdOutlineStarOutline />
                          <MdOutlineStarOutline />
                          <MdOutlineStarOutline />
                        </span>
                      </div>
                      <div className="comment">
                        <label htmlFor="review">Your review</label>
                        <textarea name="review" id=""></textarea>
                      </div>
                      <div className="name-email">
                        <div className="name">
                          <label htmlFor="name">Name</label>
                          <input type="text" name="name" />
                        </div>
                        <div className="email">
                          <label htmlFor="name">Email</label>
                          <input type="email" name="email" />
                        </div>
                      </div>
                      <div className="submit">
                        <Button className="btn-primary">Submit</Button>
                      </div>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdditionalDetails;
