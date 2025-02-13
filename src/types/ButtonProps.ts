import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  className: string;
  disable?: boolean|undefined;
  clicked: () => void;
}
