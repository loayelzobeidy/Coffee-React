import { useSelector } from "react-redux";
import NavLink from "../common/Link";
import { logout } from "../../store/userSlice";
import { clearJwtFromLocalStorage } from "../../util/auth";
import { RootState } from "../../store";
import Button from "../common/Button";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const logoutFun = () => {
    dispatch(logout());
    clearJwtFromLocalStorage();
  };
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  return (
    <nav className="flex bg-gray-100">
      <ul className="flex p-5 flex-3" >
        <li>
          <NavLink link="/">Home</NavLink> {/* Use Link for navigation */}
        </li>
        {!isAuthenticated && (
          <li>
            <NavLink link="/login">Login</NavLink>
          </li>
        )}
        <li>
          <NavLink link="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink link="/cart">Cart</NavLink>
        </li> 
        <li>
          <NavLink link="/addtomenu">Add Element To Menu</NavLink>
        </li>
      </ul>
      {isAuthenticated && (
          <Button className="flex-1" clicked={logoutFun}>Log out</Button>
        )}
    </nav>
  );
}
