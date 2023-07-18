"use client";
import React, { useState } from "react";
// Image
import ImageCardMagazine from "../../../../../public/assets/images/magazine/magazine_card.png";
import Card from "./Card";

function CardsMagazine() {
  const [cardsMagazine, setCardsMagazine] = useState([
    {
      id: 1,
      image: ImageCardMagazine,
      title: "HCP new insert item",
      date:  new Date(),
      description:
        "There are many variations of passages of Lorem Ipsum available",
    },
    {
      id: 2,
      image: ImageCardMagazine,
      title: "HCP new insert item",
      date:  new Date(),
      description:
        "There are many variations of passages of Lorem Ipsum available",
    },
    {
      id: 3,
      image: ImageCardMagazine,
      title: "HCP new insert item",
      date:  new Date(),
      description:
        "There are many variations of passages of Lorem Ipsum available",
    },
  ]);


  const renderCard = cardsMagazine.map((card) => (
    <Card key={card.id} {...card} />
  ))

  return <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    {renderCard}
  </div>;
}

export default CardsMagazine;
