"use client";
import React, { useState } from "react";
// Components
import DynamicToolBar from "@/app/components/utils/DynamicToolBar";
import PerformanceContent from "../../components/performance/PerformanceContent";
import CreatePerformance from "@/app/components/performance/CreatePerformance";
import Loading from "@/app/components/loading/Loading";
// Fetch
import axios from "axios";
import useSWR from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";

function Performance() {
  const [isCreated, setIsCreated] = useState(false);
  const token = getToken();

  const fetcher = async (url) => {
    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  };

  const {
    isLoading,
    data: performanceArr,
    error,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_URL_BD}/api/performance/show_all`,
    fetcher
  );

  // console.log(performanceArr);

  if (isLoading) return <Loading />;

  return (
    <>
      <title>Performance</title>
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
    </>
  );
}

export default Performance;
