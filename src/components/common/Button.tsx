import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className:string;
  clicked: () => void;
}
export default function Button({ children, className,clicked }: ButtonProps) {
  return (
    <button
      className={"flex-3 bg-green-600 text-white rounded-lg w-28 m-auto p-2 mt-3 hover:bg-green-800"+className}
      onClick={clicked}
    >
      {children}
    </button>
  );
}
