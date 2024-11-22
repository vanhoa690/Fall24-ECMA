function ProductList() {
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
            <td>Iphone 16</td>
            <td>100 USD</td>
            <td>
              <button className="btn btn-danger">Delete</button>
              <button className="btn btn-info">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
