import React from "react";
// Components
import ListITem from "./ListITem";
// Icons
import iconDashboard from "../../../../../public/assets/images/icons_aside/dashboard.svg";

function AsideList() {
  
  const asideList = [
    {
      iconName: "dashboard",
      iconSrc: iconDashboard,
    },
    {
      iconName: "team",
      iconSrc: iconDashboard,
    },
    {
      iconName: "fqs",
      iconSrc: iconDashboard,
    },
    {
      iconName: "magazine",
      iconSrc: iconDashboard,
    },
    {
      iconName: "performance",
      iconSrc: iconDashboard,
    },
    {
      iconName: "advertisement",
      iconSrc: iconDashboard,
    },
    {
      iconName: "live",
      iconSrc: iconDashboard,
    },
  ];

  return (
    <ul className="mt-6 flex flex-col gap-2 w-full">
      {asideList.map((item) => (
        <ListITem key={item.iconName} {...item} />
      ))}
    </ul>
  );
}

export default AsideList;
