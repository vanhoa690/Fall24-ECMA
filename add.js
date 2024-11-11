function handleSubmit(event) {
  event.preventDefault();

  const productName = document.getElementById("name").value;

  axios.post("http://localhost:3000/products", {
    name: productName,
  });
}
