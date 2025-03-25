"use client";
import React, { useEffect, useState, useTransition } from "react";
import CategorySelection from "./components/category-selection";
import CategoryStatus from "./components/category-status";
import ProductCard from "./components/product-card";
import { useGetProductByQuery } from "./service/query/use-get-product";
import NextIcon from "@/assets/components/next-icon";
import { FilterT } from "@/common/interface";

const Categories = () => {
  const [filter, setFilter] = useState<FilterT>();
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, error } = useGetProductByQuery(filter);

  useEffect(() => {
    if (data?.totalCount) {
      const buttonCount = Math.ceil(data.totalCount / 9);
      setTotalPages(buttonCount);
    }
  }, [data]);

  useEffect(() => {
    setFilter({ ...filter, page: currentPage, limit: 9 });
  }, [currentPage]);

  return (
    <section className="pt-[40px] pb-[94px]">
      <div className="container flex items-start gap-[50px]">
        <CategorySelection setFilter={setFilter} />
        <div>
          <CategoryStatus />
          <div className="grid grid-cols-3 gap-[40px] mb-[90px]">
            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              data?.data?.map((item) => (
                <ProductCard
                  key={item._id}
                  img={item.images[0]}
                  name={item.name}
                  price={item.price}
                  discount={item.discount}
                  discount_price={item.discount_price}
                />
              ))
            )}
          </div>
          <div className="flex items-center justify-end gap-2.5">
            {totalPages > 4 ? (
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="w-[35px] rotate-180 h-[35px] rounded-[4px] flex items-center justify-center border-2 border-[#e5e5e5] font-normal"
              >
                <NextIcon />
              </button>
            ) : (
              ""
            )}

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                disabled={currentPage === index + 1}
                className={`flex items-center justify-center w-[35px] h-[35px] rounded-[4px] ${
                  index + 1 === currentPage
                    ? "bg-[#46A358] text-white text-[18px] font-bold"
                    : "border-2 border-[#e5e5e5] font-normal"
                }`}
              >
                {index + 1}
              </button>
            ))}
            {totalPages > 4 ? (
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="w-[35px] h-[35px] rounded-[4px] flex items-center justify-center border-2 border-[#e5e5e5] font-normal"
              >
                <NextIcon />
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
