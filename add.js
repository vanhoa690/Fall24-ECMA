function handleSubmit(event) {
  event.preventDefault();
  const productName = document.getElementById("name").value;

  console.log("product name", productName);
  axios.post("http://localhost:3000/products", {
    name: productName,
    price: 1,
  });
}
