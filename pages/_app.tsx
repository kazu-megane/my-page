import App, { AppProps, AppContext } from "next/app";
import { Provider } from "react-redux";
import withReduxSaga from "next-redux-saga";
import withRedux from "next-redux-wrapper";
import { Store } from "redux";
import { configureStore } from "../lib/store";

const MyApp = ({
  Component,
  pageProps,
  store,
}: AppProps & { store: Store }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default withRedux(configureStore)(withReduxSaga(MyApp));
