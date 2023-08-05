import React from "react";
// Components
import FAQComponent from "../../utils/FAQComponent";
// Fetch Data
import axios from "axios";
import { mutate } from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";
// Alerts
import { toastifySuccess, toastifyError } from "@/app/lib/alerts";

function FeatureCard({ name, description, toggle, id, open }) {
  const token = getToken();

  const providerFQS = {
    name,
    description,
    toggle,
    id,
    open,
  };

  const handleDeleteFqs = async (e, id) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_URL_BD}/api/feature/delete/${id}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toastifySuccess(`Deleted ${name || ""} successfully`);
      mutate(`${process.env.NEXT_PUBLIC_URL_BD}/api/feature/show_all`, true);
    } catch (err) {
      toastifyError(err.message);
    }
  };

  return (
    <>
      <FAQComponent {...providerFQS} callBackDelete={handleDeleteFqs} />
    </>
  );
}

export default FeatureCard;
