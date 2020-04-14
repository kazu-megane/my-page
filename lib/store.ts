import createSagaMiddleware, { SagaMiddleware, Task } from "redux-saga";
import { createStore, applyMiddleware, Store } from "redux";
import rootReducer from "./state/rootReducer";
import { rootSaga } from "./sagas/index";
import { MakeStoreOptions } from "next-redux-wrapper";

type ReduxSagaStore = Store & { sagaTask: Task };

function buildStore(
  initialState: any,
  sagaMiddleware: SagaMiddleware
): ReduxSagaStore {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    );
  } else {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(sagaMiddleware)
    ) as ReduxSagaStore;
  }
}

export const configureStore = (
  preloadedState: any,
  { isServer, req }: MakeStoreOptions
): ReduxSagaStore => {
  const sagaMiddleware = createSagaMiddleware();

  const store = buildStore(preloadedState, sagaMiddleware);

  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  }

  return store;
};
