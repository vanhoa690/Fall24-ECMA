function handleSubmit(event) {
  // Ngăn chặn trang tải lại
  event.preventDefault();
  const productName = document.getElementById("name").value;
  console.log("productName", productName);
}
