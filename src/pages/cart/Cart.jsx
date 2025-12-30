import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <section className="w-full bg-white py-10 px-8 mt-3.5">
      <h1 className="text-center text-3xl font-semibold mb-10">
        My Shopping Cart
      </h1>

      <div className="flex gap-6 max-w-7xl mx-auto">
        <div className="flex-1 bg-white rounded-xl p-6 shadow">

          <div className="flex text-sm text-gray-500 border-b pb-3 font-medium">
            <div className="w-2/5">Product</div>
            <div className="w-1/5 text-center">Price</div>
            <div className="w-1/5 text-center">Qty</div>
            <div className="w-1/5 text-center">Subtotal</div>
          </div>

          {cartItems.length === 0 && (
            <p className="text-center py-10 text-gray-400">
              Your cart is empty
            </p>
          )}

          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center py-5 border-b">

              <div className="w-2/5 flex items-center gap-3">
                <img
                  src={`http://localhost:3000${item.ProductImage}`}
                  alt={item.ProductName}
                  className="w-20 h-20 object-cover"
                />
                <div>
                  <p className="font-medium">{item.ProductName}</p>
                  <button
                    onClick={() => dispatch(remove(item._id))}
                    className="text-red-500 text-sm hover:underline mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="w-1/5 text-center">
                ${item.ProductPrice}
              </div>

              <div className="w-1/5 text-center">
                <span className="px-4 py-2 border rounded-full">
                  {item.ProductStockQty}
                </span>
              </div>

              <div className="w-1/5 text-center font-medium">
                ${item.ProductPrice * item.ProductStockQty}
              </div>
            </div>
          ))}
        </div>

        <div className="w-[380px] bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-medium mb-4">Cart Total</h2>

          <div className="flex justify-between py-3 border-b">
            <span>Total Items</span>
            <span>{cartItems.length}</span>
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
