import React from "react";
import footerImg1 from "@/assets/png/footer-img1.png";
import footerImg2 from "@/assets/png/footer-img2.png";
import footerImg3 from "@/assets/png/footer-img3.png";
import Image from "next/image";

const footerItems = [
  {
    img: footerImg1.src,
    title: "Garden Care",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
  {
    img: footerImg2.src,
    title: "Plant Renovation",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
  {
    img: footerImg3.src,
    title: "Watering Graden",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants.",
  },
];

const Footer = () => {
  return (
    <footer className="">
      <div className="container bg-gradient-to-br from-[rgba(245,245,245,0.5)] to-[rgba(245,245,245,0.5)] pt-8 pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-[35px]">
            {footerItems.map((item, index) => (
              <div
                className={`pr-[26px] w-[210px] flex flex-col justify-between ${
                  index !== footerItems.length - 1
                    ? "border-r border-r-[#46a35819]"
                    : "border-none"
                }`}
                key={index}
              >
                <Image
                  className="mb-[15px]"
                  src={item.img}
                  width={83}
                  height={90}
                  alt={item.title}
                />
                <h3 className="font-bold text-[17px] text-[#3d3d3d] mb-[9px ]">
                  {item.title}
                </h3>
                <p className="text-[14px]/[157%] text-[#727272]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="w-[400px]">
            <h3 className="font-bold text-[18px] mb-4.5">
              Would you like to join newsletters?
            </h3>
            <form className="w-full flex items-center mb-[17px]">
              <input
                className="py-[12px] pl-[12px] rounded-l-[6px] bg-white w-full"
                type="text"
                placeholder="enter your email address..."
              />
              <button className="py-[12px] rounded-r-[6px] font-bold text-white text-[18px] px-[25px] bg-[#46a358]">
                Join
              </button>
            </form>
            <p className="text-[13px]/[169%] text-[#727272]">
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
