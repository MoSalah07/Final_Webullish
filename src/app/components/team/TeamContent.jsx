"use client";
import React from "react";
import TeamCard from "./TeamCard";


function TeamContent({teamArr}) {
  return <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6">
    { teamArr && Array.isArray(teamArr) && teamArr.map((item) => (
      <TeamCard key={item.id} {...item} />
    ))}
  </div>;
}

export default TeamContent;
