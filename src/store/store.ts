import { configureStore } from "@reduxjs/toolkit";
import cart from "@/store/slice/product-cart";
import { GetStorage, SetStorage } from "@/common/config/sotrage";

export const store = configureStore({
  reducer: {
    cart,
  },
  preloadedState: {
    cart: GetStorage("cart_list") || undefined,
  },
});

store.subscribe(() => {
  SetStorage("cart_list", store.getState().cart);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
