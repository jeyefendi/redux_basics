import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import './index.css';
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

const defaultState = {
  cash: 5,
};

const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};

const customReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return { ...state, cash: state.cash + action.payload };
    case "GET_CASH":
      return { ...state, cash: state.cash - action.payload };

    default:
      return state;
  }
};

const store = createStore(cashReducer, customReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
