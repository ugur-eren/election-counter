import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export type VotesState = {
  rte: number;
  kk: number;
  logs: {
    to: 'rte' | 'kk';
    vote: 'up' | 'down';
    time: number;
  }[];
};

const initialState: VotesState = {
  rte: 0,
  kk: 0,
  logs: [],
};

export const VotesSlice = createSlice({
  name: 'votes',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<'rte' | 'kk'>) => {
      state[action.payload] += 1;

      state.logs.push({
        to: action.payload,
        vote: 'up',
        time: Date.now(),
      });
    },

    decrement: (state, action: PayloadAction<'rte' | 'kk'>) => {
      state[action.payload] -= 1;

      state.logs.push({
        to: action.payload,
        vote: 'down',
        time: Date.now(),
      });
    },

    clear: () => initialState,
  },
});

export const VotesActions = VotesSlice.actions;
export const VotesReducer = VotesSlice.reducer;
