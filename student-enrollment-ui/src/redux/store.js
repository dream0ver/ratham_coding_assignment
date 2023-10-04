import { configureStore } from "@reduxjs/toolkit";
import stepSlice from "./slice/stepSlice";
import userSlice from "./slice/userSlice";

export const store = configureStore({
  reducer: { currentStep: stepSlice, userInfo: userSlice },
});
