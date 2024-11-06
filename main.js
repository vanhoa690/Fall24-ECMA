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

// () => {}
function getProductFetch() {
  fetch("http://localhost:3000/products")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
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
            ${data.map(renderProductRow).join("")}
            </tbody>
          </table>
    `;
    })
    .catch();
}

// getProductFetch();

function getProductAxios() {
  axios
    .get("http://localhost:3000/products")
    .then((res) => {
      console.log(res.data);
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
    })
    .catch();
}

getProductAxios();
