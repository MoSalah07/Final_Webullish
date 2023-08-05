import React, { useState } from "react";
import NotificationCard from "./NotificationCard";

function ContentTopNotification({ notificationArr }) {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <div>
      {notificationArr &&
        Array.isArray(notificationArr) &&
        notificationArr.map((notification, index) => (
          <NotificationCard
            key={notification.id}
            {...notification}
            open={index === open}
            toggle={() => toggle(index)}
          />
        ))}
    </div>
  );
}

export default ContentTopNotification;
