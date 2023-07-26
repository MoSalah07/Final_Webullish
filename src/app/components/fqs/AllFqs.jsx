"use client";
import React, { useState } from "react";
import ItemFqs from "./ItemFqs";

function AllFqs({fqsArr}) {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  
  return (
    <div>
      { fqsArr && Array.isArray(fqsArr) && fqsArr.map((fqs, index) => (
        <ItemFqs
          key={fqs.id}
          {...fqs}
          open={index === open}
          toggle={() => toggle(index)}
        />
      ))}
    </div>
  );
}

export default AllFqs;
