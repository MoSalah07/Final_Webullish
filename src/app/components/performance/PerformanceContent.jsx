import React, { useState } from "react";
// Components
import PerformanceCard from "./PerformanceCard";

function PerformanceContent() {
  const [itemsPerformance, setItemsPerformance] = useState([
    {
      id: 1,
      month: "January",
      title: "performance jan",
      description: "here you will find all of our analyzes for this month",
    },
    {
      id: 2,
      month: "February",
      title: "performance Feb",
      description: "here you will find all of our analyzes for this month",
    },
    {
      id: 3,
      month: "March",
      title: "performance Mar",
      description: "here you will find all of our analyzes for this month",
    },
    {
      id: 4,
      month: "April",
      title: "performance Apr",
      description: "here you will find all of our analyzes for this month",
    },
    {
      id: 5,
      month: "May",
      title: "performance May",
      description: "here you will find all of our analyzes for this month",
    },
    {
      id: 6,
      month: "June",
      title: "performance Jun",
      description: "here you will find all of our analyzes for this month",
    },
    {
      id: 7,
      month: "July",
      title: "performance Jul",
      description: "here you will find all of our analyzes for this month",
    },
    {
      id: 8,
      month: "August",
      title: "performance Aug",
      description: "here you will find all of our analyzes for this month",
    },
    {
      id: 9,
      month: "September",
      title: "performance Sep",
      description: "here you will find all of our analyzes for this month",
    },
    {
      id: 10,
      month: "October",
      title: "performance Oct",
      description: "here you will find all of our analyzes for this month",
    },
    {
      id: 11,
      month: "November",
      title: "performance Nov",
      description: "here you will find all of our analyzes for this month",
    },
    {
      id: 12,
      month: "December",
      title: "performance Dec",
      description: "here you will find all of our analyzes for this month",
    },
  ]);
    
    const renderPerformanceCard = itemsPerformance.map((item) => (
        <PerformanceCard key={item.id} {...item} />
    ))
    
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {renderPerformanceCard}
  </div>;
}

export default PerformanceContent;
