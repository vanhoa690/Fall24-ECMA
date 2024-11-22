import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function ProductAdd() {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    console.log(data);
    try {
      await axios.post("http://localhost:3000/products", data);
      toast.success("Them thanh cong");
    } catch (error) {
      console.log(error);
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductAdd;
