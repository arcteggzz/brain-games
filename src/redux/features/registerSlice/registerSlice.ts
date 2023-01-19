import { createSlice } from "@reduxjs/toolkit";

interface RegisterState {
  selectedTheme: number;
}

const initialState = {
  selectedTheme: 0,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setSelectedTheme: (state: RegisterState, action) => {
      state.selectedTheme = action.payload;
    },
  },
});

export const { setSelectedTheme } = registerSlice.actions;

export default registerSlice.reducer;
