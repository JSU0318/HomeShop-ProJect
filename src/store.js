import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeName(state) {
      return { name: "park", age: 20 };
    },
    increase(state, action) {
      state.age += action.payload;
    },
  },
});

export let { changeName, increase } = user.actions;

let cart = createSlice({
  name: "cart",
  initialState: [
    {
      id: 0,
      name: "White and Black",
      count: 1,
    },
    {
      id: 2,
      name: "Grey Yordan",
      count: 1,
    },
    {
      id: 1,
      name: "Red Knit",
      count: 1,
    },
  ],
  reducers: {
    addCount(state, action) {
      let a = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[a].count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export let { addCount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
