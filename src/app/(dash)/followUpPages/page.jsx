"use client";
import React, { useState } from "react";
// Components
import Loading from "@/app/components/loading/Loading";
import CreateFollowUp from "@/app/components/followUpPages/CreateFollowUp";
import DynamicToolBar from "@/app/components/utils/DynamicToolBar";
import ContentFollowUp from "@/app/components/followUpPages/ContentFollowUp";
// Fetch Data
import axios from "axios";
import useSWR from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";

function FollowUpPagesScreen() {
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
      return err;
    }
  };

  const {
    isLoading,
    data: followUpArr,
    error,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_URL_BD}/api/FollowUpPages/show_all`,
    fetcher
  );

  if (isLoading) return <Loading />;

  return (
    <>
      <title>FollowUp</title>
      {isCreated ? (
        <CreateFollowUp setIsCreated={setIsCreated} />
      ) : (
        <>
          <DynamicToolBar title={`All Follow Up`} setIsCreated={setIsCreated} />
          <ContentFollowUp followUpArr={followUpArr} />
        </>
      )}
    </>
  );
}

export default FollowUpPagesScreen;
