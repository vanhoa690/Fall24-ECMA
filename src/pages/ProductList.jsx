import axios from "axios";

function ProductList() {
  // map render product list
  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: 800,
    },
    {
      id: 2,
      name: "Laptop",
      price: 800,
    },
    {
      name: "Tablet",
      price: 600,
      id: 3,
    },
  ];

  async function getProductList() {
    const res = await axios.get("http://localhost:3000/products");
    console.log(res);
  }

  getProductList();

  return (
    <div className="container">
      <h1 className="text-center my-2">ProductList</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <th scope="row">{product.id}</th>
              <td>{product.name}</td>
              <td>{product.price} USD</td>
              <td>
                <button className="btn btn-danger">Delete</button>
                <button className="btn btn-info">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
