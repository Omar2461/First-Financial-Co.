"use client";

import Image from "next/image";

import { MdWhatsapp } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

import NavLinks from "./NavLinks";
import { useDropdown } from "@/context/DropdownContext";
import Dropdown from "./Dropdown";
import Button from "./Button";

function Navbar() {
  const { isOpen, toggleDropdown } = useDropdown();

  return (
    <nav
      className="bg-[#f3f0e6] shadow-md relative top-0 left-0 w-full z-50 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dijoz9ie7/image/upload/v1772056991/Gemini_Generated_Image_ieqpm7ieqpm7ieqp_pnbpdr.png')",
      }}
    >
      <div className="container mx-auto flex justify-center items-center p-4 lg:p-7">
        <div className="flex-initial flex md:justify-center lg:justify-start xl:justify-end w-100 lg:w-85 xl:w-100 transition-all duration-400">
          <Image
            className="w-auto md:w-30 lg:w-38 xl:w-43"
            src="https://res.cloudinary.com/dijoz9ie7/image/upload/v1771399001/alqawaemcpa-logo-nobackground_hufd28.png"
            alt="Logo"
            width={180}
            height={180}
            priority
          />
        </div>

        <NavLinks />

        <div className="hidden md:flex md:flex-initial md:justify-center xl:justify-start md:w-120 text-black">
          <Button>
            تواصل معنا
            <MdWhatsapp />
          </Button>
        </div>
        {isOpen ? (
          <div
            className="md:hidden bg-[#b8b8a4] w-9 h-9 flex justify-center items-center absolute left-12 bottom-10 text-3xl text-black"
            onClick={() => toggleDropdown()}
          >
            <IoMdClose />
          </div>
        ) : (
          <div
            className="md:hidden bg-[#b8b8a4] w-9 h-9 flex justify-center items-center absolute left-12 bottom-10 text-3xl text-black"
            onClick={() => toggleDropdown()}
          >
            <IoMenuOutline />
          </div>
        )}
      </div>

      <Dropdown />
    </nav>
  );
}

export default Navbar;
