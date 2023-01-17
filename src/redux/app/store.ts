import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "../features/gameSlice/gameSlice";

const store: any = configureStore({
  reducer: { gameReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export default store;
