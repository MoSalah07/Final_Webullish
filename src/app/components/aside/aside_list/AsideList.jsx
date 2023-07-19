import React from "react";
// Components
import ListITem from "./ListITem";
// Icons
import iconDashboard from "../../../../../public/assets/images/icons_aside/dashboard.svg";
import iconTeam from "../../../../../public/assets/images/icons_aside/team.svg";
import iconFqs from "../../../../../public/assets/images/icons_aside/fqs.svg";
import iconPerformance from "../../../../../public/assets/images/icons_aside/performance.svg";
import iconAdvertisement from "../../../../../public/assets/images/icons_aside/advertisement.svg";
import iconLive from "../../../../../public/assets/images/icons_aside/live.svg";

function AsideList() {
  
  const asideList = [
    {
      iconName: "dashboard",
      iconSrc: iconDashboard,
    },
    {
      iconName: "team",
      iconSrc: iconTeam,
    },
    {
      iconName: "fqs",
      iconSrc: iconFqs,
    },
    {
      iconName: "magazine",
      iconSrc: iconDashboard,
    },
    {
      iconName: "performance",
      iconSrc: iconPerformance,
    },
    {
      iconName: "advertisement",
      iconSrc: iconAdvertisement,
    },
    {
      iconName: "live",
      iconSrc: iconLive,
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
