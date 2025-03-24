"use client";
import Image from "next/image";
import React from "react";

const ProductCard = ({
  name,
  price,
  discount,
  discount_price,
  img,
}: {
  name: string;
  price: number;
  discount?: number;
  discount_price?: number;
  img: string;
}) => {
  return (
    <div>
      <div className="mb-3">
        <Image src={img} alt="card image" />
      </div>
      <h3 className="text-[#3d3d3d] mb-1.5">{name}</h3>
      {discount ? (
        <div className="flex items-center gap-[17px]">
          <p className="font-bold text-[#46a358]">
            ${discount_price?.toFixed(2)}
          </p>{" "}
          <p className="text-[#a5a5a5] line-through text-[18px]">{price}</p>
        </div>
      ) : (
        <p className="font-bold text-[#46a358]">${price}</p>
      )}
    </div>
  );
};

export default ProductCard;
