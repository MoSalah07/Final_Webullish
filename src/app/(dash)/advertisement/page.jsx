"use client";
import React, { useState } from "react";
// Components
import DynamicToolBar from "@/app/components/utils/DynamicToolBar";
import AdvertismentContent from "@/app/components/advertisment/AdvertismentContent";
import CreateAdvertisment from "@/app/components/advertisment/CreateAdvertisment";
// Fetch
import axios from "axios";
import useSWR from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";

function Advertisement() {
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
    data: advertisementArr,
    error,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_URL_BD}/api/advertisement/show_all`,
    fetcher
  );

  if (isLoading) return <div>Loading ...</div>;

  return (
    <>
      <title>Advertisment</title>
      <div>
        {isCreated ? (
          <CreateAdvertisment setIsCreated={setIsCreated} />
        ) : (
          <>
            <DynamicToolBar
              title={`All Advertisment`}
              setIsCreated={setIsCreated}
            />
            <AdvertismentContent advertisementArr={advertisementArr} />
          </>
        )}
      </div>
    </>
  );
}

export default Advertisement;
