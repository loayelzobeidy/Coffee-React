import { Link } from "react-router-dom";
import { LinkProps } from "../../types/LinkProps";

export default function NavLink({ link, children }: LinkProps) {
  return (
    <Link className="p-2 text-gray-800 hover:text-gray-400 m-3" to={link}>
      {children}
    </Link>
  );
}
