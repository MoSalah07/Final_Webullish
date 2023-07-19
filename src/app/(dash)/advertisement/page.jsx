"use client";
import React, { useState } from "react";
// Components
import DynamicToolBar from "@/app/components/utils/DynamicToolBar";
import AdvertismentContent from "@/app/components/advertisment/AdvertismentContent";
import CreateAdvertisment from "@/app/components/advertisment/CreateAdvertisment";

function Advertisement() {
  const [isCreated, setIsCreated] = useState(false);
  return (
    <div>
      {isCreated ? (
        <CreateAdvertisment setIsCreated={setIsCreated} />
      ) : (
        <>
          <DynamicToolBar
            title={`All Advertisment`}
            setIsCreated={setIsCreated}
          />
          <AdvertismentContent />
        </>
      )}
    </div>
  );
}

export default Advertisement;
