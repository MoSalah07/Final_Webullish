"use client";
import React, { useState } from "react";
// Components
import DynamicToolBar from "@/app/components/utils/DynamicToolBar";
// import PerformanceContent from '@/app/components/performance/PerFormanceContent';
import PerformanceContent from "../../components/performance/PerformanceContent";
import CreatePerformance from "@/app/components/performance/CreatePerformance";

function Performance() {
  const [isCreated, setIsCreated] = useState(false);
  return (
    <div>
      {isCreated ? (
        <CreatePerformance setIsCreated={setIsCreated} />
      ) : (
        <>
          <DynamicToolBar
            title={`All Performance`}
            setIsCreated={setIsCreated}
          />
          <PerformanceContent />
        </>
      )}
    </div>
  );
}

export default Performance;
