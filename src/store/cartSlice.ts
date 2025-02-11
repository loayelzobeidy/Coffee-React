import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../types/CartItem";
import { CartState } from "../types/CartSlice";

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addElementToCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.items.findIndex(
        (item) => item.name === action.payload.name
      );
      if (index === -1) {
        state.items.push({
          name: action.payload.name,
          imageUrl: action.payload.imageUrl,
          price: action.payload.price,
          quantity: 1,
        });
        state.totalPrice += action.payload.price;
      } else {
        state.items[index].price += action.payload.price;
        state.items[index].quantity++;
        state.totalPrice += action.payload.price;
      }
    },
    removeElementFromCart: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(
        (item) => item.name === action.payload
      );
      if (index !== -1) {
        if (state.items[index].quantity == 1) {
          state.totalPrice -= state.items[index].price;
          state.items = state.items.filter(
            (item) => item.name === action.payload
          );
        } else {
          state.items[index].price -= state.items[index].price;
          state.totalPrice -= state.items[index].price;
          state.items[index].quantity--;
        }
      }
    },
  },
});

export const { addElementToCart, removeElementFromCart } = cartSlice.actions;
export default cartSlice.reducer;
