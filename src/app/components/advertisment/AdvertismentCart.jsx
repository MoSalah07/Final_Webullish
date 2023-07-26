import React, { useState } from "react";
// Components
import CardItem from "./CardItem";

function AdvertismentCart({ advertisementArr }) {
  const renderCard =
    advertisementArr && Array.isArray(advertisementArr) &&
    advertisementArr.map((card) => <CardItem key={card.id} {...card} />);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">{renderCard}</div>
  );
}

export default AdvertismentCart;
