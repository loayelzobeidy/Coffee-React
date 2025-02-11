import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { CartItem } from "../../types/CartItem";
import CartElement from "./CartElement";

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <div>
      <ul>
        {cart.items.map((item: CartItem) => (
          <li>
            <CartElement
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              quantity={item.quantity}
            ></CartElement>
          </li>
        ))}
      </ul>
    </div>
  );
}
