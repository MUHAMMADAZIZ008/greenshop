"use client";
import React, { useEffect, useState } from "react";

const categoryStatus = [
  {
    name: "All Plants",
  },
  {
    name: "New Arrivals",
  },
  {
    name: "Sale",
  },
];

const CategoryStatus = () => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  useEffect(() => {
    const saveStatus = localStorage.getItem("categoryStatus");
    if (saveStatus) {
      setSelectedStatus(saveStatus);
    }
  }, []);

  const handleSelect = (name: string) => {
    setSelectedStatus(name);
    localStorage.setItem("categoryStatus", name);
  };
  return (
    <div className="mb-[30px]">
      <ul className="flex items-center gap-[37px]">
        {categoryStatus.map((item) => (
          <li
            key={item.name}
            className={`${
              selectedStatus === item.name
                ? "text-[#46a358] font-bold border-b-2 border-b-[#46a358]"
                : "text-[#3d3d3d] font-normal"
            } text-[15px]`}
          >
            <button onClick={() => handleSelect(item.name)}>{item.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryStatus;
