import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const plant = action.payload;
      const existing = state.items.find(i => i.id === plant.id);
      if (existing) existing.quantity++;
      else state.items.push({ ...plant, quantity: 1 });
    },
    increase(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity++;
    },
    decrease(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },
    remove(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    clear(state) {
      state.items = [];
    }
  }
});

export const { addItem, increase, decrease, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;