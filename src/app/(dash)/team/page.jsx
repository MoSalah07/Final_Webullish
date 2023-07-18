"use client";
import React, { useState } from "react";
// Components
import TeamContent from "@/app/components/team/TeamContent";
import TeamHeader from "@/app/components/team/TeamHeader";
import TeamToolbar from "@/app/components/team/TeamToolbar";
import TeamCreate from "@/app/components/team/teamCreate/TeamCreate";

function Team() {
  const [isCreated, setIsCreated] = useState(false);
  return (
    <div>
      <TeamToolbar setIsCreated={setIsCreated} />
      {isCreated ? (
        <TeamCreate setIsCreated={setIsCreated} />
      ) : (
        <>
          <TeamHeader />
          <TeamContent />
        </>
      )}
    </div>
  );
}

export default Team;
