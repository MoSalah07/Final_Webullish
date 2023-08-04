"use client";
import React, { useState } from "react";
// Components
import CreateFeature from "@/app/components/feature/CreateFeature";
import Loading from "@/app/components/loading/Loading";
// Fetch Data
import axios from "axios";
import useSWR from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";
import DynamicToolBar from "@/app/components/utils/DynamicToolBar";
import ContentFeature from "@/app/components/feature/contentFeature/ContentFeature";

function FeatureScreen() {
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
    data: featureArr,
    error,
  } = useSWR(`${process.env.NEXT_PUBLIC_URL_BD}/api/feature/show_all`, fetcher);


  if (isLoading) return <Loading />;
  return (
    <>
      <title>Feature</title>
      <div>
        {isCreated ? (
          <CreateFeature setIsCreated={setIsCreated} />
        ) : (
          <>
              <DynamicToolBar title={`Feature`} setIsCreated={setIsCreated} />
              <ContentFeature featureArr={featureArr} />
          </>
        )}
      </div>
    </>
  );
}

export default FeatureScreen;
