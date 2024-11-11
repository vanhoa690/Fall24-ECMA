function handleSubmit(event) {
  // Ngăn chặn trang tải lại
  event.preventDefault();

  // bat du lieu gui len
  const productName = document.getElementById("name").value;
  const productPrice = document.getElementById("price").value;

  console.log("product name", productName);

  // call api axios.post()
  axios.post("http://localhost:3000/products", {
    name: productName,
    price: productPrice,
  });
}
