import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_ITEM } from '../data/items';  



const itemSlice= createSlice({
    name: 'item',
    initialState: INITIAL_ITEM,
        reducer : {
        addInitialItem: (state, action) => {
            return state;

        }  
        
    },
});

export default itemSlice;


