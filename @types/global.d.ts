import { Store } from "redux";

export declare global {
  interface Window {
    __NEXT_DATA__: any;
    __NEXT_REDUX_STORE__: Store;
  }
}
