import React from "react";
import CategorySelection from "./components/category-selection";
import CategoryStatus from "./components/category-status";
import ProductCard from "./components/product-card";
import fetchWrapper from "@/service/fetcher";

const Categories = async () => {
  const data = await fetchWrapper("/products", {
    next: {
      tags: ["products_list"],
    },
  });
  console.log(data);
  
  return (
    <section className="pt-[40] pb-[94px]">
      <div className="container flex items-start gap-[50px]">
        <CategorySelection />
        <div>
          <CategoryStatus />
          <div>
            {/* <ProductCard /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
