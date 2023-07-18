"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ImageCardMagazine from "../../../../../public/assets/images/magazine/magazine_details.svg";
import Image from "next/image";
import Link from "next/link";

function DetailMagazine() {
  const [cardsMagazine, setCardsMagazine] = useState([
    {
      id: 1,
      image: ImageCardMagazine,
      title: "HCP new insert item",
      date: new Date(),
      description:
        "There are many variations of passages of Lorem Ipsum available",
    },
    {
      id: 2,
      image: ImageCardMagazine,
      title: "HCP new insert item",
      date: new Date(),
      description:
        "There are many variations of passages of Lorem Ipsum available",
    },
    {
      id: 3,
      image: ImageCardMagazine,
      title: "HCP new insert item",
      date: new Date(),
      description:
        "There are many variations of passages of Lorem Ipsum available",
    },
  ]);

  const queryPathName = usePathname().split(`/`)[2];

  useEffect(() => {
    if (queryPathName) {
      setCardsMagazine((prev) => prev.find((item) => item.id == queryPathName));
    }
  }, [queryPathName]);

  return (
    <>
      {cardsMagazine && Array.isArray(cardsMagazine) !== true ? (
              <div className="w-full">
                  <div className="mb-8">
                      <Link href={`/magazine`} className="text-semibold text-primary-text transition-colors hover:text-primary-blue">Go To Magazine</Link>
                  </div>
          <div className="w-fullflex items-center justify-center">
            <Image
              src={cardsMagazine.image}
              alt={cardsMagazine.title}
              height={261}
              width={200}
              className=" w-[70%] mx-auto"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-8 mt-16 text-center font-normal md:font-medium">
            <p className="text-lg sm:text-xl md:text-2xl">{cardsMagazine.title}</p>
            <p>author</p>
            <p className="text-text-light text-base sm:text-lg">{cardsMagazine.description}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-12 items-center justify-center h-[80vh] font-bold text-primary-red">
          <Link href={`/magazine`}>Back To Magazine</Link>
          <span className="text-primary-black">No Details Magazine</span>
        </div>
      )}
    </>
    //   <div></div>
  );
}

export default DetailMagazine;
