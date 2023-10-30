import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {formation: ''},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    mail: (state, action) => {
      state.value.mail=action.payload;
    },
    job: (state, action) => {
      state.value.job=action.payload;
    },
    formation: (state, action) => {
      state.value.formation=action.payload;
    },
    choice: (state, action) => {
      state.value.choice = action.payload
    },
    intel: (state, action) => {
      state.value.prenom = action.payload.prenom
      state.value.nom=action.payload.nom
      state.value.tel = action.payload.tel
    },
    cpf: (state, action) => {
      state.value.cpf = action.payload.cpf
    }
  },
});

export const { formation, choice, cpf, job, intel, mail } = userSlice.actions;
export default userSlice.reducer;
