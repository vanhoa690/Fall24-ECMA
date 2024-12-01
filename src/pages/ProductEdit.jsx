import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function ProductEdit() {
  const { id } = useParams();
  const nav = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(data) {
    try {
      await axios.put(`http://localhost:3000/products/${id}`, data);
      toast.success("Cập nhật sản phẩm thành công");
      nav("/product/list");
    } catch (error) {
      console.log(error);
      toast.error("Đã có lỗi xảy ra trong quá trình cập nhật sản phẩm");
    }
  }

  async function getProductDetail(id) {
    try {
      const res = await axios.get(`http://localhost:3000/products/${id}`);
      console.log(res.data);
      reset(res.data);
    } catch (error) {
      toast.error("Đã có lỗi khi lấy thông tin sản phẩm");
    }
  }

  useEffect(() => {
    getProductDetail(id);
  }, [id]);

  return (
    <div>
      <h1>Sửa Sản Phẩm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Tên Sản Phẩm
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register("name", {
              required: "Tên sản phẩm là bắt buộc",
            })}
          />
          <small className="text-danger">{errors.name?.message}</small>
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            URL Hình Ảnh
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            {...register("image", {
              required: "URL hình ảnh là bắt buộc",
            })}
          />
          <small className="text-danger">{errors.image?.message}</small>
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Giá
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            {...register("price", {
              required: "Giá là bắt buộc",
              min: {
                value: 1,
                message: "Giá phải lớn hơn 1",
              },
            })}
          />
          <small className="text-danger">{errors.price?.message}</small>
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Danh Mục
          </label>
          <select
            id="category"
            className="form-control"
            {...register("category", {
              required: "Danh mục là bắt buộc",
            })}
          >
            <option value="Dell" >Dell</option>
            <option value="Hp">Hp</option>
          </select>
          <small className="text-danger">{errors.category?.message}</small>
        </div>

        <button type="submit" className="btn btn-primary">
          Lưu Thay Đổi
        </button>
      </form>
    </div>
  );
}

export default ProductEdit;
