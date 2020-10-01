import { combineReducers } from "@reduxjs/toolkit";
import photoReducer, { Props as PhotoProps } from "./photo";
import loadingReducer, { Props as LoadingProps } from "./loading";
import pageReducer, { Props as PageProps } from "./page";

export type StateProps = {
  photo: PhotoProps;
  loading: LoadingProps;
  page: PageProps;
};

export const rootReducer = combineReducers<StateProps>({
  photo: photoReducer,
  loading: loadingReducer,
  page: pageReducer,
});
