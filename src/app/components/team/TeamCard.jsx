import React from "react";
import Image from "next/image";
// Fetch
import axios from "axios";
import { mutate } from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";
// Alert
import { toastifySuccess, toastifyError } from "@/app/lib/alerts";

function TeamCard({ name, namesection, description, image, id }) {
  const token = getToken();

  const handelDeleteTeam = async (e, id) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_URL_BD}/api/team/delete/${id}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toastifySuccess("Deleted successfully");
      mutate(`${process.env.NEXT_PUBLIC_URL_BD}/api/team/show_all`, true);
    } catch (err) {
      toastifyError(err.message);
    }
  };

  return (
    <div className="border-2 border-border-color">
      <div className="w-full h-56">
        <Image
          src={image}
          alt={name}
          width={310}
          height={230}
          priority
          className="w-full h-full"
        />
      </div>
      <div className="p-4 flex flex-col justify-center gap-3 mt-4">
        <h4 className="text-xl font-semibold">{name}</h4>
        <span className="text-text-dark">{namesection}</span>
        <p className="text-text-light">{description}</p>
      </div>
      <div className="flex items-center justify-between p-4">
        <button className="py-[6px] px-5 rounded-primary-rounded capitalize bg-transparent text-secondary-blue text-sm border-secondary-blue  border">
          update
        </button>
        <button
          onClick={(e) => handelDeleteTeam(e, id)}
          className="py-[6px] px-5 rounded-primary-rounded capitalize text-sm bg-primary-red text-primary-white"
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default TeamCard;
