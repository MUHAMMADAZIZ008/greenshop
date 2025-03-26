"use client";
import React, { useEffect, useState } from "react";
import useGetProduct from "../_service/query/use-get-product";
import { useParams, usePathname } from "next/navigation";
import ShowPath from "@/components/ui/show-path";
import Image from "next/image";
import { ProductT } from "@/common/interface";
import ProductLoading from "@/components/ui/product-loading";
import productImg from "@/assets/png/product-img2.png";

const ProductDetail = () => {
  const params = useParams();
  const [id, categoryId] = Array.isArray(params?.prams)
    ? params.prams
    : ["defaultId", "defaultCategory"];

  const { data, isLoading, error } = useGetProduct(id, categoryId);

  const [product, setProduct] = useState<ProductT>();

  useEffect(() => {
    setProduct(data?.data);
  }, [data]);

  const pathName = usePathname().split("/")[1];

  //selection
  const [size, setSize] = useState<string>();

  return (
    <section className="pt-[36px] pb-[92px]">
      <div className="container">
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
              <div className="flex items-center gap-2.5">
                {product?.size.map((item, index) => (
                  <button
                    onClick={()=> setSize(item)}
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
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductDetail;
