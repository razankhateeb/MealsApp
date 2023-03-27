import { createSlice } from "@reduxjs/toolkit";
const favoritesSclice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      // state.ids = state.ids.filter((id) => id!== action.payload.id);
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});
export const addFavorite = favoritesSclice.actions.addFavorite;
export const removeFavorite = favoritesSclice.actions.removeFavorite;

export default favoritesSclice.reducer;
