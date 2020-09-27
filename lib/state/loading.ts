import { createSlice } from "@reduxjs/toolkit";

export type Props = {
  isLoading: boolean;
};

const initialState: Props = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (_state, action) => {
      return {
        isLoading: action.payload,
      };
    },
  },
});

export default loadingSlice.reducer;

export const { setLoading } = loadingSlice.actions;
