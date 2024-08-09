import Cards from "@/components/Cards";
import Filter from "@/components/Filter";
import SearchBar from "@/components/SearchBar";
import { useGetAllProductQuery } from "@/redux/Feature/Api/productApi";
import { Tproduct } from "@/Utills/type";
import { useState } from "react";
import Hero from "./Hero";
function Products() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const { data, isLoading, isError } = useGetAllProductQuery(searchTerm);
  if (isLoading) return <h2>Loading ...</h2>;
  if (isError) return <h2>Something went wrong</h2>;

  let products = data?.data;
  if (category) {
    products = products?.filter((product) => product.category == category);
  }

  if (minPrice) {
    products = products?.filter(
      (product) => product.price >= parseInt(minPrice)
    );
  }
  if (maxPrice) {
    products = products?.filter(
      (product) => product.price <= parseInt(maxPrice)
    );
  }
  return (
    <div className="max-w-[1280px] mx-auto">
      <Hero></Hero>
      <h2 className="text-3xl text-center mr-16 pt-16">Availble Products</h2>
      <div className="flex mt-8 justify-between">
        <SearchBar setSearchTerm={setSearchTerm}></SearchBar>
        <Filter
          category={category}
          setCategory={setCategory}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        ></Filter>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
        {products &&
          products?.map((item: Tproduct) => (
            <Cards key={item._id} product={item}></Cards>
          ))}
      </div>
    </div>
  );
}
export default Products;
