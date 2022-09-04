import { Col, Container, Row } from "react-bootstrap";
import ProductCategoryItem from "./ProductCategoryItem";
const ProductCategorey = ({ collections }) => {
  return (
    <section className="product-categories py-5">
      <Container>
        <Row>
          {collections.map((item) => (
            <Col md={6} xl={4} className={"py-4"} key={item._id}>
              <ProductCategoryItem
                image={item.image}
                header={item.title}
                subTitle={item.subTitle}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProductCategorey;
