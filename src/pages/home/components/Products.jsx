/* eslint-disable react-hooks/set-state-in-effect */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../../../store/cartSlice";
const Products = () => { 
 const [product,setProducts]=useState([]) 
    const dispatch= useDispatch() 
 const fetchProducts=async()=>{
try {
    const response=await  axios.get("http://localhost:3000/api/product")  
if(response.status==200){
    setProducts(response.data.data.product)
console.log(response.data.data.product)
}
} catch (error) {
    console.log("error occured ",error)
    
}
 }  
 function addtocart(item){ 
 
    dispatch(add(item))


 }


 useEffect(() => {
     fetchProducts()
 }, []);
  return (
  <>
  <h2 className="text-center text-green-600 text-3xl font-bold">Trending Foods</h2>

  {
    product && product.length > 0 ? (
    product.map((item) => (
      <div key={item._id} className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <Link
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href="#"
        >
          <img
            className="object-cover"
           src={`http://localhost:3000${item.ProductImage}`}
            alt="product image"
          />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            39% OFF
          </span>
        </Link>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl tracking-tight text-slate-900">
              {item.ProductName}
            </h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">${item.ProductPrice}</span>
              <span className="text-sm text-slate-900 line-through">${item.ProductPrice}</span>
            </p>
         
          </div>
          <button onClick={()=>addtocart(item)}
         
            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center text-gray-500">No products available</p>
  )}
</>
  );
};

export default Products;
