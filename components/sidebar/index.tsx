"use client";

import { MENU } from "@/constants/menu";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const path = usePathname();
  return (
    <div className="sidebar text-white text-sm py-4 px-2 gap-6 flex flex-col h-full">
      <div className="sidebar__company_branding flex gap-3 px-2 items-center">
        <div className="relative h-10 w-10 rounded-4 overflow-hidden">
          <Image
            src={"/store/logo.png"}
            fill
            alt="nishyan store logo"
            className="rounded-sm"
          />
        </div>
        <div className="company_branding__name flex-1 flex flex-col justify-between">
          <p className="text-base">Nishyan</p>
          <a className="text-sm opacity-80 underline" href="#">
            Visit Store
          </a>
        </div>
        <div className="cursor-pointer">
          <ChevronDown size={20} />
        </div>
      </div>
      <div className="sidebar__nav flex-1">
        <ul>
          {MENU.map((item) => {
            return (
              <li
                className={`hover:bg-mute rounded-4 ${
                  path === item.path ? "bg-mute" : ""
                }`}
                key={item.path}
              >
                <Link
                  className="px-4 py-2 flex gap-3 items-center"
                  href={item.path}
                >
                  <Image
                    src={`/icons/${item.icon}.svg`}
                    height={20}
                    width={20}
                    alt={item.name}
                  />
                  <span className="text-sm">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <div className="bg-mute px-3 py-[6px] rounded-4 flex gap-3 items-center">
          <div className="p-[6px] bg-page bg-opacity-10 relative w-9 h-9 rounded-4">
            <Image
              src={"/icons/wallet.svg"}
              fill
              objectFit="none"
              alt="wallet"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs">Available credits</span>
            <span className="font-medium">222.10</span>
          </div>
        </div>
      </div>
    </div>
  );
};
