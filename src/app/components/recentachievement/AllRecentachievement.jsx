import React, { useState } from "react";
import ItemRecentachievement from "./ItemRecentachievement";

function AllRecentachievement({ recentachievementArr }) {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <div>
      {recentachievementArr &&
        Array.isArray(recentachievementArr) &&
        recentachievementArr.map((fqs, index) => (
          <ItemRecentachievement
            key={fqs.id}
            {...fqs}
            open={index === open}
            toggle={() => toggle(index)}
          />
        ))}
    </div>
  );
}

export default AllRecentachievement;
