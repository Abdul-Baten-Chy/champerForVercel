import { useCreateProductMutation } from "@/redux/Feature/Api/productApi";
import axios from "axios";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProducts = () => {
  const [createProduct, { isLoading }] = useCreateProductMutation();

  const handleFormSubmit = async (e: {
    preventDefault: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    target: any;
  }) => {
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

    const product = {
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
    const res = await createProduct(product);
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
  if (isLoading) <h2>Loading...</h2>;
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
              <button type="submit" className="btn bg-[#4a869e] text-white">
                Add Product
              </button>
            </div>
          </form>
          {/* {errMsg && <p className="text-red-500 text-center mb-3">{errMsg}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
