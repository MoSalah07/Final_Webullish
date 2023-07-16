import Image from "next/image";
import React from "react";

function LogoAside() {
  return (
    <div className="border-b-2 pb-1 w-full border-primary-gray">
      <div className="flex items-center justify-center">
        <Image
          src={`/assets/images/login/webullish-newnew-logo_1.svg`}
          alt="logo_dashboard"
          width={70}
          height={70}
          priority
        />
      </div>
    </div>
  );
}

export default LogoAside;
