"use client";
import React, { useState } from "react";
import TeamCard from "./TeamCard";
// Images
import ImageCardOne from '../../../../public/assets/images/team/paste_1.png'
import ImageCardTwo from '../../../../public/assets/images/team/paste_2.png'
import ImageCardThree from '../../../../public/assets/images/team/paste_3.png'

function TeamContent() {
  const [infoTeam, setInfoTeam] = useState([
    {
      name: "Jocelyn Schleifer",
      position: "Software Engineer",
      description:
        "There are many variations of passages of Lorem Ipsum available",
      image: ImageCardOne,
    },
    {
      name: "Martin Donin",
      position: "Software Engineer",
      description:
        "There are many variations of passages of Lorem Ipsum available",
      image: ImageCardTwo,
    },
    {
      name: "Jordyn Septimus",
      position: "Software Engineer",
      description:
        "There are many variations of passages of Lorem Ipsum available",
      image: ImageCardThree,
    },
  ]);

  return <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6">
    {infoTeam.map((item) => (
      <TeamCard key={item.name} {...item} />
    ))}
  </div>;
}

export default TeamContent;
