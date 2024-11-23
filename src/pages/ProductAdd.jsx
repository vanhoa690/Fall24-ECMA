import toast from "react-hot-toast";

function ProductAdd() {
  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: "Iphone 11",
      price: 100,
    };
    try {
      await axios.post("http://localhost:3000/products", data);

      toast.success("them thanh cong");
    } catch (error) {
      toast.error("error");
    }
  }
  return (
    <div>
      <h1>ProductAdd</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input type="number" className="form-control" id="price" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductAdd;
