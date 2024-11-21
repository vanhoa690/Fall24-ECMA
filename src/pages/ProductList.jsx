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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <button className="btn btn-danger">Delete</button>
              <button className="btn btn-info">Edit</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
