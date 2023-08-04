import React from "react";
import Image from "next/image";
import { Collapse } from "react-collapse";
// Fetch Data
import axios from "axios";
import { mutate } from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";
// Alerts
import { toastifySuccess, toastifyError } from "@/app/lib/alerts";

function ItemRecentachievement({ name, description, toggle, id, open }) {
  const token = getToken();

  const handleDeleteFqs = async (e, id) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_URL_BD}/api/recentachievement/delete/${id}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toastifySuccess("Deleted successfully");
      mutate(
        `${process.env.NEXT_PUBLIC_URL_BD}/api/recentachievement/show_all`,
        true
      );
    } catch (err) {
      toastifyError(err.message);
    }
  };

  return (
    <div className="pt-3 mb-4">
      <div
        onClick={toggle}
        className="bg-primary-yellow text-primary-white py-2 px-6 flex justify-between items-center cursor-pointer rounded-primary-rounded"
      >
        <p className="text-base font-bold tracking-wider basis-[87%] text-justify">
          {name}
        </p>
        <div className="text-3xl basis-[10%] flex items-center justify-center">
          {open ? (
            <Image
              src={`/assets/images/fqs/open.svg`}
              alt="open"
              height={20}
              width={20}
              priority
              className="w-auto h-auto"
            />
          ) : (
            <Image
              src={`/assets/images/fqs/close.svg`}
              alt="close"
              height={20}
              width={20}
              priority
              className="w-auto h-auto"
            />
          )}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-secondary-dark text-primary-white px-6 py-4 rounded-primary-rounded">
          {description}
        </div>
        <div className="flex justify-end items-center gap-8 bg-primary-white p-4 rounded-primary-rounded">
          <button className="bg-primary-white text-primary-btn border border-primary-btn px-6 py-[2px] text-sm rounded-primary-rounded capitalize">
            update
          </button>
          <button
            onClick={(e) => handleDeleteFqs(e, id)}
            className="bg-primary-red text-primary-white px-6 py-1 rounded-primary-rounded text-sm capitalize"
          >
            delete
          </button>
        </div>
      </Collapse>
    </div>
  );
}

export default ItemRecentachievement;
