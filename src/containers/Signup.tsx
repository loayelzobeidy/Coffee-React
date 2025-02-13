import { useForm, SubmitHandler } from "react-hook-form";
import { useSignup } from "../api/hooks/useSignup";
import { useNavigate } from "react-router-dom";

type Inputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export default function Signup() {
  const navigate = useNavigate(); 
  const signMut = useSignup();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const sendingData = { role: "USER", ...data };
    signMut.mutateAsync(sendingData).then((response) => {
        if(!response.errors){
            navigate("/login")
        }
  });
}

  return (
    <form
      className="flex flex-col max-w-md mx-auto bg-white rounded-lg shadow-md p-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <span className="text-red-500 text-sm mt-1">
            This field is required
          </span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: true,
            pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
          })}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email?.type === "required" && (
          <span className="text-red-500 text-sm mt-1">
            This field is required
          </span>
        )}
        {errors.email?.type === "pattern" && (
          <span className="text-red-500 text-sm mt-1">
            Description input should be a text
          </span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-medium mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true, pattern: /^[A-Za-z]+$/i })}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password?.type === "required" && (
          <span className="text-red-500 text-sm mt-1">
            This field is required
          </span>
        )}
        {errors.password?.type === "pattern" && (
          <span className="text-red-500 text-sm mt-1">
            Description input should be a text
          </span>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="confirmPassword"
          className="block text-gray-700 font-medium mb-2"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword", {
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.confirmPassword?.type === "required" && (
          <span className="text-red-500 text-sm mt-1">
            This field is required
          </span>
        )}
        {errors.confirmPassword?.type === "pattern" && (
          <span className="text-red-500 text-sm mt-1">
            Description input should be a text
          </span>
        )}
      </div>

      <div className="flex justify-center">
        <input
          type="submit"
          value="Signup" // Change this text to anything you want
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer"
        />{" "}
      </div>
    </form>
  );
}
