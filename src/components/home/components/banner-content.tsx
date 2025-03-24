import Button from "@/components/ui/button";
import Image from "next/image";
import React from "react";

import bannerImg1 from '@/assets/png/banner_img1.png'

const BannerContent = () => {
  return (
    <div className="flex items-center justify-between px-[40px] bg-gradient-to-br from-[rgba(245,245,245,0.5)] to-[rgba(245,245,245,0.5)]">
      <div className="">
        <p className="font-medium text-[14px]/[114%] uppercase">
          Welcome to GreenShop
        </p>
        <h1 className="max-w-[530px] font-[900] uppercase text-[#3d3d3d] text-[70px]/[100%] mb-2">
          Let’s Make a Better <span className="text-[#46a358]">Planet</span>
        </h1>
        <p className="max-w-[557px] text-[14px]/[171%] text-[#727272] mb-[40px]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plants to create an unique Urban Jungle. Order your
          favorite plants!
        </p>
        <Button variant="primary" classes="px-[27px] font-bold">
          SHOP NOW
        </Button>
      </div>
      <div>
        <Image width={507} height={450} alt="banner img" src={bannerImg1.src} />
      </div>
    </div>
  );
};

export default BannerContent;
