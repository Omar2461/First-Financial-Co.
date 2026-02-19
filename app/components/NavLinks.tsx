"use client";

import Link from "next/link";
import { useState } from "react";

function NavLinks() {
  const [isOpen, setIsOpen] = useState("");

  const links = [
    { name: "الرئيسية", href: "#" },
    { name: "من نحن؟", href: "#" },
    { name: "خدماتنا", href: "#" },
    { name: "المدونة", href: "#" },
  ];

  const onClick = (name: string) => {
    setIsOpen(name);
  };

  const renderNavLinks = links.map(({ href, name }, idx) => {
    return (
      <div
        key={idx}
        className={`w-20 h-9 flex justify-center border-b-[3px]  items-center text-black
         hover:border-b-3 hover:border-[#A9963A] hover:text-[#A9963A] transition-colors duration-450
        ${isOpen == name ? "border-b-3 border-[#A9963A] text-[#A9963A]" : "border-transparent"}
         `}
      >
        <Link href={href} onClick={() => onClick(name)}>
          {name}
        </Link>
      </div>
    );
  });

  return (
    <ul className="hidden md:flex flex-initial md:justify-center md:w-140 font-medium ">
      {renderNavLinks}
    </ul>
  );
}

export default NavLinks;
