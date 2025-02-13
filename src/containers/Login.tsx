import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { useLogin } from "../api/hooks/useLogin";
import { useNavigate } from "react-router-dom";

type LoginInputs = {
  email: string;
  password: string;
};

export default function LoginComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginMut = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    loginMut.mutateAsync(data).then((response) => {
      dispatch(
        login({
          email: response.email,
          name: response.email,
          role: response.role,
        })
      );
      navigate("/");
    });
  };
  const signup = () => {
    navigate("/signup");
  };
  return (
    <div className="flex flex-col max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <form
        className="flex flex-col max-w-md mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">
              This field is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <span className="text-red-500 text-sm mt-1">
              This field is required
            </span>
          )}
        </div>

        <div className="flex justify-center">
          <input
            type="submit"
            value="Login"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer"
          />
        </div>
      </form>
      <div className="flex justify-center">
        <p className="py-2">Are you not a member yet?</p>
        <button
          className="bg-transparent  text-gray-800 font-bold py-2 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer"
          onClick={signup}
        >
          Singup
        </button>
      </div>
    </div>
  );
}
