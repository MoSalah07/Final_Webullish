import React from "react";
import Image from "next/image";

function PerformanceChart() {
  return (
    <div className="mt-12 w-full">
      <Image
        src={`/assets/images/performance/chart.svg`}
        alt="chart"
        width={300}
        height={300}
        className="w-full"
      />
    </div>
  );
}

export default PerformanceChart;
