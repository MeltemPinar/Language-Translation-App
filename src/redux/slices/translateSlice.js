import { createSlice } from "@reduxjs/toolkit";
import { translateText } from "../actions/translateActions";

const initialState = {
  isLoading: false,
  isError: false,
  text: "",
};
const translateSlice = createSlice({
  name: "translate",
  initialState,
  reducers: {
    //payload değerini text e aktar
    updateText: (state, action) => {
      state.text = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(translateText.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(translateText.rejected, (state, action) => {
      alert(
        "İşlem gerçekleşirken bir sorun oluştu, lütfen daha sonra tekrar deneyiniz"
      );
      state.isLoading = false;
      state.isError = action.error;
    });
    builder.addCase(translateText.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.text = action.payload;
    });
  },
});
export default translateSlice.reducer;
export const { updateText } = translateSlice.actions;
