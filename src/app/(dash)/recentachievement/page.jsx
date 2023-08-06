"use client";
import React, { useState } from "react";
// Components
import Loading from "@/app/components/loading/Loading";
import DynamicToolBar from "@/app/components/utils/DynamicToolBar";
import CreateRecentachievement from "@/app/components/recentachievement/CreateRecentachievement";
// Fetch Data
import axios from "axios";
import useSWR from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";
import AllRecentachievement from "@/app/components/recentachievement/AllRecentachievement";

function RecentachievementScreen() {
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
      console.log(err);
      return err.message;
    }
  };

  const {
    isLoading,
    data: recentachievementArr,
    error,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_URL_BD}/api/recentachievement/show_all`,
    fetcher
  );

  console.log(recentachievementArr);

  if (isLoading) return <Loading />;
  return (
    <>
      <title>Recentachievement</title>
      <div>
        {isCreated ? (
          <CreateRecentachievement setIsCreated={setIsCreated} />
        ) : (
          <>
            <DynamicToolBar
              title={`All recentachievement`}
              setIsCreated={setIsCreated}
            />
            <AllRecentachievement recentachievementArr={recentachievementArr} />
          </>
        )}
      </div>
    </>
  );
}

export default RecentachievementScreen;
