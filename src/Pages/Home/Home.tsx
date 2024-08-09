import WhoWeAre from "./Animate";
import Categories from "./Categoris";
import FAQ from "./FAQ";
import FeaturedProducts from "./FeaturedProducts";
import Hero from "./Hero";
import Subscribe from "./Subscribe";

function Home() {
  return (
    <>
      <Hero></Hero>
      <Categories />
      <FeaturedProducts />
      <WhoWeAre></WhoWeAre>
      <Subscribe></Subscribe>
      <FAQ />
    </>
  );
}
export default Home;
