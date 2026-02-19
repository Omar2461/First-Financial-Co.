"use client";

import { useDropdown } from "@/context/DropdownContext";

function Dropdown() {
  const { isOpen } = useDropdown();

  return (
    <div className={`bg-amber-300 transition-all duration-300 ease-in-out ${isOpen 
        ? "opacity-100 translate-y-0 pointer-events-auto" 
        : "opacity-0 -translate-y-2 pointer-events-none"}`}>Dropdown</div>
  );
}

export default Dropdown;
