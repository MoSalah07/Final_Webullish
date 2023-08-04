import React from "react";
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

  const providerFQS = {
    facebook,
    instagram,
    linkedin,
    twitter,
    youtube,
    toggle,
    id,
    open,
  };

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

  return (
    <>
      <FAQFollowUp
        {...providerFQS}
        callBackDelete={handleDeleteFqsFollow}
        index={index}
      />
    </>
  );
}

export default CardFollowUp;
