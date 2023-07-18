"use client";
import React, { useState } from "react";
import ItemFqs from "./ItemFqs";

function AllFqs() {
  const accordionData = [
    {
      title: "What is Webullish.com",
      desc: "With more techy bells n’ webullish than our free version.With more techy bells n’ webullish than our free version. With more techy bells n’ webullish than our free version.With more techy bells n’ webullish than our free version. With more techy bells n’ webullish than our free version.With more techy bells n’ webullish than our free version.",
    },
    {
      title: "What is Webullish.com",
      desc: "With more techy bells n’ webullish than our free version.With more techy bells n’ webullish than our free version. With more techy bells n’ webullish than our free version.With more techy bells n’ webullish than our free version. With more techy bells n’ webullish than our free version.With more techy bells n’ webullish than our free version.",
    },
  ];
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    <div>
      {accordionData.map((fqs, index) => (
        <ItemFqs
          key={index}
          {...fqs}
          open={index === open}
          toggle={() => toggle(index)}
        />
      ))}
    </div>
  );
}

export default AllFqs;
