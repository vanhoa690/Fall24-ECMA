const product = {
  id: 1,
  name: "Iphone 13",
  price: 100,
};

const products = [
  {
    id: 1,
    name: "Iphone 13",
    price: 100,
  },
  {
    id: 2,
    name: "Iphone 14",
    price: 100,
  },
  {
    id: 3,
    name: "Iphone 15",
    price: 100,
  },
  {
    id: 3,
    name: "Iphone 15",
    price: 100,
  },
];

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
