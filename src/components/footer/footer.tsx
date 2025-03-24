import React from "react";
import Link from "next/link";
import Image from "next/image";
import footerImg1 from "@/assets/png/footer-img1.png";
import footerImg2 from "@/assets/png/footer-img2.png";
import footerImg3 from "@/assets/png/footer-img3.png";
import logo from "@/assets/png/logo.png";
import locationIcon from "@/assets/png/location-icon.png";
import mailIcon from "@/assets/png/mail-icon.png";
import phoneIcon from "@/assets/png/phone-icon.png";
import faceBookIcon from "@/assets/png/facebook-icon.png";
import instagramIcon from "@/assets/png/instagram-icon.png";
import twitterIcon from "@/assets/png/twitter-icon.png";
import linkedinIcon from "@/assets/png/linkedin-icon.png";
import unionIcon from "@/assets/png/union-icon.png";
import payIcon from "@/assets/png/pay-icons.png";

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

const footerLinks = [
  {
    title: "My Account",
    links: [
      { name: "My Account", link: "/my-account" },
      { name: "Our stores", link: "/stores" },
      { name: "Contact us", link: "/contact" },
      { name: "Career", link: "/career" },
      { name: "Specials", link: "/specials" },
    ],
  },
  {
    title: "Help & Guide",
    links: [
      { name: "Help Center", link: "/help-center" },
      { name: "How to Buy", link: "/how-to-buy" },
      { name: "Shipping & Delivery", link: "/shipping-delivery" },
      { name: "Product Policy", link: "/product-policy" },
      { name: "How to Return", link: "/how-to-return" },
    ],
  },
  {
    title: "Categories",
    links: [
      { name: "House Plants", link: "/house-plants" },
      { name: "Potter Plants", link: "/potter-plants" },
      { name: "Seeds", link: "/seeds" },
      { name: "Small Plants", link: "/small-plants" },
      { name: "Accessories", link: "/accessories" },
    ],
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
      <div className="container border-y border-[#D7E9DA] py-[27px] bg-[#46a35819] flex items-center gap-[87px]">
        <Image src={logo.src} alt="site logo" width={150} height={34} />
        <div className="flex items-center gap-[60px]">
          <div className="w-[205px] flex items-center gap-[10px]">
            <Image src={locationIcon.src} width={20} height={20} alt="icon" />
            <p className="text-[#3d3d3d] text-[14px]/[157%] ">
              70 West Buckingham Ave. Farmingdale, NY 11735
            </p>
          </div>
          <div className="w-[205px] flex items-center gap-[10px]">
            <Image src={mailIcon.src} width={20} height={20} alt="icon" />
            <p className="text-[#3d3d3d] text-[14px]/[157%] ">
              contact@greenshop.com
            </p>
          </div>
          <div className="w-[205px] flex items-center gap-[10px]">
            <Image src={phoneIcon.src} width={20} height={20} alt="icon" />
            <p className="text-[#3d3d3d] text-[14px]/[157%]">
              +88 01911 717 490
            </p>
          </div>
        </div>
      </div>
      <div className="container border-b border-b-[#46a35833] py-[33px] from-[#f5f5f580] to-[#f5f5f580] flex items-start justify-between gap-[173px]">
        <div className="flex items-start justify-between grow">
          {footerLinks.map((item, index) => (
            <div key={index}>
              <h3 className="font-bold mb-2.5 text-[#3d3d3d] text-[18px]">
                {item.title}
              </h3>
              <ul className="flex flex-col gap-[10  px]">
                {item.links.map((item) => (
                  <li key={item.name}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <div className="mb-8">
            <h3 className="font-bold text-[18px] text-[#3d3d3d] mb-5">
              Social Media
            </h3>
            <div className="flex items-center gap-[10px]">
              <Link href={"#"}>
                <Image
                  src={faceBookIcon.src}
                  width={30}
                  height={30}
                  alt="icon"
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={instagramIcon.src}
                  width={30}
                  height={30}
                  alt="icon"
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={twitterIcon.src}
                  width={30}
                  height={30}
                  alt="icon"
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={linkedinIcon.src}
                  width={30}
                  height={30}
                  alt="icon"
                />
              </Link>
              <Link href={"#"}>
                <Image src={unionIcon.src} width={30} height={30} alt="icon" />
              </Link>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-[18px] text-[#3d3d3d] mb-5">
              We accept
            </h3>
            <div className="flex items-center gap-[10px]">
              <Link href={"#"}>
                <Image
                  src={payIcon.src}
                  width={payIcon.width}
                  height={payIcon.height}
                  alt="icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-[#3d3d3d] pt-2 pb-3">© 2021 GreenShop. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
