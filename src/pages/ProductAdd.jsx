import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProductAdd() {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      await axios.post("http://localhost:3000/products", data);
      toast.success("Them thanh cong");
      // chuyen sang product list
      nav("/product/list");
    } catch (error) {
      console.log(error);
      toast.error("Error");
    }
  }

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
            {...register("name", {
              required: "Name is required",
            })}
          />
          <small className="text-danger">{errors.name?.message}</small>
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
              required: "Price is required",
              min: {
                value: 0,
                message: "Price > 0",
              },
            })}
          />
          <small className="text-danger">{errors.price?.message}</small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductAdd;
