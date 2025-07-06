import { createSlice } from '@reduxjs/toolkit';
//import { INITIAL_ITEM } from '../data/items';  



const bagSlice= createSlice({
    name: 'bag',
    initialState: ["003"],
        reducers : {
        addToBag: (state, action) => {
           // console.log("adding items",state, action);
             state.push(action.payload); // Replace the state with the initial items
             },
        removeFromBag: (state, action) => {
            // console.log("removing items",state, action);
            return state.filter(item => item.id !== action.payload); // Remove item by id
        }  
        
    },
});

export const bagActions = bagSlice.actions;

export default bagSlice;


