"use client";
import React, { useEffect, useState } from "react";
import useGetProduct from "../_service/query/use-get-product";
import { useParams, usePathname } from "next/navigation";
import ShowPath from "@/components/ui/show-path";
import Image from "next/image";
import { ProductT } from "@/common/interface";
import ProductLoading from "@/components/ui/product-loading";
import productImg from "@/assets/png/product-img2.png";
import Button from "@/components/ui/button";
import LikeIcon from "@/assets/components/like-icon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  addToCart,
  removeCart,
  productIncrement,
  productDecrement,
  CartProduct,
  updateProduct,
} from "@/store/slice/product-cart";
import RelatedProducts from "../_components/related-products";

const ProductDetail = () => {
  const { products } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [orderCount, setOrderCount] = useState<number>(1);
  const params = useParams();
  const [id, categoryId] = Array.isArray(params?.prams)
    ? params.prams
    : ["defaultId", "defaultCategory"];

  const { data, isLoading } = useGetProduct(id, categoryId);
  const [product, setProduct] = useState<ProductT>();
  const [isCart, setIsCart] = useState<CartProduct | undefined>();

  useEffect(() => {
    if (data?.data) {
      setProduct(data.data);
      setOrderCount(data.data.quantity > 2 ? 1 : 0);
      setSize(data.data.size?.[0] || "");
    }
  }, [data]);

  const pathName = usePathname().split("/")[1];

  // Mahsulot hajmini tanlash
  const [size, setSize] = useState<string>();

  //size fn
  const changeSizeFn = (size: string) => {
    setSize(size);
    if (isCart && product) {
      dispatch(updateProduct({ _id: product._id, order_size: size }));
    }
  };

  useEffect(() => {
    const currentProduct = products.find((item) => item._id === product?._id);
    if (currentProduct) {
      setSize(currentProduct.order_size);
      setOrderCount(currentProduct.order_quantity);
      setIsCart(currentProduct);
    }
  }, [products, product]);

  // Counter funksiyalari
  const addCount = () => {
    if (product?.quantity && orderCount < product.quantity) {
      setOrderCount((prev) => prev + 1);
      if (isCart && product) dispatch(productIncrement({ id: product._id }));
    }
  };

  const minusCount = () => {
    if (orderCount > 1) {
      setOrderCount((prev) => prev - 1);
      if (isCart && product) dispatch(productDecrement({ id: product._id }));
    }
  };

  // Savatchaga qo'shish yoki olib tashlash
  const addToCartFn = () => {
    if (!isCart && product) {
      const newCartItem = {
        ...product,
        order_quantity: orderCount,
        order_size: size!,
        total_price: product.price * orderCount,
      };
      dispatch(addToCart(newCartItem));
      setIsCart(newCartItem);
    } else if (isCart && product) {
      dispatch(removeCart({ id: product._id }));
      setIsCart(undefined);
    }
  };
  return (
    <section className="pt-[36px]">
      <div className="container pb-[92px]">
        <div className="mb-[43px]">
          <ShowPath paths={pathName} />
        </div>
        {isLoading ? (
          <ProductLoading />
        ) : (
          <div className="grid grid-cols-2 gap-[52px]">
            <div className="grid grid-cols-5 grid-rows-4 gap-x-[29px] gap-y-[16px]">
              <div className="bg-[#fbfbfb] relative rounded-[6px] w-[100px] h-[100px]">
                <Image
                  src={product?.images[0] || productImg.src}
                  alt="Product Image"
                  fill
                  className="object-cover repeat-0 "
                />
              </div>
              <div className="bg-[#fbfbfb] relative rounded-[6px] col-span-4 row-span-4">
                <Image
                  src={product?.images[1] || productImg.src}
                  alt="Product Image"
                  fill
                  className="object-cover repeat-0 "
                />
              </div>
              <div className="bg-[#fbfbfb] relative rounded-[6px] w-[100px] h-[100px]">
                <Image
                  src={product?.images[0] || productImg.src}
                  alt="Product Image"
                  fill
                  className="object-cover repeat-0 "
                />
              </div>
              <div className="bg-[#fbfbfb] relative rounded-[6px] w-[100px] h-[100px]">
                <Image
                  src={product?.images[0] || productImg.src}
                  alt="Product Image"
                  fill
                  className="object-cover repeat-0 "
                />
              </div>
              <div className="bg-[#fbfbfb] relative rounded-[6px] w-[100px] h-[100px]">
                <Image
                  src={product?.images[0] || productImg.src}
                  alt="Product Image"
                  fill
                  className="object-cover repeat-0 "
                />
              </div>
            </div>
            <div className="">
              <div className="pb-3 border-b border-b-[#46a3587f] mb-4">
                <h2 className="text-[#3d3d3d] text-[28px] font-bold mb-5">
                  {product?.name}
                </h2>
                <div>
                  {product?.discount ? (
                    <p className="text-[#46a358] text-[22px] font-bold">
                      ${product.discount_price}
                    </p>
                  ) : (
                    <p className="text-[#46a358] text-[22px] font-bold">
                      ${product?.price}
                    </p>
                  )}
                </div>
              </div>
              <p className="font-semibold text-[#3d3d3d] text-[15px] mb-[10px]">
                Short Description:
              </p>
              <p className="text-[#727272] leading-[171%] mb-[24px]">
                {product?.description}
              </p>
              <p className="font-semibold text-[#3d3d3d] text-[15px] mb-[10px]">
                Size:
              </p>
              <div className="flex items-center gap-2.5 mb-[23px]">
                {product?.size.map((item, index) => (
                  <button
                    onClick={() => changeSizeFn(item)}
                    key={index}
                    className={`w-[30px] flex items-center justify-center border-2 text-[14px] h-[30px] rounded-full ${
                      size === item
                        ? "border-[#46a358] font-bold text-[#46a358]"
                        : "border-[#eaeaea] font-normal text-[#727272]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-[23px]">
                  <button
                    onClick={minusCount}
                    className="w-[33px] h-[38px] rounded-full flex items-center justify-center bg-[#46A358] text-white text-[28px]"
                  >
                    -
                  </button>
                  <p>{orderCount}</p>
                  <button
                    onClick={addCount}
                    className="w-[33px] h-[38px] rounded-full flex items-center justify-center bg-[#46A358] text-white text-[28px]"
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center gap-[10px]">
                  <Button
                    variant="primary"
                    classes="px-[32px] py-[11px] uppercase font-bold"
                  >
                    BUY NOW
                  </Button>
                  <Button
                    clickFn={addToCartFn}
                    variant={isCart ? "primary" : "outline"}
                    classes="px-[20px] py-[11px] uppercase font-bold"
                  >
                    Add to cart
                  </Button>
                  <Button
                    variant="outline"
                    classes="px-[0px] py-[11px] uppercase font-bold"
                  >
                    <LikeIcon />
                  </Button>
                </div>
              </div>
              <div>
                <p className="flex items-center text-[#a5a5a5] mb-[10px]">
                  SKU<span className="text-[#727272]">: 1995751877966</span>
                </p>
                <p className="flex items-center text-[#a5a5a5] mb-[10px]">
                  Categories{" "}
                  <span className="text-[#727272]">
                    : {product?.category.name}
                  </span>
                </p>
                <p className="flex items-center text-[#a5a5a5] mb-[10px]">
                  Tags{" "}
                  <span className="text-[#727272]">
                    :{" "}
                    {product?.category.tags.map((item, index) =>
                      product.category.tags.length - 1 !== index
                        ? String(item) + ","
                        : String(item)
                    )}
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <RelatedProducts
        id={product?._id || ""}
        categoryId={product?.category._id || ""}
      />
    </section>
  );
};

export default ProductDetail;
