import { CartElementProps } from "../../types/CartElementProps";
export default function CartElement({
  name,
  quantity,
  imageUrl,
  price,
}: CartElementProps) {
  return (
    <div className="p-4 border rounded-lg shadow-md flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
      <img
        src={imageUrl}
        alt={name}
        height={150}
        width={150}
        className="w-32 h-20 rounded-lg mb-4s"
      />
      <div className="flex items-center justify-between w-full mb-2">
        <p className="text-gray-600">quantity: {quantity}</p>
        <p className="text-lg font-semibold">{price}</p>
      </div>
      <div className="flex space-x-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          +
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          -
        </button>
      </div>
    </div>
  );
}
