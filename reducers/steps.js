import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 1,
};

export const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    step: (state, action) => {
      state.value=action.payload;
    },
  },
});

export const { step} = stepSlice.actions;
export default stepSlice.reducer;
