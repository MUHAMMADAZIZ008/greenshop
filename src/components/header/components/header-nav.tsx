"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    id: "home",
    title: "Home",
    href: "/",
  },
  {
    id: "shop",
    title: "Shop",
    href: "/shop",
  },
  {
    id: "plant_care",
    title: "Plant Care",
    href: "/plant-care",
  },
  {
    id: "blogs",
    title: "Blogs",
    href: "/blog",
  },
];

const HeaderNav = () => {
  const pathName = usePathname();

  return (
    <nav>
      <ul className="flex items-center gap-[50px]">
        {navLinks.map((item) => (
          <li key={item.id}>
            <Link
              className={`${
                pathName === item.href ? "font-bold text-green-600" : "font-normal"
              } text-[#3d3d3d]`}
              href={item.href}
            >

              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
