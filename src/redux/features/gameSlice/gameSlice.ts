import { createSlice } from "@reduxjs/toolkit";

interface GameState {
  gameActive: boolean;
}

const initialState = {
  gameActive: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameActive: (state: GameState) => {
      state.gameActive = true;
    },
  },
});

export const { setGameActive } = gameSlice.actions;

export default gameSlice.reducer;
