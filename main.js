function renderProductRow(product) {
  return `
   <tr>
            <th scope="row">${product.id}</th>
            <td>${product.name}</td>
            <td>${product.price} USD</td>
            <td>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
  `;
}

async function showProductList() {
  const res = await axios.get("http://localhost:3000/products");
  const products = res.data;
  document.getElementById("list").innerHTML = `
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${products.map(renderProductRow).join("")}
          </tbody>
        </table>
`;
}

showProductList();
