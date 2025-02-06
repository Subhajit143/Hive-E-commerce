import { createSlice } from "@reduxjs/toolkit";
// import AddToCart from "../pages/AddToCart";
const initialState={
    products: [],
    userInfo :null,

}

export const hiveSlice = createSlice({
    name:'hive',
    initialState,
    reducers:{
        addToCart:(state,action)=>{       
           state.products.push({...action.payload,quantity:1});
           console.log("Updated Products:", state.products);
        },
        increaseQuantity:(state,action)=>{
            const existingProduct = state.products.find(
                (item)=>item._id === action.payload
            )
            if(existingProduct){
                existingProduct.quantity++;
            }
        },
        decreaseQuantity:(state,action)=>{
            const existingProduct = state.products.find(
                (item)=>item._id === action.payload
            )
            if(existingProduct){
                existingProduct.quantity--;
            }
        },
        deleteProduct:(state,action)=>{
           state.products = state.products.filter((item)=>item._id !== action.payload)
        },
        resetCart:(state)=>{
            state.products = [];
        },
       
        
    }
})


export const { addToCart ,increaseQuantity,decreaseQuantity,deleteProduct,resetCart} = hiveSlice.actions;
export default hiveSlice.reducer;