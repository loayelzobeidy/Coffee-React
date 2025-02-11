import { useForm, SubmitHandler } from "react-hook-form";
import { login } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { useLogin } from "../api/hooks/useLogin";

type LoginInputs = {
  email: string;
  password: string;
};

export default function LoginComponent() {
  const dispatch = useDispatch();
  const loginMut = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    dispatch(login({ email: data.email, name: data.email }));
    const response = loginMut.mutate(data);
    console.log("query object ", response);
  };

  return (
    <form
      className="flex flex-col max-w-md mx-auto bg-white rounded-lg shadow-md p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
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
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer"
        />
      </div>
    </form>
  );
}
