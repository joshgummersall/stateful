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

const TOUCH_USER_STATE = "TOUCH_USER_STATE";

export const touchUserState = () => ({ type: TOUCH_USER_STATE });

export const userState = (state = {}, action) => {
  switch (action.type) {
    case TOUCH_USER_STATE:
      return { ...state };

    default:
      return state;
  }
};

export const thunkAction = (data) => async (dispatch) => {
  dispatch(pushAppState(data));
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch(touchUserState());
};

export const store = configureStore({
  reducer: combineReducers({ appState, userState }),
});
