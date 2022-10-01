    import {createSlice} from '@reduxjs/toolkit';

    const initialState = {
        cartItem:[],
        totalQuantity:0,
        totalAmount:0
    }

    const cartSlice = createSlice({
      name: "cart",
      initialState,
      reducers: {
        addItem(state, action) {
          const newItem = action.payload;
       
          const existingItem = state.cartItem.find(
            (item) => item.id === newItem.id
          );
          state.totalQuantity++;
           

          if (!existingItem) {
            state.cartItem.push({
              id: newItem.id,
              title: newItem.title,
              image01: newItem.image01,
              price: newItem.price,
              quantity: 1,
              totalPrice: newItem.price,
            });
          } else {
            existingItem.quantity++;
            existingItem.totalPrice =
              Number(existingItem.totalPrice) + Number(newItem.price);
          }

          state.totalAmount = state.cartItem.reduce(
            (total, item) => total + Number(item.price) * Number(item.quantity),

            0
          );
        },

        deleteItem(state,action){
          const id = action.payload
          const existngItem = state.cartItem.find(item => item.id === id)
          state.totalQuantity--
          
          if(existngItem.quantity ===1){
            state.cartItem = state.cartItem.filter(item=> item.id !== id)
           
          }
          else{
            existngItem.quantity--
            existngItem.totalPrice =
              Number(existngItem.totalPrice) - Number(existngItem.price);
           
              
          }

          state.totalAmount = state.cartItem.reduce(
            (total, item) => total + Number(item.price) * Number(item.quantity),
            0
          ); 
        }
      },
    });

    export const CartAction = cartSlice.actions
    export default cartSlice

