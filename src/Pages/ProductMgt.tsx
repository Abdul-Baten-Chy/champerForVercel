import { Button } from "@/components/ui/button";
import {
  useDeleteProductMutation,
  useGetAllProductQuery,
} from "@/redux/Feature/Api/productApi";
import { Tproduct } from "@/Utills/type";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Hero from "./products/Hero";

function ProductMgt() {
  const { data, isLoading, isError } = useGetAllProductQuery("");
  const [deleteProduct] = useDeleteProductMutation();

  if (isLoading) return <h2>Loading ...</h2>;
  if (isError) return <h2>Something went wrong</h2>;
  const product = data?.data;
  console.log(product);
  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      await deleteProduct(id);
      Swal.fire({
        title: "Deleted!",
        text: "Your product has been deleted.",
        icon: "success",
      });
    }
  };
  return (
    <>
      <Hero></Hero>
      <h2 className="text-3xl text-center mt-16 mb-16">
        Your Product management Page
      </h2>
      <div className="overflow-x-auto max-w-[1280px] mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th className="">Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {product &&
              product.map((item: Tproduct) => (
                <tr key={item._id}>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.images[0]}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {item.category}
                    </span>
                  </td>
                  <td>
                    <Link to="/addProduct">
                      <Button className="bg-[#4a869e] px-6">Add</Button>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/edit/${item._id}`}>
                      <Button className="bg-[#4a869e] px-6">Edit</Button>
                    </Link>
                  </td>
                  <th>
                    <Button
                      className="bg-[#F26B4E] px-6"
                      onClick={() => handleDelete(item._id!)}
                    >
                      Delete
                    </Button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ProductMgt;
