"use client";

import DeleteIcon from "@/assets/components/delete-icon";
import { CartProduct } from "@/store/slice/product-cart";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import {
  productIncrement,
  productDecrement,
  removeCart,
} from "@/store/slice/product-cart";

const CartProductCard = ({ product }: { product: CartProduct }) => {
  const dispatch = useDispatch();

  const incrementFn = () => {
    if (product.order_quantity <= product.quantity) {
      dispatch(productIncrement({ id: product._id }));
    }
  };
  const decrementFn = () => {
    if (product.order_quantity > 1) {
      dispatch(productDecrement({ id: product._id }));
    } else if (
      product.order_quantity === 1 &&
      product.order_quantity - 1 === 0
    ) {
      dispatch(removeCart({ id: product._id }));
    }
  };

  const removeFn = () => {
    dispatch(removeCart({ id: product._id }));
  };

  return (
    <div className="bg-[#fbfbfb] pr-6 flex items-center justify-between border-[#ddd]">
      {/* Products */}
      <div className="w-3/12 flex items-center gap-4">
        <Image
          src={product.images[0]}
          width={70}
          height={70}
          alt="product image"
        />
        <div>
          <p className="text-[#3d3d3d] text-[16px] font-medium">
            {product.name}
          </p>
          {/* <p className="text-[#727272] text-sm">SKU: 1995751877966</p> */}
        </div>
      </div>

      {/* Price, Quantity, Total */}
      {/* Price */}
      <p className="w-2/12 text-center text-[#727272] text-[16px]">
        ${product.discount_price}
      </p>

      {/* Quantity */}
      <div className="w-3/12 flex items-center justify-center gap-3">
        <button
          onClick={decrementFn}
          className="w-[23px] h-[26px] rounded-full bg-[#46A358] flex items-center justify-center text-white text-[18px]"
        >
          <span>-</span>
        </button>
        <p className="text-[17px] text-[#3d3d3d] font-normal">
          {product.order_quantity}
        </p>
        <button
          onClick={incrementFn}
          className="w-[23px] h-[26px] rounded-full bg-[#46A358] flex items-center justify-center text-white text-[18px]"
        >
          <span>+</span>
        </button>
      </div>

      {/* Total & Delete */}
      <div className="w-2/12 flex items-center justify-between">
        <p className="font-bold text-[#46a358] text-[16px]">
          ${product.total_price}
        </p>
        <button onClick={removeFn}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
