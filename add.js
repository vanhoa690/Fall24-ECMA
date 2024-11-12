function handleSubmit(event) {
  // Ngăn chặn trang tải lại
  event.preventDefault();
  const productName = document.getElementById("name").value;
  console.log("productName", productName);

  // call api
  axios.post("http://localhost:3000/products", {
    name: productName,
  });
}
