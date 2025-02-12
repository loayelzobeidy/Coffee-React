import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  name: string;
  description: string;
  imageUrl: string;
};
export default function AddItemToMenu() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
        <label
          htmlFor="description"
          className="block text-gray-700 font-medium mb-2"
        >
          Description
        </label>
        <input
          type="text"
          id="description"
          {...register("description", { required: true })}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.description && (
          <span className="text-red-500 text-sm mt-1">
            This field is required
          </span>
        )}
      </div>

      <div className="mb-6">
        <label
          htmlFor="imageUrl"
          className="block text-gray-700 font-medium mb-2"
        >
          Image Url
        </label>
        <input
          type="text"
          id="imageUrl"
          {...register("imageUrl", { required: true })}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.imageUrl && (
          <span className="text-red-500 text-sm mt-1">
            This field is required
          </span>
        )}
      </div>

      <div className="flex justify-center">
        <input
          type="submit"
          value="Add element" // Change this text to anything you want
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer"
        />{" "}
      </div>
    </form>
  );
}
