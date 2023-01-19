import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "../features/gameSlice/gameSlice";
import registerSlice from "../features/registerSlice/registerSlice";

const store: any = configureStore({
  reducer: { gameSlice, registerSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export default store;
