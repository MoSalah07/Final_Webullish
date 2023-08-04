"use client";
import React, { useState } from "react";
// Components
import Loading from "@/app/components/loading/Loading";
// Fetch Data
import axios from "axios";
import useSWR from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";

function SocialMediaLiveScreen() {
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

  return <div>SocialMediaLiveScreen</div>;
}

export default SocialMediaLiveScreen;
