import { combineReducers } from "@reduxjs/toolkit";
import photoReducer, { Props as PhotoProps } from "./photo";
import loadingReducer, { Props as LoadingProps } from "./loading";

export type StateProps = {
  photo: PhotoProps;
  loading: LoadingProps;
};

export const rootReducer = combineReducers<StateProps>({
  photo: photoReducer,
  loading: loadingReducer,
});
