import { configureStore, createSlice } from "@reduxjs/toolkit";

const app = createSlice({
  name: "app",
  initialState: [],
  reducers: {
    push: (state, action) => [...state, action.payload],
  },
});

export const { push: pushAppState } = app.actions;

const counter = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
  },
});

export const { increment: incrementCounter } = counter.actions;

const user = createSlice({
  name: "user",
  initialState: { name: "Josh" },
  reducers: {
    update: (_, action) => action.payload,
  },
});

export const { update: updateUser } = user.actions;

export const store = configureStore({
  reducer: { app: app.reducer, counter: counter.reducer, user: user.reducer },
});
