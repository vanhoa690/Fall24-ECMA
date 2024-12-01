import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProductAdd() {
  const nav = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function onSubmit(data) {
    try {
      await axios.post("http://localhost:3000/products", data);
      toast.success("Sản phẩm đã được thêm thành công");
      nav("/product/list");
    } catch (error) {
      console.log(error);
      toast.error("Đã có lỗi xảy ra trong quá trình thêm sản phẩm");
    }
  }

  return (
    <div>
      <h1>Thêm Sản Phẩm</h1>
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
            <option value="Dell">Dell</option>
            <option value="Hp">Hp</option>
          </select>
          <small className="text-danger">{errors.category?.message}</small>
        </div>

        <button type="submit" className="btn btn-primary">
          Thêm Sản Phẩm
        </button>
      </form>
    </div>
  );
}

export default ProductAdd;
