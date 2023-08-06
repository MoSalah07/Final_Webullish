"use client";
import React, { useState } from "react";
// Components
import TeamContent from "@/app/components/team/TeamContent";
import TeamHeader from "@/app/components/team/TeamHeader";
import TeamCreate from "@/app/components/team/teamCreate/TeamCreate";
import DynamicToolBar from "@/app/components/utils/DynamicToolBar";
import Loading from "@/app/components/loading/Loading";
// Fetch Data
import axios from "axios";
import useSWR from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";

function Team() {
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
    data: teamArr,
    error,
  } = useSWR(`${process.env.NEXT_PUBLIC_URL_BD}/api/team/show_all`, fetcher);

  if (isLoading) return <Loading />;

  return (
    <>
      <title>Team</title>
      <div>
        {isCreated ? (
          <TeamCreate setIsCreated={setIsCreated} />
        ) : (
          <>
            <DynamicToolBar title={`All Team`} setIsCreated={setIsCreated} />
            <TeamHeader />
            <TeamContent teamArr={teamArr} />
          </>
        )}
      </div>
    </>
  );
}

export default Team;
