import React from "react";
import Image from "next/image";
import Link from "next/link";
// Fetch
import axios from "axios";
import { mutate } from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";
// Alerts
import { toastifySuccess, toastifyError } from "@/app/lib/alerts";

function Card({ title, image, datesend, description, id, author, name }) {
  const token = getToken();

  const handleDeleteMagazine = async (e, id) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_URL_BD}/api/magazine/delete/${id}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toastifySuccess("Deleted successfully");
      mutate(`${process.env.NEXT_PUBLIC_URL_BD}/api/magazine/show_all`, true);
    } catch (err) {
      toastifyError(err.message);
    }
  };

  return (
    <Link
      href={`/magazine/detailsmagazine?id=${id}`}
      className="border-2 border-border-color flex flex-col justify-center"
    >
      <div className="w-full">
        <Image
          src={image}
          alt={title}
          width={310}
          height={230}
          priority
          className="w-full"
        />
      </div>
      <div className="p-4 flex flex-col justify-center gap-3 mt-4 flex-1">
        <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-primary-black">
          {title}
        </h4>
        <span className="text-secondary-gray font-normal text-sm sm:text-base md:text-lg">
          {datesend}
        </span>
        <p className="text-text-p font-normal text-sm sm:text-base md:text-lg flex-1">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between p-4">
        <button className="py-[6px] px-5 rounded-primary-rounded capitalize bg-transparent text-secondary-blue text-sm border-secondary-blue  border">
          update
        </button>
        <button
          onClick={(e) => handleDeleteMagazine(e, id)}
          className="py-[6px] px-5 rounded-primary-rounded capitalize text-sm bg-primary-red text-primary-white"
        >
          delete
        </button>
      </div>
    </Link>
  );
}

export default Card;
