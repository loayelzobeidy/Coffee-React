import { Link } from "react-router-dom";

interface LinkProps {
  link: string; // Optional link
  children: React.ReactNode;
}

export default function NavLink({ link, children }: LinkProps) {
  return (
      <Link className="p-2 text-gray-800 hover:text-gray-400 m-3" to={link}>
        {children}
      </Link>
  );
}
