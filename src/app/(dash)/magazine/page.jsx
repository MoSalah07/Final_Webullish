"use client";
import React, { useState } from "react";
// Components
import DynamicToolBar from "@/app/components/utils/DynamicToolBar";
import MainMagazine from "@/app/components/magazine/contentMagazine/MainMagazine";
import CreateMagazine from "@/app/components/magazine/CreateMagazine";
// Fetch Data
import axios from "axios";
import useSWR from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";

function Magazine() {
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
    data: magazineArr,
    error,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_URL_BD}/api/magazine/show_all`,
    fetcher
  );

  return (
    <>
      <title>Magazine</title>
      <div>
        {isCreated ? (
          <>
            <CreateMagazine setIsCreated={setIsCreated} />
          </>
        ) : (
          <>
            <DynamicToolBar
              title={`All blog magazine`}
              setIsCreated={setIsCreated}
            />
            <MainMagazine magazineArr={magazineArr} />
          </>
        )}
      </div>
    </>
  );
}

export default Magazine;
