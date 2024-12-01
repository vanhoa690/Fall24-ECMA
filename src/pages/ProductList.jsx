import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function ProductList() {
  const [products, setProducts] = useState([]);

  async function getProductList() {
    try {
      const { data } = await axios.get("http://localhost:3000/products");
      setProducts(data);
    } catch (error) {
      console.error(error);
      toast.error("Không thể tải danh sách sản phẩm!");
    }
  }

  async function deleteProduct(id) {
    const confirmDelete = new Promise((resolve, reject) => {
      toast.custom((t) => (
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h5>Chắc chắn muốn xóa sản phẩm này?</h5>
          <div className="d-flex justify-content-around mt-3">
            <button
              className="btn btn-danger"
              onClick={() => {
                resolve(true);
                toast.dismiss(t.id);
              }}
            >
              Xóa
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                reject("cancel");
                toast.dismiss(t.id);
              }}
            >
              Hủy
            </button>
          </div>
        </div>
      ));
    });
    confirmDelete
      .then(async () => {
        try {
          await axios.delete(`http://localhost:3000/products/${id}`);
          setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
          toast.success("Xóa sản phẩm thành công!");
        } catch (error) {
          console.error(error);
          toast.error("Có lỗi xảy ra, vui lòng thử lại!");
        }
      })
      .catch(() => {
        toast.error("Hủy bỏ xóa sản phẩm!");
      })
      .finally(() => {
      });
  }

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-2">Danh Sách Sản Phẩm</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Tên Sản Phẩm</th>
            <th scope="col">Hình Ảnh</th>
            <th scope="col">Giá</th>
            <th scope="col">Danh Mục</th>
            <th scope="col">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>
                  <img src={product.image} alt={product.name} style={{ width: "100px", height: "auto" }} />
                </td>
                <td>{product.price} USD</td>
                <td>{product.category}</td>
                <td>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="btn btn-danger"
                  >
                    Xóa
                  </button>
                  <a href={`/product/edit/${product.id}`}>
                    <button className="btn btn-info">Sửa</button>
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
