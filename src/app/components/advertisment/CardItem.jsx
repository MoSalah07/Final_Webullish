import React from "react";
import Image from "next/image";
// Fetch
import axios from "axios";
import { mutate } from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";

function CardItem({ name, image, description, id, video }) {
  const token = getToken();

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_URL_BD}/api/advertisement/delete/${id}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      mutate(
        `${process.env.NEXT_PUBLIC_URL_BD}/api/advertisement/show_all`,
        true
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="border-2 border-border-color block">
      <div className="w-full">
        <Image
          src={video}
          alt={name}
          width={310}
          height={230}
          priority
          // className="w-full"
        />
      </div>
      <div className="p-4 flex flex-col justify-center gap-3 mt-4">
        <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-primary-black">
          {name}
        </h4>
        <p className="text-text-p font-normal text-sm sm:text-base md:text-lg">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between p-4">
        <button className="py-[6px] px-5 rounded-primary-rounded capitalize bg-transparent text-secondary-blue text-sm border-secondary-blue  border">
          update
        </button>
        <button
          onClick={(e) => handleDelete(e, id)}
          className="py-[6px] px-5 rounded-primary-rounded capitalize text-sm bg-primary-red text-primary-white"
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default CardItem;
