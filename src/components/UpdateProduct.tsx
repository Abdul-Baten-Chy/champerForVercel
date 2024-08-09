import {
  useEditProductMutation,
  useGetSingleProductQuery,
} from "@/redux/Feature/Api/productApi";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProduct = () => {
  const { id } = useParams<{ id: string }>();
  const [editProduct] = useEditProductMutation();
  const { data, isLoading, isError } = useGetSingleProductQuery(id);

  if (isLoading) return <h2> Loading...</h2>;
  if (isError) return <h2> Something went wrong...</h2>;
  const product = data?.data;
  console.log(data);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const images = Array.from(form.image.files);

    const quantity = form.quantity.value;
    const sizeInput = form.size.value;
    const sizes = sizeInput ? sizeInput.split(",") : [];
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const brand = form.brand.value;
    const isFeatured = form.featured.value === "true";
    const imageUrls = await Promise.all(
      images.map(async (image: File) => {
        const formData = new FormData();
        formData.append("image", image);

        const response = await axios.post(image_hosting_api, formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });

        if (!response) {
          throw new Error("Image upload failed");
        }

        return response.data.data.url;
      })
    );

    const data = {
      name,
      images: imageUrls,
      quantity: Number(quantity),
      sizes,
      category,
      price: Number(price),
      description,
      rating: Number(rating),
      brand,
      isFeatured,
    };
    const res = await editProduct({ id, data });
    console.log(res?.data);

    if (res?.data?.success) {
      // show success popup
      form.reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: res?.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="pt-16 min-h-[100vh-64px]">
      <div className="hero min-h-[100vh-64px] pt-14   bg-base-200">
        <div className="card flex-shrink-0 mt-10 mb-10 w-full max-w-3xl shadow-2xl bg-base-100">
          <form
            className="card-body grid grid-cols-1 lg:grid-cols-2 gap-6 "
            onSubmit={handleFormSubmit}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                defaultValue={product?.name}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                name="brand"
                placeholder="brand name"
                defaultValue={product?.brand}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                defaultValue={product?.quantity}
                placeholder="quantity"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                defaultValue={product?.price}
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={product?.category}
                placeholder="Category"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                name="description"
                defaultValue={product?.description}
                placeholder="Description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Size</span>
              </label>
              <input
                type="text"
                name="size"
                defaultValue={product?.sizes}
                placeholder="Size separete with comma"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                defaultValue={product?.rating}
                placeholder="Rating"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="isFeatured">
                <span className="label-text">Featured</span>
              </label>
              <select name="featured" id="isFeatured">
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Images</span>
              </label>
              <input
                type="file"
                name="image"
                placeholder="file"
                className="input input-bordered"
                multiple
                required
              />
            </div>
            <div className="form-control mt-6 col-span-2">
              <button type="submit" className="btn btn-primary">
                Edit Product
              </button>
            </div>
          </form>
          {/* {errMsg && <p className="text-red-500 text-center mb-3">{errMsg}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
