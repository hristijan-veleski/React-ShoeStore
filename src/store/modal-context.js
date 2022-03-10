import { createSlice } from "@reduxjs/toolkit";

const modalContext = createSlice({
  name: "modal",
  initialState: { modalIsOpen: false },
  reducers: {
    showModal: (state) => {
      state.modalIsOpen = true;
    },
    closeModal: (state) => {
      state.modalIsOpen = false;
    },
  },
});



export const modalActions = modalContext.actions;
export default modalContext.reducer;