async function handleSubmit(event) {
  event.preventDefault();

  const productName = document.getElementById("name").value;
  const productPrice = document.getElementById("price").value;

  try {
    await axios.post("http://localhost:3000/products", {
      name: productName,
      price: productPrice,
    });
    alert("them thanh cong");
  } catch (error) {
    alert("Error");
  }
}
