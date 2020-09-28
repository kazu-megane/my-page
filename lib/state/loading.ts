import { createSlice } from "@reduxjs/toolkit";
import { StateProps } from "~/lib/state";

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

// selectors
export const loadingSelectors = (state: StateProps) => state.loading;

export const { setLoading } = loadingSlice.actions;
