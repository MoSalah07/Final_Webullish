import React from "react";
// Icons
import Moon from '../../../../../public/assets/images/mode/moon.svg';
import Sun from '../../../../../public/assets/images/mode/sun1.svg';
import Image from "next/image";

function Mode() {
  return <div className="flex flex-col justify-center items-center flex-1 gap-2">
    <Image src={Sun}  alt="sun" width={20} height={20} priority className="cursor-pointer"/>
    <Image src={Moon}  alt="moon" width={20} height={20} priority className="cursor-pointer"/>
  </div>;
}

export default Mode;
