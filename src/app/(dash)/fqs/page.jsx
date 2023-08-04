"use client";
import React, { useState } from "react";
// Components
import AllFqs from "@/app/components/fqs/AllFqs";
import DynamicToolBar from "@/app/components/utils/DynamicToolBar";
import CreateFqs from "@/app/components/fqs/CreateFqs";
// Fetch Data
import axios from "axios";
import useSWR from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";

function Fqs() {
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
    data: fqsArr,
    error,
  } = useSWR(`${process.env.NEXT_PUBLIC_URL_BD}/api/faq/show_all`, fetcher);

  return (
    <div>
      {isCreated ? (
        <CreateFqs setIsCreated={setIsCreated} />
      ) : (
        <>
          <DynamicToolBar title={`All FAQ's`} setIsCreated={setIsCreated} />
          <AllFqs fqsArr={fqsArr} />
        </>
      )}
    </div>
  );
}

export default Fqs;
