"use client";
import React, { useState } from "react";
// Components
import DynamicToolBar from "@/app/components/utils/DynamicToolBar";
import CreateTrainingVideo from "@/app/components/trainingVideo/CreateTrainingVideo";
import ContentTrainingVideo from "@/app/components/trainingVideo/ContentTrainingVideo";
import Loading from "@/app/components/loading/Loading";
// Fetch Data
import axios from "axios";
import useSWR from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";

function TrainingVideoScreen() {
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
    data: trainingVideoArr,
    error,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_URL_BD}/api/training_video/show_all`,
    fetcher
  );

  if (isLoading) return <Loading />;

  return (
    <>
      <title>Training Video</title>
      <div>
        {isCreated ? (
          <CreateTrainingVideo setIsCreated={setIsCreated} />
        ) : (
          <>
            <DynamicToolBar
              title={`Training Video`}
              setIsCreated={setIsCreated}
            />
            <ContentTrainingVideo trainingVideoArr={trainingVideoArr} />
          </>
        )}
      </div>
    </>
  );
}

export default TrainingVideoScreen;
