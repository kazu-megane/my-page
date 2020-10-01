import { createSlice } from "@reduxjs/toolkit";
import { StateProps } from "~/lib/state";

export type Props = {
  columnNum: number;
};

const initialState: Props = {
  columnNum: 3,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setColumnNum: (_state, action) => {
      return {
        columnNum: action.payload,
      };
    },
  },
});

export default pageSlice.reducer;

export const pageSelectors = (state: StateProps) => state.page;

export const { setColumnNum } = pageSlice.actions;
