import React from "react";

function PerformanceDetailsTable({ symbol, reached, target, comments, id }) {
  return (
    <div className="my-3 flex items-center gap-2 md:gap-12 lg:gap-24">
      <div className="basis-1/4 bg-dark-card text-primary-yellow p-2 sm:p-4 text-sm sm:text-base font-normal sm:font-semibold whitespace-nowrap">
        {symbol}
      </div>
      <div className="basis-1/4 bg-dark-card text-primary-yellow p-2 sm:p-4 text-sm sm:text-base font-normal sm:font-semibold whitespace-nowrap">
        {reached}
      </div>
      <div
        className={`basis-1/4 bg-dark-card text-primary-white p-2 sm:p-4 text-sm sm:text-base font-normal sm:font-semibold whitespace-nowrap ${
          target <= 14 ? "bg-secondary-red" : "bg-primary-green"
        }`}
      >
        {target}%
      </div>
      <div className="basis-1/4 bg-dark-card text-primary-yellow p-2 sm:p-4 text-sm sm:text-base font-normal sm:font-semibold whitespace-nowrap">
        {comments} days
      </div>
    </div>
  );
}

export default PerformanceDetailsTable;
