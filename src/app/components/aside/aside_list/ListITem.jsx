"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";


function ListITem({ iconName, iconSrc = "" }) {
  const pathName = usePathname();
  const urlPathName = pathName.split("/")[1];
  return (
    <li
      className={`p-1 sm:p-3 rounded-primary-rounded text-text-light w-full
       text-sm lg:text-base capitalize
    ${
      urlPathName === iconName
        ? "bg-primary-blue text-white font-bold"
        : "font-normal"
    }`}
    >
      <Link
        href={`/${iconName}`}
        className={` aside-icon w-full flex items-center justify-center lg:justify-stretch gap-2 relative`}
      >
        <Image
          src={iconSrc}
          alt={iconName}
          height={20}
          width={20}
          priority
          className="text-white"
        />
        <p className="hidden lg:block"> {iconName}</p>
        <span className="absolute left-14 xs:left-22 lg:left-24 z-50 block md:hidden bg-primary-blue text-white p-2 rounded-primary-rounded transition-all opacity-0 translate-y-5 duration-500">{iconName}</span>
      </Link>
    </li>
  );
}

export default ListITem;
