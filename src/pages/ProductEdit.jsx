import { useParams } from "react-router-dom";

function ProductEdit() {
  const params = useParams();
  console.log(params);

  return <div>ProductEdit: ID la bao nhieu? {params.id} </div>;
}

export default ProductEdit;
