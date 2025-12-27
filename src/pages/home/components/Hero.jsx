import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <span className="inline-block mb-3 px-4 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-full">
            Fast & Fresh Delivery
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            Healthy Food <br />
            Delivered <span className="text-green-600">To Your Door</span>
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-xl">
            Order fresh, hygienic, and delicious meals from top restaurants
            near you — fast, easy, and reliable.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">
              Order Now
            </button>

            <button className="border border-green-600 text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-600 hover:text-white transition">
              View Menu
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/src/assets/images/food.png"
            alt="Food"
            className="w-[90%] max-w-md rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
