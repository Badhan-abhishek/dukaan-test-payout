"use client";

import { HelpCircle, Menu, Search } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import Drawer from "react-modern-drawer";
import { Sidebar } from "../sidebar";
import "react-modern-drawer/dist/index.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleFocusSearch = (inputRef: typeof ref) => {
    if (!inputRef) return;
    inputRef?.current?.focus();
  };

  const toggleMenu = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <>
      <div className="border-b border-[#D9D9D9] flex items-center gap-4 py-2 px-3 lg:px-8 lg:py-3 justify-between">
        <div className="flex gap-4 items-center">
          <span className="text-base">Payments</span>
          <span className="text-xs flex items-center gap-1">
            <HelpCircle size={12} /> How it works
          </span>
        </div>
        <div
          onClick={() => handleFocusSearch(ref)}
          className={`group ${
            isFocus ? "shadow" : ""
          } w-[400px] lg:flex bg-input px-4 py-[9px] rounded-4 text-inputText gap-2 items-center hidden`}
        >
          <Search size={16} />
          <input
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            ref={ref}
            className="focus:outline-none group-focus:shadow-md w-full h-[22px] bg-input"
            type="text"
            placeholder="Search features, tutorials, etc."
          />
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/icons/notification-alt.svg"
            height={40}
            width={40}
            alt="notifications"
          />
          <Image
            src="/icons/down-chevron-alt.svg"
            height={40}
            width={40}
            alt="options"
          />
          <Menu onClick={toggleMenu} size={40} className="lg:hidden" />
        </div>
      </div>
      <Drawer onClose={toggleMenu} direction="right" open={menuOpen}>
        <div className="h-screen bg-secondary">
          <Sidebar />
        </div>
      </Drawer>
    </>
  );
};
