import React from "react";
// Components;
import PerformanceDetailsTable from "@/app/components/performance/performanceDetails/PerformanceDetailsTable";
import PerformanceSuccess from "@/app/components/performance/performanceDetails/PerformanceSuccess";
import PerformanceChart from "@/app/components/performance/performanceDetails/PerformanceChart";
import Link from "next/link";

function PerformanceResult() {
  const detailsPerformance = [
    {
      id: 1,
      symbol: "BBDO",
      reached: "15-50%",
      target: 14,
      comments: "4",
    },
    {
      id: 2,
      symbol: "BBDO",
      reached: "15-50%",
      target: 16,
      comments: "4",
    },
    {
      id: 3,
      symbol: "BBDO",
      reached: "15-50%",
      target: 17,
      comments: "4",
    },
    {
      id: 4,
      symbol: "BBDO",
      reached: "15-50%",
      target: 16,
      comments: "4",
    },
    {
      id: 5,
      symbol: "BBDO",
      reached: "15-50%",
      target: 15,
      comments: "4",
    },
    {
      id: 6,
      symbol: "BBDO",
      reached: "15-50%",
      target: 16,
      comments: "4",
    },
  ];

  return (
    <div>
      <Link className="my-8 block font-semibold text-lg hover:text-primary-blue transition-colors" href={`/performance`}>Go To Performance Page</Link>
      <div className="mb-12">
        <h3 className="font-semibold capitalize">january performance</h3>
      </div>
      <div className="mb-24">
        <div className="flex bg-dark-card text-primary-yellow font-normal md:font-semibold p-2 sm:p-4 text-sm sm:text-base md:text-lg">
          <div className="basis-1/4 text-left sm:text-center">Symbol</div>
          <div className="basis-1/4 text-left sm:text-center">P&L Reached</div>
          <div className="basis-1/4 text-left sm:text-center">P&L Target</div>
          <div className="basis-1/4 text-left sm:text-center">Comments</div>
        </div>
        {detailsPerformance.map((item) => (
          <PerformanceDetailsTable key={item.id} {...item} />
        ))}
      </div>
      <PerformanceSuccess />
      <PerformanceChart />
    </div>
  );
}

export default PerformanceResult;
