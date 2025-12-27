import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);



  return (
    <section className="w-full bg-white py-10 px-8 mt-3.5" >
      <h1 className="text-center text-3xl font-semibold mb-10">
        My Shopping Cart
      </h1>

      <div className="flex gap-6 max-w-7xl mx-auto">

        {/* LEFT – CART ITEMS */}
        <div className="flex-1 bg-white rounded-xl p-6 shadow">

          {/* Header */}
          <div className="flex text-sm text-gray-500 border-b pb-3 font-medium">
            <div className="w-2/5">Product</div>
            <div className="w-1/5 text-center">Price</div>
            <div className="w-1/5 text-center">Qty</div>
            <div className="w-1/5 text-center">Subtotal</div>
          </div>

          {/* Items */}
          {cartItems.length === 0 && (
            <p className="text-center py-10 text-gray-400">
              Your cart is empty
            </p>
          )}

          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center py-5 border-b"
            >
              {/* Product */}
              <div className="w-2/5 flex items-center gap-3">
                <img
                  src={`http://localhost:3000${item.ProductImage}`}
                  alt={item.ProductName}
                  className="w-20 h-20 object-cover"
                />
                <span className="font-medium">{item.name}</span>
              </div>

              {/* Price */}
              <div className="w-1/5 text-center">
                ${item.ProductPrice}
              </div>

              {/* Quantity */}
              <div className="w-1/5 text-center">
                <span className="px-4 py-2 border rounded-full">
                  {item.ProductStockQty}
                </span>
              </div>

              {/* Subtotal */}
              <div className="w-1/5 text-center font-medium">
                ${item.price * item.quantity}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT – SUMMARY */}
        <div className="w-[380px] bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-medium mb-4">Cart Total</h2>

          <div className="flex justify-between py-3 border-b">
            <span>Total Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="flex justify-between py-3 border-b">
            <span>Shipping</span>
            <span>Free</span>
          </div>

        

          <button className="w-full mt-6 py-4 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
