"use client";
import { CategoryResponse } from "@/common/interface";
import fetchWrapper from "@/service/fetcher";
import React, { useState, useEffect } from "react";

const CategorySelection = () => {
  const [categories, setCategories] = useState<CategoryResponse["data"]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
      setSelectedCategory(savedCategory);
    }
  }, []);

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
    localStorage.setItem("selectedCategory", category);
  };

  return (
    <div className="bg-[#fbfbfb] p-4">
      <h2 className="text-[#3d3d3d] text-[18px] mb-2">Categories</h2>
      <ul>
        {categories.map((item) => (
          <li
            key={item._id}
            className={`cursor-pointer p-2 ${
              selectedCategory === item.name ? "text-green-600 font-bold" : ""
            }`}
            onClick={() => handleSelect(item.name)}
          >
            {item.name.replace(/^\w/, (c) => c.toUpperCase())}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySelection;
