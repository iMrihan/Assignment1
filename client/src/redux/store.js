import { createStore, combineReducers } from "redux";

import { dataReducer } from "./reducers/reducer";

const rootReducer = combineReducers({
  data: dataReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
