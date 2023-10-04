import { createSlice } from "@reduxjs/toolkit";

export const stepSlice = createSlice({
  name: "currentStep",
  initialState: 1,
  reducers: {
    setStep: (state, action) => (state = action.payload),
  },
});

export const { setStep } = stepSlice.actions;
export default stepSlice.reducer;
