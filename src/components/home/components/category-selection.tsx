"use client";
import { CategoryResponse, FilterT } from "@/common/interface";
import Button from "@/components/ui/button";
import fetchWrapper from "@/service/fetcher";
import React, { useState, useEffect } from "react";

const CategorySelection = ({
  setFilter,
}: {
  setFilter: (obj: FilterT) => void;
}) => {
  const [minPrice, setMinPrice] = useState(39);
  const [maxPrice, setMaxPrice] = useState(1230);

  const [categories, setCategories] = useState<CategoryResponse["data"]>([]);
  const [selectedCategory, setSelectedCategory] = useState<{
    title: string;
    id: string;
  }>();

  const [size, setSize] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await fetchWrapper<CategoryResponse>("/categories");
        setCategories(data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedCategory");
    if (savedCategory) {
      setSelectedCategory(JSON.parse(savedCategory));
    }
  }, []);

  useEffect(() => {
    setFilter({
      category: selectedCategory?.id,
      maxPrice: maxPrice,
      minPrice: minPrice,
      size: size,
    });
  }, [minPrice, maxPrice, selectedCategory, size]);

  const handleSelect = (category: string, id: string) => {
    setSelectedCategory({ title: category, id });
    localStorage.setItem("selectedCategory", category);
  };

  return (
    <div className="bg-[#fbfbfb] py-4 pl-4.5 pr-6 w-[310px]">
      <h2 className="text-[#3d3d3d] text-[18px] mb-2 font-bold">Categories</h2>
      <ul className="mb-[36px]">
        {categories.map((item) => (
          <li
            key={item._id}
            className={`cursor-pointer p-2 ${
              selectedCategory?.title === item.name
                ? "text-green-600 font-bold"
                : ""
            }`}
            onClick={() => handleSelect(item.name, item._id)}
          >
            {item.name.replace(/^\w/, (c) => c.toUpperCase())}
          </li>
        ))}
      </ul>
      <div className="mb-[46px]">
        <h2 className="text-lg font-bold">Price Range</h2>

        <div className="relative mt-4">
          {/* Range Slider */}
          <input
            type="range"
            min="0"
            max="1000"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="absolute w-[50%] left-0 h-2 bg-gray-300 rounded-l-lg appearance-none cursor-pointer"
            style={{ zIndex: 2 }}
          />
          <input
            type="range"
            min="1000"
            max="2000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="absolute w-[50%] right-0 h-2 bg-gray-300 rounded-r-lg appearance-none cursor-pointer"
            style={{ zIndex: 2 }}
          />

          {/* Progress Bar */}
          <div
            className="absolute h-2 bg-green-500 rounded-lg"
            style={{
              left: `${(minPrice / 2000) * 100}%`,
              right: `${100 - (maxPrice / 2000) * 100}%`,
            }}
          />
        </div>

        {/* Price Value */}
        <p className="mt-10 text-lg font-semibold">
          Price: <span className="text-green-600">${minPrice}</span> –{" "}
          <span className="text-green-600">${maxPrice}</span>
        </p>

        {/* Filter Button */}
        <Button variant="primary" classes="px-[25px]">
          Filter
        </Button>
      </div>
      <div className="">
        <h2 className="text-[#3d3d3d] text-[18px] mb-2 font-bold">Size</h2>
        <ul className="pl-[12px] flex flex-col gap-4">
          <li>
            <button
              className={`${
                size !== "small"
                  ? "text-[#3d3d3d] text-[15px]"
                  : "font-bold text-[#46a358]"
              }`}
              onClick={() => setSize("small")}
            >
              Small
            </button>
          </li>
          <li>
            <button
              className={`${
                size !== "medium"
                  ? "text-[#3d3d3d] text-[15px]"
                  : "font-bold text-[#46a358]"
              }`}
              onClick={() => setSize("medium")}
            >
              Medium
            </button>
          </li>
          <li>
            <button
              className={`${
                size !== "large"
                  ? "text-[#3d3d3d] text-[15px]"
                  : "font-bold text-[#46a358]"
              }`}
              onClick={() => setSize("large")}
            >
              Large
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategorySelection;
