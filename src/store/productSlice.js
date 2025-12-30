/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import axios from "axios";
const STATUSES={
    SUCCESS:'success',
    LOADING:'loading',
    ERROR:"error"
} 
const ProductSlice=createSlice({
    name:"product",
    initialState:{
        data:[],
        status:STATUSES.SUCCESS
    }, 
    reducers:{
        setProducts(state,action){
state.data=action.payload
        }, 
        setStatus(state,action){
            state.status=action.payload
        }
    } , 
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending,(state,action)=>{
            state.status=STATUSES.LOADING
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status=STATUSES.SUCCESS 
            state.data=action.payload
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.status=STATUSES.ERROR
        })


 }, 
 
})  
export const{setProducts,setStatus}=ProductSlice.actions
export default ProductSlice.reducer
 export const fetchProducts=createAsyncThunk('products/fetch',async()=>{
   const response=await  axios.get("http://localhost:3000/api/product")   
   const data=response.data.data.product
   return data
})
