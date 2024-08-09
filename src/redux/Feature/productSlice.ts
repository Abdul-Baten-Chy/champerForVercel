/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { TexistingItem, Tproduct } from "@/Utills/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type Tcart = {
  cart: Tproduct[];
};
const initialState: Tcart = {
  cart: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action: PayloadAction<Tproduct>) => {
      const existingItem: TexistingItem = state?.cart?.find(
        (item: Tproduct) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.userQuantity! += 1;
      } else {
        state.cart.push({ ...action?.payload, userQuantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    decreaseItemQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.cart.find(
        (item: Tproduct) => item?._id === action?.payload
      );
      if (existingItem) {
        if (existingItem?.userQuantity! > 1) {
          existingItem.userQuantity!--;
        } else {
          state.cart = state.cart.filter(
            (item) => item?._id !== action?.payload
          );
        }
      }
    },
    increaseItemQuantity: (state, action: PayloadAction<string>) => {
      const existingItem = state.cart.find(
        (item) => item?._id === action?.payload
      );
      if (existingItem) {
        if (existingItem?.userQuantity! >= 0) {
          existingItem.userQuantity!++;
        } else {
          state.cart = state?.cart?.filter(
            (item) => item?._id !== action?.payload
          );
        }
      }
    },
  },
});
export const selectCount = (state: RootState) => state.cart;
export const {
  addtoCart,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
