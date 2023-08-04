import React from "react";
import Image from "next/image";
import { Collapse } from "react-collapse";

function FAQFollowUp({
  facebook,
  instagram,
  linkedin,
  twitter,
  youtube,
  toggle,
  id,
  open,
  index,
  callBackDelete = () => {},
  callBackUpdate = false,
}) {
  return (
    <div className="pt-3 mb-4">
      <div
        onClick={toggle}
        className="bg-primary-yellow text-primary-white py-2 px-6 flex justify-between items-center cursor-pointer rounded-primary-rounded"
      >
        <p className="text-base font-bold tracking-wider basis-[87%] text-justify">
          {`Follow Up (${index + 1})`}
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
          <div className="mb-4 capitalize">
            <h5 className="text-primary-yellow font-semibold text-lg mb-2">
              follow up facebook
            </h5>
            <span>{facebook}</span>
          </div>
          <div className="mb-4 capitalize">
            <h5 className="text-primary-yellow font-semibold text-lg mb-2">
              follow up twitter
            </h5>
            <span>{twitter}</span>
          </div>
          {linkedin && (
            <div className="mb-4 capitalize">
              <h5 className="text-primary-yellow font-semibold text-lg mb-2">
                follow up linkedin
              </h5>
              <span>{linkedin}</span>
            </div>
          )}
          <div className="mb-4 capitalize">
            <h5 className="text-primary-yellow font-semibold text-lg mb-2">
              follow up instagram
            </h5>
            <span>{instagram}</span>
          </div>
          <div className="mb-4 capitalize">
            <h5 className="text-primary-yellow font-semibold text-lg mb-2">
              follow up youtube
            </h5>
            <span>{youtube}</span>
          </div>
        </div>
        <div className="flex justify-end items-center gap-8 bg-primary-white p-4 rounded-primary-rounded">
          <button className="bg-primary-white text-primary-btn border border-primary-btn px-6 py-[2px] text-sm rounded-primary-rounded capitalize">
            update
          </button>
          <button
            onClick={(e) => callBackDelete(e, id)}
            className="bg-primary-red text-primary-white px-6 py-1 rounded-primary-rounded text-sm capitalize"
          >
            delete
          </button>
        </div>
      </Collapse>
    </div>
  );
}

export default FAQFollowUp;
