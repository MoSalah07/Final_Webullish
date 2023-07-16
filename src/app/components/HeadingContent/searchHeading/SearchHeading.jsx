import React from "react";
import Image from "next/image";

function SearchHeading() {
  return (
    <div className=" w-full sm:w-1/3 xl:w-1/4 relative">
      <input
        placeholder="Search ....."
        type="text"
        className={`w-full py-2 px-2 border-none bg-primary-gray outline-primary-blue 
      placeholder:text-sm placeholder:text-text-light placeholder:font-normal placeholder:pl-2
      placeholder:opacity-100 focus:placeholder:opacity-0 placeholder:transition-opacity`}
      />
      <div
        className={`absolute right-0 top-0 z-50 bg-primary-blue h-full w-10
       flex items-center justify-center hover:cursor-pointer rounded-br-primary-rounded rounded-tr-primary-rounded`}
      >
        <Image
          src={`/assets/images/heading/search.svg`}
          alt="search"
          width={20}
          height={20}
          priority
        />
      </div>
    </div>
  );
}

export default SearchHeading;
