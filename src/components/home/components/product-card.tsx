"use client";
import CartIcon from "@/assets/components/cart-icon";
import LikeIcon from "@/assets/components/like-icon";
import SearchIcon from "@/assets/components/search-icon";
import Image from "next/image";
import React from "react";

const ProductDiscountBox = ({ discount }: { discount: number }) => {
  return (
    <>
      <div className="absolute left-0 top-3.5 py-[5px] px-[9px] bg-[#46A358]">
        <p className="font-medium text-white">{discount}% OFF</p>
      </div>
    </>
  );
};

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
    <div className="relative">
      {discount ? <ProductDiscountBox discount={discount} /> : ""}
      <div className="mb-3 group relative bg-[#fbfbfb]">
        <div className="absolute top-0 w-full bg-[#46a358] h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
        <Image src={img} alt="card image" width={250} height={250} />
        <div className="absolute w-full flex items-center justify-center gap-6 bottom-0 opacity-0 group-hover:bottom-2 group-hover:opacity-100 transition-all duration-200">
          <button className="w-[40px] h-[40px] rounded-[4px] bg-white flex items-center justify-center hover:text-[#46a358]">
            <CartIcon />
          </button>
          <button className="w-[40px] h-[40px] rounded-[4px] bg-white flex items-center justify-center hover:text-red-500">
            <LikeIcon />
          </button>
          <button className="w-[40px] h-[40px] rounded-[4px] bg-white flex items-center justify-center ">
            <SearchIcon />
          </button>
        </div>
      </div>
      <h3 className="text-[#3d3d3d]">{name}</h3>
      {discount ? (
        <div className="flex items-center gap-[17px]">
          <p className="font-bold text-[#46a358]">
            ${discount_price?.toFixed(2)}
          </p>{" "}
          <p className="text-[#a5a5a5] line-through text-[18px]">${price}</p>
        </div>
      ) : (
        <p className="font-bold text-[#46a358] text-[18px]">${price}</p>
      )}
    </div>
  );
};

export default ProductCard;
