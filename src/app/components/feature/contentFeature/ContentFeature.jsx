import React, { useState } from "react";
// Components
import FeatureCard from "./FeatureCard";

function ContentFeature({ featureArr }) {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <div>
      {featureArr &&
        Array.isArray(featureArr) &&
        featureArr.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            {...feature}
            open={index === open}
            toggle={() => toggle(index)}
          />
        ))}
    </div>
  );
}

export default ContentFeature;
