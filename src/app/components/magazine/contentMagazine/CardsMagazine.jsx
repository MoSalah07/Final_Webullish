"use client";
import React from "react";
// Image
import Card from "./Card";

function CardsMagazine({ magazineArr }) {
  const renderCard =
    magazineArr &&
    Array.isArray(magazineArr) &&
    magazineArr.map((card) => <Card key={card.id} {...card} />);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">{renderCard}</div>
  );
}

export default CardsMagazine;
