import { useGetSingleProductQuery } from "@/redux/Feature/Api/productApi";
import { addtoCart } from "@/redux/Feature/productSlice";
import { useAppDispatch } from "@/redux/hook";
import { useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetSingleProductQuery(id as string);
  if (isLoading) return <h2> Loading...</h2>;
  if (isError) return <h2> Something went wrong...</h2>;
  const ratings = new Array(Math.floor(data?.data?.rating as number)).fill(
    data?.data?.rating
  );
  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
              src={selectedImage || data?.data?.images[0]}
              alt="Reebok Zig Kinetica 3"
              className="w-full rounded-lg"
            />
            <div className="flex space-x-2 mt-4">
              {/* Thumbnails */}
              {data!.data!.images!.length > 1 &&
                data?.data?.images?.map((item) => (
                  <img
                    key={item}
                    src={item}
                    alt="Reebok Zig Kinetica 3"
                    className="w-16 h-16 rounded-lg cursor-pointer"
                    onClick={() => handleThumbnailClick(item)}
                  />
                ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{data?.data?.name}</h2>
            <p className="text-gray-500 mb-4">By {data?.data?.brand}</p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">
                {ratings.map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </span>
              <span className="ml-2 text-gray-500">(42 reviews)</span>
            </div>
            <p className="text-3xl font-bold mb-4">${data?.data?.price}</p>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Color</h3>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-white border border-gray-300 rounded-full cursor-pointer"></div>
                <div className="w-8 h-8 bg-gray-300 border border-gray-300 rounded-full cursor-pointer"></div>
                <div className="w-8 h-8 bg-black border border-gray-300 rounded-full cursor-pointer"></div>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {data?.data?.sizes?.map((size) => (
                  <button
                    key={size}
                    className={`border border-gray-300 rounded-lg p-2 ${
                      selectedSize === size ? "bg-black text-white" : "bg-white"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <button
              className="w-full bg-black text-white py-3 rounded-lg"
              onClick={() => dispatch(addtoCart(data!.data))}
            >
              Add to cart
            </button>
            <p className="text-gray-500 mt-4">
              Free delivery on orders over $30.00
            </p>
            <p className="text-gray-500 mt-4">{data!.data!.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
