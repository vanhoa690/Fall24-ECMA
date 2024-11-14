async function handleSubmit(event) {
  event.preventDefault();
  const productName = document.getElementById("name").value;
  const productPrice = document.getElementById("price").value;
  const data = {
    name: productName,
    price: Number(productPrice),
  };
  try {
    await axios.post("http://localhost:3000/products", data);

    location.href = "/";
    alert("them thanh cong");
  } catch (error) {
    alert("error");
  }
}
