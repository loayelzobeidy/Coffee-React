import { Route, Routes } from "react-router-dom";
import Login from "../containers/Login";
import Home from "../containers/Home";
import MenuView from "../containers/MenuView";
import AddItemToMenu from "../containers/AddItemToMenu";
import CartView from "../containers/CartView";
import Signup from "../containers/Signup";
export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuView />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<CartView />} />
      <Route path="/addtomenu" element={<AddItemToMenu />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
