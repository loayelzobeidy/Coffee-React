import { useDispatch } from "react-redux";
import Button from "../common/Button";
import { addElementToCart } from "../../store/cartSlice";
import { MenuItemProps } from "../../types/MenuItemProps";

export default function MenuItem({
  name,
  price,
  description,
  imageUrl,
}: MenuItemProps) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      addElementToCart({
        name: name,
        imageUrl: imageUrl,
        price: price,
        quantity: 1,
      })
    );
  };
  return (
    <div className="p-2 m-2 bg-gray-100 rounded-lg shadow-md flex flex-col justify-between items-center h-72 w-64 transition duration-300 ease-in-out hover:scale-105">
      <h1 className="text-lg p-2 font-semibold uppercase mb-2 text-gray-800 underline decoration-gray-300">
        {name}
      </h1>
      <p className="text-sm text-gray-600 p-2 line-clamp-3">{description}</p>
      <p className="text-sm text-gray-600 p-2 line-clamp-3">{price }$</p>
      <img src={imageUrl} height={100} width={100}></img>
      <Button className="rounded-lg" clicked={addToCart}>
        Add To cart
      </Button>
    </div>
  );
}
