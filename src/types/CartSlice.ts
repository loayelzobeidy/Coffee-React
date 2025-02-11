import { CartItem } from "./CartItem";

export interface CartState {
    items: CartItem[];
    totalPrice: 0;
  }