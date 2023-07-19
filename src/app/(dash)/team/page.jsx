"use client";
import React, { useState } from "react";
// Components
import TeamContent from "@/app/components/team/TeamContent";
import TeamHeader from "@/app/components/team/TeamHeader";
import TeamCreate from "@/app/components/team/teamCreate/TeamCreate";
import DynamicToolBar from "@/app/components/utils/DynamicToolBar";

function Team() {
  const [isCreated, setIsCreated] = useState(false);
  return (
    <div>
      {isCreated ? (
        <TeamCreate setIsCreated={setIsCreated} />
      ) : (
        <>
          <DynamicToolBar title={`All Team`} setIsCreated={setIsCreated} />
          <TeamHeader />
          <TeamContent />
        </>
      )}
    </div>
  );
}

export default Team;
