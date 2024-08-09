/* eslint-disable @typescript-eslint/no-explicit-any */

import { Key } from "react";
import { Link } from "react-router-dom";

const Cards = ({ product }) => {
  return (
    <div className="my-4">
      <div className="max-w-[350px] h-[500px]  bg-[#EDF7FB] drop-shadow-sm border-2 flex flex-col justify-between">
        <div className="h-[250px] bg-black relative">
          <img
            src={product?.images[0]}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="w-16 h-16 bg-[#F26B4E] absolute bottom-0 left-0 text-center flex flex-col justify-center text-white ">
            <p>{product.quantity}</p>
            <p className="-mt-2">Items</p>
          </div>
        </div>
        <div className="mt-6 pl-5">
          <div className="flex  items-center justify-between gap-4">
            <div className="flex text-white gap-1 items-center px-2 bg-[#4a869e]">
              <h3 className=" inline-block bg-[#4a869e] px-2 py-1">
                {product.brand}
              </h3>
            </div>
            <div className="pr-4">Category: {product.category}</div>
          </div>
          <p className="text-black font-bold mt-4">{product.name}</p>
          <div className="flex items-center justify-between gap-5 mt-5">
            <p className="text-black"> Price: ${product.price} </p>
            <h2 className="text-[#4F46E5]  text-[18px] flex gap-2 pr-4">
              Sizes:{" "}
              {product?.sizes?.map((item: any, index: Key) => (
                <p key={index}>{item}</p>
              ))}
            </h2>
          </div>
          <div className="flex justify-center pr-5">
            <Link to={`/details/${product._id}`}>
              <button className="bg-[#4a869e] w-[200px] text-center text-white  py-2 my-5 ">
                VIEW DETAILS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
