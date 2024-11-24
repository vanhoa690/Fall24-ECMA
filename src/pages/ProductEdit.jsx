import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function ProductEdit() {
  const nav = useNavigate();
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(data) {
    try {
      await axios.put(`http://localhost:3000/products/${params.id}`, data);

      toast.success("them thanh cong");
      // chuyen trang list
      nav("/product/list");
    } catch (error) {
      toast.error("error");
    }
  }

  async function getProductDetail(id) {
    const res = await axios.get(`http://localhost:3000/products/${id}`);
    reset(res.data);
  }

  useEffect(() => {
    getProductDetail(params.id);
  }, []);

  return (
    <div>
      <h1>Product Edit</h1>
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
              required: "Price is required",
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

export default ProductEdit;
