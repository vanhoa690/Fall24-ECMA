import axios from "axios";
import { useEffect, useState } from "react";

function ProductList() {
  //useState
  const [products, setProducts] = useState([]); // init data

  async function getProductList() {
    const res = await axios.get("http://localhost:3000/products");
    setProducts(res.data);
  }

  // useEffect(): goi API
  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-2">ProductList</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
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
