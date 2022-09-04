import Head from "next/head";
import HeroBanner from "../components/home/HeroBanner";
import ProductCategorey from "../components/home/ProductCategorey";
import ProductOverview from "../components/home/ProductOverview";
import { client } from "../lib/client";

const Home = ({ products, banners, collections }) => {
  return (
    <>
      <Head>
        <title>Coza Store</title>
      </Head>
      <HeroBanner banner={banners} />
      <ProductCategorey collections={collections} />
      <ProductOverview products={products} />
    </>
  );
};

export const getServerSideProps = async () => {
  const productQuery = `*[_type == "product"]`;
  const bannerQuery = `*[_type == "banner"]`;
  const collectionQuery = `*[_type == "collection"]`;

  const products = await client.fetch(productQuery);
  const banners = await client.fetch(bannerQuery);
  const collections = await client.fetch(collectionQuery);

  return {
    props: { products, banners, collections },
  };
};

export default Home;
