import { createSlice } from '@reduxjs/toolkit';
//import { INITIAL_ITEM } from '../data/items';  



const fetchStatusSlice= createSlice({
    name: 'fetchStatus',
    initialState:
    {
        fetchDone: false,//'PENDING' AND 'DONE' are the two states of fetching
        currentlyFetching: false,
    },
    
        reducers: {
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
      state.fetchDone = false;
    },
    markFetchingDone: (state) => {
      state.currentlyFetching =false;
      state.fetchDone = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
      state.fetchDone = true;
    }  
        
    },
});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;