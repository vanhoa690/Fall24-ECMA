import axios from "axios";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: 800,
    },
    {
      id: 2,
      name: "Smartphone",
      price: 800,
    },
    {
      name: "Tablet 16 update",
      price: 900,
      id: 4,
    },
  ];

  async function getProductList() {
    const res = await axios.get("http://localhost:3000/products");
    console.log(res);
  }
  return (
    <div className="container">
      <h1 className="text-center my-2">ProductList</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                  <button className="btn btn-info">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
