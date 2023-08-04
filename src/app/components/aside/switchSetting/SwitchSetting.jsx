import React from "react";
import Link from "next/link";
import Image from "next/image";
// Icons
import Settings from "../../../../../public/assets/images/icons_aside/settings.svg";
import Logout from "../../../../../public/assets/images/icons_aside/logout.svg";

function SwitchSetting() {
  return (
    <div className="w-full h-full flex flex-col justify-end items-center lg:items-start gap-4 capitalize my-8">
      <Link
        className="flex items-center justify-center gap-2 text-text-light "
        href={`/dashboard`}
      >
        <Image src={Settings} alt="settings" width={20} height={20} priority />
        <span className="hidden lg:block">settings</span>
      </Link>
      <Link
        className="flex items-center justify-center gap-2 text-text-light "
        href={`/`}
      >
        <Image src={Logout} alt="logout" width={20} height={20} priority />
        <span className="hidden lg:block">logout</span>
      </Link>
    </div>
  );
}

export default SwitchSetting;
