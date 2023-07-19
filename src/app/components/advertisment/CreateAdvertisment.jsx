import React from "react";
// Components
import UploadImage from "../team/teamCreate/UploadImage";

function CreateAdvertisment({ setIsCreated }) {
  return (
    <div>
      <div className="mb-6">
        <h3 className="font-semibold text-lg capitalize">
          add new Advertisment
        </h3>
        <form>
          <div className="my-8">
            <UploadImage title={`Advertisment`} />
          </div>
          <div className="flex flex-col justify-center gap-2 mb-2">
            <label className="capitalize font-medium" htmlFor="name">
              Name
            </label>
            <input
              className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm`}
              id="name"
              name="name"
              type="text"
              placeholder="name"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 mb-2">
            <label htmlFor="description">description</label>
            <textarea
              placeholder="Description"
              className="border-none outline-primary-btn h-52 resize-none px-4 py-2"
              name="description"
              id="description"
            ></textarea>
          </div>
          <div className="flex sm:items-center flex-col justify-center gap-6 sm:gap-0 sm:flex-row sm:justify-between mt-12">
            <button
              className="py-2 px-4 border-primary-btn border rounded-primary-rounded capitalize text-sm order-[2] sm:-order-last"
              onClick={() => setIsCreated(false)}
            >
              cancel
            </button>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:justify-center gap-2 sm:gap-6 lg:gap-12">
              <button className="py-2 px-8 bg-primary-btn text-primary-white rounded-primary-rounded capitalize text-sm">
                save
              </button>
              <button className="py-2 px-4 border-primary-btn border rounded-primary-rounded capitalize text-sm">
                save & create another
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAdvertisment;