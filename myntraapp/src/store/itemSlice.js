import { createSlice } from '@reduxjs/toolkit';
//import { INITIAL_ITEM } from '../data/items';  



const itemSlice= createSlice({
    name: 'items',
    initialState: [],
        reducers : {
        addInitialItem: (state, action) => {
         console.log("adding items",state, action);
            return action.payload; // Replace the state with the initial items

        }  
        
    },
});

export const itemActions = itemSlice.actions;

export default itemSlice;


