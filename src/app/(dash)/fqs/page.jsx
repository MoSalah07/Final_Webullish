"use client";
import React, { useState } from "react";
import AllFqs from "@/app/components/fqs/AllFqs";
import DynamicToolBar from "@/app/components/utils/DynamicToolBar";
import CreateFqs from "@/app/components/fqs/CreateFqs";

function Fqs() {
  const [isCreated, setIsCreated] = useState(false);
  return (
    <div>
      {isCreated ? (
        <CreateFqs setIsCreated={setIsCreated} />
      ) : (
        <>
          <DynamicToolBar title={`All FAQ's`} setIsCreated={setIsCreated} />
          <AllFqs />
        </>
      )}
    </div>
  );
}

export default Fqs;
