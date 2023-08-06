"use client";
import React, { useState } from "react";
// Components
import CreateLive from "@/app/components/live/CreateLive";
import DynamicToolBar from "@/app/components/utils/DynamicToolBar";
import LiveContent from "@/app/components/live/LiveContent";

function Live() {
  const [isCreated, setIsCreated] = useState(false);
  return (
    <>
      <title>Live</title>
      <div>
        {isCreated ? (
          <CreateLive setIsCreated={setIsCreated} />
        ) : (
          <>
            <DynamicToolBar title={`All Live`} setIsCreated={setIsCreated} />
            <LiveContent />
          </>
        )}
      </div>
    </>
  );
}

export default Live;
