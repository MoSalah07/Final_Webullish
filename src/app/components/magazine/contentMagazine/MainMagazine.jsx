import React from "react";
// Components
import DynamicHeadingContent from "../../utils/DynamicHeadingContent";
import CardsMagazine from "./CardsMagazine";

function MainMagazine({magazineArr}) {
  return (
    <div>
      <DynamicHeadingContent
        brief="Our Blog"
        title="Meet the Webullish blog"
        description="See all recently published articles"
          />
      <CardsMagazine magazineArr={magazineArr} />
    </div>
  );
}

export default MainMagazine;
