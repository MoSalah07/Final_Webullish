import Link from "next/link";
import React from "react";

function PerformanceCard({ month, title, description, id }) {
  return (
    <div className="bg-dark-card text-center capitalize rounded-primary-rounded text-primary-yellow p-6 flex flex-col justify-center items-center gap-5">
      <p className="font-semibold text-xl">{month}</p>
      <p className="font-semibold text-lg">{title}</p>
      <p className="font-normal text-base">{description}</p>
      <Link
        className="uppercase rounded-primary-rounded bg-primary-yellow text-center text-primary-white w-[50%] py-2 mx-auto font-semibold"
        href={`/performance/${id}`}
      >
        see results
      </Link>
    </div>
  );
}

export default PerformanceCard;
