import React from "react";
// Components
import DynamicHeadingContent from "../utils/DynamicHeadingContent";
import AdvertismentCart from "./AdvertismentCart";

function AdvertismentContent() {
  return (
    <div>
      <DynamicHeadingContent
        brief="Our Advertisment"
        title="Meet the Webullish advertisment"
        description="See all recently published articles"
      />
      <AdvertismentCart />
    </div>
  );
}

export default AdvertismentContent;
