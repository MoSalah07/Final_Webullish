"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
// Fetch Data
import axios from "axios";
import useSWR from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";

function DetailMagazine() {
  const token = getToken();
  const idParams = useSearchParams().get("id");

  const fetcher = async (url) => {
    try {
      const { data } = await axios({
        url: url,
        method: "POST",
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
    data: magazineDetails,
    error,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_URL_BD}/api/magazine/show/${idParams}`,
    fetcher
  );

  const currentMagazine =
    magazineDetails &&
    Array.isArray(magazineDetails) &&
    magazineDetails.find((item) => item.id === Number(idParams));

  console.log(currentMagazine);

  return (
    <>
      {magazineDetails ? (
        <div className="w-full">
          <div className="mb-8">
            <Link
              href={`/magazine`}
              className="text-semibold text-primary-text transition-colors hover:text-primary-blue"
            >
              Go To Magazine
            </Link>
          </div>
          <div className="w-full flex items-center justify-center">
            <Image
              src={currentMagazine.image}
              alt={currentMagazine.title}
              height={261}
              width={200}
              className=" w-[70%] h-[400px] mx-auto"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-8 mt-16 text-center font-normal md:font-medium">
            <p className="text-lg sm:text-xl md:text-2xl">
              {currentMagazine.title}
            </p>
            <p>{currentMagazine.author}</p>
            <p className="text-text-light text-base sm:text-lg">
              {currentMagazine.description}
            </p>
            <p>{currentMagazine.datesend}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-12 items-center justify-center h-[80vh] font-bold text-primary-red">
          <Link href={`/magazine`}>Back To Magazine</Link>
          <span className="text-primary-black">No Details Magazine</span>
        </div>
      )}
    </>
  );
}

export default DetailMagazine;
