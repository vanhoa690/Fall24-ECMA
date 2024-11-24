import { useParams } from "react-router-dom";

function ProductEdit() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Product Edit ID = {params.id}</h1>
    </div>
  );
}

export default ProductEdit;
