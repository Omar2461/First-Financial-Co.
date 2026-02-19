"use client";

import { useContext, createContext, useState } from "react";

type DropdownContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggleDropdown: () => void;
};

const DropdownContext = createContext<DropdownContextType>({
  isOpen: false,
  setIsOpen: () => {},
  toggleDropdown: () => {},
});

export function DropdownProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    console.log("the dropdown !!!!",isOpen)
  };

  return (
    <DropdownContext.Provider
      value={{ isOpen, setIsOpen, toggleDropdown }}
    >{children}</DropdownContext.Provider>
  );
}

export const useDropdown=()=>useContext(DropdownContext);

export default DropdownContext;
