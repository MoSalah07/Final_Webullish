import React from "react";
import Image from "next/image";
// Components
import Mode from "../mode/Mode";

function LogoAside() {
  return (
    <div className="border-b-2 pb-1 w-full border-primary-gray flex items-center justify-center flex-col sm:flex-row gap-4 sm:gap-8">
      <div className="flex items-center justify-center  w-[40px] h-[40px] md:h-[50px] md:w-[50px] lg:h-[70px] lg:w-[70px]">
        <Image
          src={`/assets/images/login/webullish-newnew-logo_1.svg`}
          alt="logo_dashboard"
          width={70}
          height={70}
          priority
          className="w-auto h-auto"
        />
      </div>
      <Mode />
    </div>
  );
}

export default LogoAside;
