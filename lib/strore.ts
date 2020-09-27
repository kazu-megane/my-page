import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./state";

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
  return store;
};

export const wrapper = createWrapper(configureStore);
