"use client";
import React, { useState } from "react";
// Components
import DynamicToolBar from "@/app/components/utils/DynamicToolBar";
import MainMagazine from "@/app/components/magazine/contentMagazine/MainMagazine";
import CreateMagazine from "@/app/components/magazine/CreateMagazine";

function Magazine() {
  const [isCreated, setIsCreated] = useState(false);
  return (
    <div>
      {isCreated ? (
        <>
          <CreateMagazine setIsCreated={setIsCreated} />
        </>
      ) : (
        <>
          <DynamicToolBar
            title={`All blog magazine`}
            setIsCreated={setIsCreated}
          />
          <MainMagazine />
        </>
      )}
    </div>
  );
}

export default Magazine;
