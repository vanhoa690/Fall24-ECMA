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
  const productId = location.search.split("=")[1];
  const productName = document.getElementById("name").value;
  const productPrice = document.getElementById("price").value;
  const data = {
    name: productName,
    price: Number(productPrice),
  };
  try {
    if (productId) {
      await axios.put(`http://localhost:3000/products/${productId}`, data);
    } else {
      await axios.post("http://localhost:3000/products", data);
    }

    location.href = "/";
    alert("them thanh cong");
  } catch (error) {
    alert("error");
  }
}
