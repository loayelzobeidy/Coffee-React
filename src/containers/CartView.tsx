import { useSelector } from "react-redux";
import { RootState } from "../store";
import Cart from "../components/ui/Cart";

export default function CartView() {
  const cart = useSelector((state: RootState) => state.cart);
  const user = useSelector((state: RootState) => state.user);
  return <Cart></Cart>;
}
