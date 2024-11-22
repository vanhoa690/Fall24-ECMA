import axios from "axios";
import toast from "react-hot-toast";

function ProductAdd() {
  // js
  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: "Iphone 16",
      price: 100,
    };
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
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductAdd;
