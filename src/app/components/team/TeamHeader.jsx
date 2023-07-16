import React from "react";

function TeamHeader() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 capitalize mb-8 text-center">
      <span className="uppercase font-medium text-sm md:text-base  text-primary-text">
        our team
      </span>
      <h2 className=" text-lg md:text-4xl font-semibold text-primary-text">
        Meet the Webullish team
      </h2>
      <p className="text-text-light text-sm leading-6 md:text-lg">
        Meet the Webullish team and learn from their solid expertise in the
        field
      </p>
    </div>
  );
}

export default TeamHeader;
