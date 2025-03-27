"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/png/logo.png";
import HeaderNav from "./components/header-nav";
import searchIcon from "@/assets/png/search-icon.png";
import cartIcon from "@/assets/png/cart-icon.png";
import loginIcon from "@/assets/png/login.png";
import Button from "../ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Header = () => {
  const { products } = useSelector((state: RootState) => state.cart);
  return (
    <header className="pt-[26px]">
      <div className="container pb-[17px] border-b border-[#46a359b0] flex items-center justify-between">
        <Link href={"/"}>
          <Image width={150} height={34} src={logo.src} alt="site logo"></Image>
        </Link>
        <HeaderNav />
        <div className="flex items-center gap-[30px]">
          <button>
            <Image
              src={searchIcon.src}
              width={20}
              height={20}
              alt="search icon"
            />
          </button>
          <button className="relative">
            <p className="absolute translate-x-[40%] stroke-[2px] stroke-white right-0 w-[14px] h-[14px] flex items-center justify-center rounded-full bg-[#46A358] text-[11px] font-medium text-white">
              {products.length}
            </p>
            <Image src={cartIcon.src} width={24} height={24} alt="cart icon" />
          </button>
          <Button variant="primary">
            <Image
              src={loginIcon.src}
              alt="login icon"
              width={20}
              height={20}
            />
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
