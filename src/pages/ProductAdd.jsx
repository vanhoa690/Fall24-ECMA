import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function ProductAdd() {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    console.log(data);

    try {
      await axios.post("http://localhost:3000/products", data);
      toast.success("Them thanh cong");
      // chuyen sang product list
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
            {...register("name")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            {...register("price")}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductAdd;
