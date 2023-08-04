import React, { useState } from "react";
// Components
import FAQFollowUp from "./FAQFollowUp";
// Fetch Data
import axios from "axios";
import { mutate } from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";
// Alerts
import { toastifySuccess, toastifyError } from "@/app/lib/alerts";

function CardFollowUp({
  facebook,
  instagram,
  linkedin,
  twitter,
  youtube,
  toggle,
  id,
  open,
  index,
}) {
  const token = getToken();

  const [isUpdate, setIsUpdate] = useState(false);
  const [facebookVal, setFacebookVal] = useState(facebook || "");
  const [twitterVal, setTwitterVal] = useState(twitter || "");
  const [youtubeVal, setYoutubeVal] = useState(youtube || "");
  const [instagramVal, setInstagramVal] = useState(instagram || "");
  const [linkedinVal, setLinkedInVal] = useState(linkedin || "");

  const providerFQS = {
    facebook,
    instagram,
    linkedin,
    twitter,
    youtube,
    toggle,
    id,
    open,
    isUpdate,
    setIsUpdate,
    facebookVal,
    setFacebookVal,
    twitterVal,
    setTwitterVal,
    youtubeVal,
    setYoutubeVal,
    instagramVal,
    setInstagramVal,
    linkedinVal,
    setLinkedInVal,
  };

  // Delete
  const handleDeleteFqsFollow = async (e, id) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_URL_BD}/api/FollowUpPages/delete/${id}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toastifySuccess(`Deleted FollowUp ${index + 1} successfully`);
      mutate(
        `${process.env.NEXT_PUBLIC_URL_BD}/api/FollowUpPages/show_all`,
        true
      );
    } catch (err) {
      toastifyError(err.message);
    }
  };

  // Update
  const handelUpdateFqsFollow = async (e, id) => {
    try {
      // const { data } = await axios({
      //   url: `${process.env.NEXT_PUBLIC_URL_BD}/api/FollowUpPages/delete/${id}`,
      //   method: "POST",
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
    } catch (err) {
      toastifyError(err.message);
    }
  };

  return (
    <>
      <FAQFollowUp
        {...providerFQS}
        callBackDelete={handleDeleteFqsFollow}
        callBackUpdate={handelUpdateFqsFollow}
        index={index}
      />
    </>
  );
}

export default CardFollowUp;
