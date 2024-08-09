import { useCreateCartMutation } from "@/redux/Feature/Api/productApi";
import { useAppSelector } from "@/redux/hook";
import { newObj, Tproduct, TuserDetails } from "@/Utills/type";
import Swal from "sweetalert2";

function CheckOut() {
  const cartData = useAppSelector((state) => state?.cart?.cart);
  const [createCart, { isLoading, isError }] = useCreateCartMutation();
  console.log(cartData);

  if (isLoading) return <h2>Loading</h2>;
  if (isError) return <h2>somthing went wrong</h2>;
  const soldProduct = cartData.map((item: Tproduct) => {
    const newObj: newObj = {};
    newObj.id = item._id;
    newObj.productName = item.name;
    newObj.quantity = item.userQuantity;
    newObj.price = item.price;
    newObj.subTotal = item.price * item.userQuantity;
    return newObj;
  });
  const totalPrice = soldProduct.reduce(
    (acc, current) => acc + current.subTotal,
    0
  );
  let userDetails: TuserDetails = {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    userDetails = { name, email, address };

    userDetails.userProductInfo = soldProduct;
    userDetails.userTotalPay = totalPrice;

    const result = await createCart(userDetails);
    if (result) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: result?.data?.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <div className="max-w-[1280px] mx-auto p-8  mt-24 min-h-screen">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Product name</th>
              <th>Quantity</th>
              <th className="">Price</th>
              <th>sub-total</th>
            </tr>
          </thead>
          <tbody>
            {soldProduct &&
              soldProduct.map((item) => (
                <tr key={item?.id}>
                  <td>{item?.productName}</td>
                  <td>{item?.quantity}</td>
                  <td>
                    <span>{item?.price}</span>
                  </td>
                  <td>
                    <span>{item?.subTotal}</span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your adress</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="adress"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6 col-span-2">
            <button type="submit" className="btn btn-primary">
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default CheckOut;
