import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    name: "",
    age: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload.name;
    },
    setAge: (state, action) => {
      state.age = action.payload.age;
    },
  },
});

export const { setName, setAge } = userSlice.actions;
export default userSlice.reducer;
