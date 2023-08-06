import React from "react";
import LogoAside from "./logo_aside/LogoAside";
import Aside_List from "./aside_list/AsideList";
import SwitchSetting from "./switchSetting/SwitchSetting";

function Aside() {
  return (
    <aside className="bg-primary-white flex items-center flex-col smallScreen:overflow-y-auto smallScreen:overflow-x-hidden col-span-2 p-2 md:p-4 h-screen">
      <LogoAside />
      <Aside_List />
      <SwitchSetting />
    </aside>
  );
}

export default Aside;
