import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function ProductAdd() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    console.log(data);
    try {
      await axios.post("http://localhost:3000/products", data);

      toast.success("them thanh cong");
      // chuyen sang trang list
    } catch (error) {
      toast.error("error");
    }
  }
  console.log(errors);

  return (
    <div>
      <h1>ProductAdd</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register("name", { required: "Name is Required" })}
          />
          {errors?.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            {...register("price", {
              required: "Price is Required",
              min: {
                value: 0,
                message: "Price > 0",
              },
            })}
          />
          {errors?.price && (
            <small className="text-danger">{errors.price.message}</small>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductAdd;
