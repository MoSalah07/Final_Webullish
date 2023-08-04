import React, { useState } from "react";
// Components
import CardFollowUp from "./CardFollowUp";

function ContentFollowUp({ followUpArr }) {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  console.log(followUpArr);

  return (
    <div>
      {followUpArr &&
        Array.isArray(followUpArr) &&
        followUpArr.map((follow, index) => (
          <CardFollowUp
            key={follow.id}
            {...follow}
            open={index === open}
            toggle={() => toggle(index)}
            index={index}
          />
        ))}
    </div>
  );
}

export default ContentFollowUp;
