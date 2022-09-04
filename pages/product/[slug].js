import Head from "next/head";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";
import AdditionalDetails from "../../components/product/AdditionalDetails";
import RelatedProducts from "../../components/product/RelatedProducts";
import ProductView from "../../components/shared/ProductView";
import { client } from "../../lib/client";

const ProductDetails = ({ productData, allProducts }) => {
  const relatedProducts = allProducts.filter(
    (product) =>
      product.categorey === productData.categorey &&
      product._id !== productData._id
  );

  return (
    <>
      <Head>
        <title>{productData.title}</title>
      </Head>
      <div className="product-detail">
        <Container>
          <div className="breadcrumbs">
            <ul>
              <li>
                <Link href={"/"}>Home</Link> <MdKeyboardArrowRight />
              </li>
              <li>
                <Link href={"/"}>{productData.categorey}</Link>{" "}
                <MdKeyboardArrowRight />
              </li>
              <li>
                <span>{productData.title}</span>
              </li>
            </ul>
          </div>
          <ProductView product={productData} />

          <AdditionalDetails details={productData.additional_info} />
          <div className="tags text-center my-4 ">
            <span className="code">{productData.code}</span>
            <span className="categories">
              Categories: {productData.categorey}
            </span>
          </div>
          {relatedProducts.length && (
            <RelatedProducts products={relatedProducts} />
          )}
        </Container>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
    slug {
      current
    }
  }`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const query = `*[_type == "product" && slug.current == '${params.slug}'][0]`;
  const productData = await client.fetch(query);

  const allProductQuery = `*[_type == "product"]`;
  const allProducts = await client.fetch(allProductQuery);

  return {
    props: {
      productData,
      allProducts,
    },
  };
};

export default ProductDetails;
