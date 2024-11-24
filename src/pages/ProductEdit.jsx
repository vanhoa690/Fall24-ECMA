import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductEdit() {
  const params = useParams();
  const [product, setProduct] = useState();

  async function getProductDetail(id) {
    const res = await axios.get(`http://localhost:3000/products/${id}`);
    console.log(res);
    setProduct(res.data);
  }

  useEffect(() => {
    getProductDetail(params.id);
  }, []);

  return (
    <div>
      <h1>ProductEdit: ID la bao nhieu? {params.id}</h1>
      <h2>Product name: {product?.name} </h2>
    </div>
  );
}

export default ProductEdit;
