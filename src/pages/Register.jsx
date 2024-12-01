import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      await axios.post("http://localhost:3000/register", data);
      toast.success("Đăng ký thành công!");
      navigate("/login");
    } catch (error) {
      toast.error("Đã xảy ra lỗi, vui lòng thử lại");
    }
  }

  return (
    <div>
      <h1 className="text-center my-2">Đăng Ký</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("email", {
              required: "Email là bắt buộc",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Định dạng email không hợp lệ",
              },
            })}
          />
          <small className="text-danger">{errors.email?.message}</small>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Mật khẩu
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            {...register("password", {
              required: "Mật khẩu là bắt buộc",
              minLength: {
                value: 6,
                message: "Mật khẩu phải có ít nhất 6 ký tự",
              },
            })}
          />
          <small className="text-danger">{errors.password?.message}</small>
        </div>

        <button type="submit" className="btn btn-primary">
          Đăng ký
        </button>
      </form>
    </div>
  );
}

export default Register;
