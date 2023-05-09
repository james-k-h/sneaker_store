import React from "react";
import ProductItem from "./ProductItem";

const FeaturedProducts = ({ products }) => {
  return (
    <div
      id="featured"
      className="h-full w-full flex justify-center mt-[20rem] "
    >
      <div className="h-full w-10/12 mx-auto">
        <h2 className="mb-8 text-3xl text-[#333] text-emerald-500 font-bold">Featured Products</h2>
        <div className="grid grid-cols-3 gap-16">
          {products
            .filter((_product) => _product.featured)
            .map((product) => (
              <ProductItem key={product._id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;