import React from "react";
// Components
import ListITem from "./ListITem";
// Icons
import iconDashboard from "../../../../../public/assets/images/icons_aside/dashboard.svg";
import iconTeam from "../../../../../public/assets/images/icons_aside/team.svg";
import iconFqs from "../../../../../public/assets/images/icons_aside/fqs.svg";
import iconPerformance from "../../../../../public/assets/images/icons_aside/performance.svg";
import iconAdvertisement from "../../../../../public/assets/images/icons_aside/Advertisement.svg";
import iconLive from "../../../../../public/assets/images/icons_aside/live.svg";
import iconNotification from "../../../../../public/assets/images/icons_aside/notification.svg";
import iconTrainingVideo from "../../../../../public/assets/images/icons_aside/training_video.svg";
import iconRecentachievement from "../../../../../public/assets/images/icons_aside/recentachievement.svg";
import features from "../../../../../public/assets/images/icons_aside/features.svg";

function AsideList() {
  const asideList = [
    {
      iconName: "dashboard",
      iconSrc: iconDashboard,
      namePage: "dashboard",
    },
    {
      iconName: "team",
      iconSrc: iconTeam,
      namePage: "team",
    },
    {
      iconName: "fqs",
      iconSrc: iconFqs,
      namePage: "fqs",
    },
    {
      iconName: "magazine",
      iconSrc: iconDashboard,
      namePage: "magazine",
    },
    {
      iconName: "performance",
      iconSrc: iconPerformance,
      namePage: "performance",
    },
    {
      iconName: "advertisement",
      iconSrc: iconAdvertisement,
      namePage: "advertisement",
    },
    {
      iconName: "live",
      iconSrc: iconLive,
      namePage: "live",
    },
    {
      iconName: "topNotification",
      iconSrc: iconNotification,
      namePage: "top Notification",
    },
    {
      iconName: "recentachievement",
      iconSrc: iconRecentachievement,
      namePage: "recentachievement",
    },
    {
      iconName: "trainingVideo",
      iconSrc: iconTrainingVideo,
      namePage: "training video",
    },
    {
      iconName: "feature",
      iconSrc: features,
      namePage: "feature",
    },
    {
      iconName: "followUpPages",
      iconSrc: iconTeam,
      namePage: "follow Up Pages",
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
