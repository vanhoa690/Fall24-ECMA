import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function ProductEdit() {
  const params = useParams();
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      await axios.put(`http://localhost:3000/products/${params.id}`, data);
      toast.success("Them thanh cong");
      // chuyen sang product list
      nav("/product/list");
    } catch (error) {
      console.log(error);
      toast.error("Error");
    }
  }
  const [product, setProduct] = useState();

  async function getProductDetail(id) {
    const res = await axios.get(`http://localhost:3000/products/${id}`);
    setProduct(res.data);
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
              required: "Name is Requied",
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
              required: "Price is Requied",
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

export default ProductEdit;
