"use client";
import ShowPath from "@/components/ui/show-path";
import { RootState } from "@/store/store";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import CartProductCard from "./_components/cart-product-card";
import Button from "@/components/ui/button";

const ShoppingCart = () => {
  const { products, coupon_discount, shipping, sub_total, total } = useSelector(
    (state: RootState) => state.cart
  );
  const pathName = usePathname().split("/")[1];
  const showPathName = pathName.charAt(0).toUpperCase() + pathName.slice(1);

  const router = useRouter();
  const goToHomeFn = () => {
    router.push("/");
  };

  return (
    <section className="pb-[87px] pt-[36px]">
      <div className="container">
        <div className="mb-[51px]">
          <ShowPath paths={showPathName} />
        </div>
        <div className="flex items-start gap-[50px]">
          {products.length ? (
            <div className="w-2/3">
              <div className="flex items-center justify-between mb-[11px] py-[11px] border-b border-b-[#46a3599c] font-bold text-[16px] text-[#3d3d3d]">
                <p className="w-3/12">Products</p>
                <p className="w-2/12 text-center">Price</p>
                <p className="w-3/12 text-center">Quantity</p>
                <p className="w-2/12 text-left">Total</p>
              </div>
              <div className="flex flex-col gap-[10px]">
                {products.map((item) => (
                  <CartProductCard key={item._id} product={item} />
                ))}
              </div>
            </div>
          ) : (
            <div className="h-[300px] w-2/3 flex items-center justify-center no__data_box">
              <Button
                clickFn={goToHomeFn}
                variant="primary"
                classes="block mx-auto"
              >
                Go to shop
              </Button>
            </div>
          )}
          <div className="grow">
            <p className="mb-[11px] py-[9.5px] text-[18px] font-black text-[#3d3d3d] border-b border-b-[#46a3599c]">
              Cart Totals
            </p>
            <div className="">
              <p className="text-[#3d3d3d] mb-2">Coupon Apply</p>
              <form className="flex items-center justify-between w-full mb-[42px]">
                <input
                  className="grow px-2 py-[12px] block h-full border-2 border-[#46a358] rounded-l-[3px]"
                  type="text"
                  placeholder="Enter coupon code here..."
                />
                <button
                  className="py-[12px] pl-[35px] pr-[25px] bg-[#46a358] rounded-r-[3px] text-white font-bold "
                  type="submit"
                >
                  Apply
                </button>
              </form>
              <div className="flex items-center justify-between mb-[15px]">
                <p className="text-[15px] text-[#3d3d3d] font-normal">
                  Subtotal
                </p>
                <p className="font-semibold text-[#3d3d3d] text-[18px]">
                  ${sub_total}
                </p>
              </div>
              <div className="flex items-center justify-between mb-[21px]">
                <p className="text-[15px] text-[#3d3d3d] font-normal">
                  Coupon Discount
                </p>
                <p className="font-normal text-[#3d3d3d] text-[15px]">
                  (-) {coupon_discount}
                </p>
              </div>
              <div className="flex items-center justify-between mb-[8px]">
                <p className="text-[15px] text-[#3d3d3d] font-normal">
                  Shipping
                </p>
                <p className="font-semibold text-[#3d3d3d] text-[18px]">
                  ${shipping}
                </p>
              </div>
              <p className="text-right text-[14px] text-[#46a358] mb-[26px]">
                View shipping charge
              </p>
              <div className="flex items-center justify-between mb-[30px]">
                <p className="text-[17px] text-[#3d3d3d] font-bold">Total</p>
                <p className="font-semibold text-[#46a358] text-[18px]">
                  ${total}
                </p>
              </div>
              <Button
                variant="primary"
                classes="block w-full text-center mx-auto mb-[26px]"
              >
                <span className="w-full">Proceed To Checkout</span>
              </Button>
              <button className="block text-center text-[#46a358] w-full">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
