"use client";
import React, { useState } from "react";
// Components
import DynamicToolBar from "@/app/components/utils/DynamicToolBar";
import Loading from "@/app/components/loading/Loading";
// Fetch Data
import axios from "axios";
import useSWR from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";
import CreateTopNotification from "@/app/components/topNotification/CreateTopNotification";
import ContentTopNotification from "@/app/components/topNotification/ContentTopNotification";

function TopNotificationScreen() {
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
    data: notificationArr,
    error,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_URL_BD}/api/top_notification/show_all`,
    fetcher
  );

  if (isLoading) return <Loading />;
  return (
    <>
      <title>Top Notification</title>
      <div>
        {isCreated ? (
          <CreateTopNotification setIsCreated={setIsCreated} />
        ) : (
          <>
            <DynamicToolBar
              title={`Top Notification`}
              setIsCreated={setIsCreated}
            />
            <ContentTopNotification notificationArr={notificationArr} />
          </>
        )}
      </div>
    </>
  );
}

export default TopNotificationScreen;
