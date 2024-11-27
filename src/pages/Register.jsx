import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function onSubmit(data) {
    console.log(data);
    try {
      await axios.post("http://localhost:3000/register", data);
      toast.success("Dang ky thanh cong");
    } catch (error) {
      toast.error("something error");
    }
  }

  return (
    <div>
      <h1 className="text-center my-2">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          <small className="text-danger">{errors.email?.message}</small>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 6,
                message: "Password toi thieu 6 ky tu",
              },
            })}
          />
          <small className="text-danger">{errors.password?.message}</small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Register;
