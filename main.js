const product = {
  id: 1,
  name: "Iphone 13",
  price: 100,
};

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
        <tr>
            <th scope="row">${product.id}</th>
            <td>${product.name}</td>
            <td>${product.price} USD</td>
            <td>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

`;
