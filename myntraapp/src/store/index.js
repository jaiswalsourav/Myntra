import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './itemSlice';



const myntraStore= configureStore({
    reducer: {  
        items: itemSlice.reducer,
    },
});

export const itemActions = itemSlice.actions;

export default myntraStore; 

   
