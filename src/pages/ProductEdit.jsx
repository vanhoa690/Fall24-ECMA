import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductEdit() {
  const params = useParams();
  console.log(params);

  const [product, setProduct] = useState();

  async function getProductDetail(id) {
    const res = await axios.get(`http://localhost:3000/products/${id}`);
    console.log(res.data);
    setProduct(res.data);
  }

  useEffect(() => {
    getProductDetail(params.id);
  }, []);

  return (
    <div>
      <h1>Product Edit co ID : {params.id}</h1>
      <h1>Product Edit co Name : {product?.name}</h1>
    </div>
  );
}

export default ProductEdit;
