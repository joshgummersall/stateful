import { combineReducers, configureStore } from "@reduxjs/toolkit";

const PUSH_APP_STATE = "PUSH_APP_STATE";

export const pushAppState = (data) => ({
  type: PUSH_APP_STATE,
  payload: { data },
});

const appState = (state = [], action) => {
  switch (action.type) {
    case PUSH_APP_STATE:
      return [...state, action.payload.data];
    default:
      return state;
  }
};

const UPDATE_USER_STATE = "UPDATE_USER_STATE";

export const updateUserState = (value) => ({
  type: UPDATE_USER_STATE,
  payload: value,
});

export const userState = (state = { name: "Josh" }, action) => {
  switch (action.type) {
    case UPDATE_USER_STATE:
      return action.payload;

    default:
      return state;
  }
};

const INCREMENT_COUNTER = "INCREMENT_COUNTER";

export const incrementCounter = () => ({ type: INCREMENT_COUNTER });

export const counterState = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: combineReducers({ appState, userState, counterState }),
});
