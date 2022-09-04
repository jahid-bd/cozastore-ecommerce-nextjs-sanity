import ProductOverview from "../../components/home/ProductOverview";
import { client } from "../../lib/client";

const Shop = ({ products }) => {
  return (
    <div style={{ marginTop: "170px" }}>
      <ProductOverview products={products} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const productQuery = `*[_type == "product"]`;
  const products = await client.fetch(productQuery);

  return {
    props: { products },
  };
};

export default Shop;
