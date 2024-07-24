import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        id:[],   
    },
    reducers:{
        
        addItem: (state,action) => {
            let tempId = action.payload.card.info.id
            function FindId (value) {
              if(value === tempId){ 
              return true;
              } else{
              return false;
             }
            }
               
               if(state.id.find(FindId) && (state.id)){
                state.id.push(tempId)
               }else{

                   state.items.push(action.payload)
                   state.id.push(tempId)
       
               }


        
            
        
        },
        removeItem: (state, action) => {
          let tempId = action.payload.card.info.id;
          let index = state.id.indexOf(tempId);
         
          if (index !== -1) {
              // Remove the item ID from the id array
              state.id.splice(index, 1);

              
              if(!(state.id.includes(tempId))){
                // Remove the item from the items array
                state.items = state.items.filter(item => item.card.info.id !== tempId);
             }
             

              // If the id array is empty, clear the items array
              if (state.id.length === 0) {
                  state.items = [];
         
              }
          }
        
      },
      clearCart: (state) => {
          state.items = [];
          state.id = [];
      }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;