console.log(location.search.split("=")[1]);

async function getProductDetail() {
  const productId = location.search.split("=")[1];
  const res = await axios.get(`http://localhost:3000/products/${productId}`);
  console.log(res);

  document.getElementById("name").value = res.data.name;
  document.getElementById("price").value = res.data.price;
}

getProductDetail();

async function handleSubmit(event) {
  event.preventDefault();

  const productName = document.getElementById("name").value;
  const productPrice = document.getElementById("price").value;

  try {
    await axios.post("http://localhost:3000/products", {
      name: productName,
      price: Number(productPrice),
    });

    location.href = "/";
    alert("them thanh cong");
  } catch (error) {
    alert("error");
  }
}
