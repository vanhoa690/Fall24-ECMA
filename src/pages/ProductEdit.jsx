import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductEdit() {
  const params = useParams();
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
      <h1>Product Edit ID = {params.id}</h1>
      <h1>Product Edit Product name = {product.name}</h1>
    </div>
  );
}

export default ProductEdit;
