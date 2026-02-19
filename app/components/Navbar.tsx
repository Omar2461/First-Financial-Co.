"use client";

import Image from "next/image";

import { MdWhatsapp } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

import NavLinks from "./NavLinks";
import { useDropdown } from "@/context/DropdownContext";

function Navbar() {

const {toggleDropdown}=useDropdown();

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-center items-center p-4">
        <div className="flex-initial flex md:justify-end w-100 border ">
          <Image
            className="w-auto"
            src="https://res.cloudinary.com/dijoz9ie7/image/upload/v1771399001/alqawaemcpa-logo-nobackground_hufd28.png"
            alt="Logo"
            width={180}
            height={180}
            priority
          />
        </div>

        <NavLinks />

        <div className="hidden md:flex md:flex-initial md:justify-start md:w-120  text-black">
          <button className="font-bold flex justify-center items-center text-sm rounded-lg shadow-xl/30 border gap-1 py-2 px-4
           hover:scale-115 transition-all duration-400 text-black">
            <MdWhatsapp /> تواصل معنا
          </button>
        </div>

        <IoMenu className="md:hidden border absolute left-15 text-4xl text-black" onClick={()=>toggleDropdown()}>
          ☰
        </IoMenu>
      </div>
    </nav>
  );
}

export default Navbar;
