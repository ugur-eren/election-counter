import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

export const selectVotes = (state: RootState) => state.votes;

export const selectRTEVotes = createSelector(selectVotes, (votes) => votes.rte);
export const selectKKVotes = createSelector(selectVotes, (votes) => votes.kk);
export const selectLogs = createSelector(selectVotes, (votes) => votes.logs);
export const selectLogsReverse = createSelector(selectLogs, (logs) => logs.slice().reverse());

export const selectWinner = createSelector(selectVotes, (votes) => {
  const {rte, kk} = votes;

  if (rte > kk) {
    return {
      winner: 'rte',
      diff: rte - kk,
    };
  }

  return {
    winner: 'kk',
    diff: kk - rte,
  };
});
