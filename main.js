function renderProductRow(product) {
  return `
   <tr>
              <th scope="row">${product.id}</th>
              <td>${product.name}</td>
              <td>${product.price} VND</td>
              <td>
                <button class="btn btn-danger">Delete</button>
              </td>
            </tr>
  `;
}

function renderUIProductList(products) {
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

function getProductList() {
  fetch("http://localhost:3000/products")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      renderUIProductList(data);
    })
    .catch();
}

// getProductList();

function getProductListAxios() {
  axios
    .get("http://localhost:3000/products")
    .then((data) => {
      const products = data.data;
      renderUIProductList(products);
    })
    .catch();
}

getProductListAxios();
