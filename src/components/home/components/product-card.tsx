"use client";
import CartIcon from "@/assets/components/cart-icon";
import LikeIcon from "@/assets/components/like-icon";
import SearchIcon from "@/assets/components/search-icon";
import { CartProduct } from "@/store/slice/product-cart";
import { RootState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart } from "@/store/slice/product-cart";
import { ProductT } from "@/common/interface";

const ProductDiscountBox = ({ discount }: { discount: number }) => {
  return (
    <>
      <div className="absolute left-0 top-3.5 py-[5px] px-[9px] z-20 bg-[#46A358]">
        <p className="font-medium text-white">{discount}% OFF</p>
      </div>
    </>
  );
};

const ProductCard = ({ item }: { item: ProductT }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.cart);

  const [product, setProduct] = useState<CartProduct | undefined>(undefined);

  useEffect(() => {
    const currentProduct = products.find((_item) => _item._id === item._id);
    if (currentProduct) {
      setProduct(currentProduct);
    }
  }, [products, product]);

  const addToCartFn = () => {
    
    if (!product) {
      dispatch(
        addToCart({
          ...item,
          order_quantity: 1,
          order_size: item.size[0],
          total_price: item.price,
        })
      );
      setProduct({
        ...item,
        order_quantity: 1,
        order_size: item.size[0],
        total_price: item.price,
      });
    } else {
      dispatch(removeCart({ id: item._id }));
      setProduct(undefined)
    }
  };

  return (
    <div className="relative">
      {item.discount ? <ProductDiscountBox discount={item.discount} /> : ""}
      <div className="mb-3 group relative bg-[#fbfbfb]">
        <div className="absolute top-0 w-full bg-[#46a358] h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
        <Image src={item.images[0]} alt="card image" width={250} height={250} />
        <div className="absolute w-full flex items-center justify-center gap-6 bottom-0 opacity-0 group-hover:bottom-2 group-hover:opacity-100 transition-all duration-200">
          <button
            onClick={addToCartFn}
            className={`w-[40px] h-[40px] rounded-[4px] bg-white flex items-center justify-center hover:text-[#46a358] ${
              product ? "text-[#46a358]" : "text-black"
            }`}
          >
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
      <Link href={`/product-detail/${item._id}/${item.category._id}`}>
        <div>
          <h3 className="text-[#3d3d3d]">{item.name}</h3>
          {item.discount ? (
            <div className="flex items-center gap-[17px]">
              <p className="font-bold text-[#46a358]">
                ${item.discount_price?.toFixed(2)}
              </p>{" "}
              <p className="text-[#a5a5a5] line-through text-[18px]">
                ${item.price}
              </p>
            </div>
          ) : (
            <p className="font-bold text-[#46a358] text-[18px]">
              ${item.price}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
