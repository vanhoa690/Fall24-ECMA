import axios from "axios";
import { useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  async function getProductList() {
    const res = await axios.get("http://localhost:3000/products");
    setProducts(res.data);
  }

  // getProductList();
  console.log(products);

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
          {products.map((product) => {
            return (
              <tr>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.price} USD</td>
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
