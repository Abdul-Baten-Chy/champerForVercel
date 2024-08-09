/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
} from "@/redux/Feature/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const result = useAppSelector((state) => state?.cart?.cart);
  console.log(result);

  const totalPrice = result?.reduce(
    (acc: any, data: any) => acc + data?.price * data?.userQuantity,
    0
  );
  const totalquantity = result?.reduce(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (acc: any, data: any) => acc + data?.userQuantity,
    0
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = ""; // Legacy method for cross-browser support
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="overflow-x-auto max-w-[1280px] mx-auto mt-16 min-h-screen">
      <h2 className="text-center mb-10"> Your Added Product</h2>
      {result.length > 0 ? (
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th className="">Price</th>

              <th>Action</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {result &&
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              result.map((item: any) => (
                <tr key={item._id}>
                  <td>
                    {item?.name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {item?.brand}
                    </span>
                  </td>
                  <td>{item?.userQuantity}</td>
                  <td>
                    <span>{item.price * item.userQuantity}</span>
                  </td>

                  <td>
                    <Button
                      className="bg-[#4a869e] px-6"
                      onClick={() => dispatch(increaseItemQuantity(item._id))}
                    >
                      Increase
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="bg-[#4a869e] px-6"
                      onClick={() => dispatch(decreaseItemQuantity(item._id))}
                    >
                      Decrese
                    </Button>
                  </td>
                  <th>
                    <Button
                      className="bg-[#F26B4E] px-6"
                      onClick={() => dispatch(removeItem(item._id))}
                    >
                      Remove
                    </Button>
                  </th>
                </tr>
              ))}
            <tr>
              <td>Total</td>
              <td>{totalquantity}</td>
              <td>
                <span>{totalPrice}</span>
              </td>
              <td>
                <Link to={"/checkout"}>
                  <Button className="bg-[#4a869e] px-6">Pay</Button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p className="text-center text-2xl">No Product is in your Cart</p>
      )}
    </div>
  );
}
export default Cart;
