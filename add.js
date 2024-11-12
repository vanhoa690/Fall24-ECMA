function handleSubmit(event) {
  event.preventDefault();

  const productName = document.getElementById("name").value;
  const productPrice = document.getElementById("price").value;

  axios.post("http://localhost:3000/products", {
    name: productName,
    price: Number(productPrice),
  });
}
