import React from "react";
// Fetch
import axios from "axios";
import { mutate } from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";
// Validation
import { useForm } from "react-hook-form";

function CreateLive({ setIsCreated }) {
  const token = getToken();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFacebook = async ({ facebookLink, descriptionFacebook }) => {
    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_URL_BD}/api/livefacebook/save`,
        data: {
          description: descriptionFacebook,
          link: facebookLink,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-primary-text text-xl capitalize font-semibold">
          add new live
        </h3>
      </div>
      <h5 className="mb-5 capitalize text-base font-semibold">
        Add new all platform live
      </h5>
      <form onSubmit={handleSubmit(handleFacebook)}>
        <div className="mb-12">
          <div className="flex flex-col justify-center gap-2 mb-2">
            <label className="capitalize font-medium" htmlFor="livefaceboock">
              live facebook
            </label>
            <input
              className={`py-2 outline-primary-btn rounded-primary-rounded px-4
      placeholder:text-sm`}
              id="livefaceboock"
              name="livefaceboock"
              type="text"
              placeholder="live faceboock link"
              {...register("facebookLink", {
                required: "Please Enter Facebook Link",
              })}
            />
            {errors.facebookLink && (
              <div className="text-red-500">{errors.facebookLink.message}</div>
            )}
          </div>
          <div className="flex flex-col justify-center gap-2 mb-2">
            <label
              className="capitalize font-medium"
              htmlFor="descriptionfacebook"
            >
              Description live facebook
            </label>
            <input
              className={`py-2 outline-primary-btn rounded-primary-rounded px-4
      placeholder:text-sm`}
              id="descriptionfacebook"
              name="descriptionfacebook"
              type="text"
              placeholder="Description"
              {...register("descriptionFacebook", {
                required: "Please Enter Description Facebook",
              })}
            />
            {errors.descriptionFacebook && (
              <div className="text-red-500">
                {errors.descriptionFacebook.message}
              </div>
            )}
          </div>
        </div>
        <div className="flex sm:items-center flex-col justify-center gap-6 sm:gap-0 sm:flex-row sm:justify-between mt-12">
          <button
            className="py-2 px-4 border-primary-btn border rounded-primary-rounded capitalize text-sm order-[2] sm:-order-last"
            onClick={(e) => {
              setIsCreated(false);
              e.preventDefault();
            }}
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
      <form className="mt-16">
        <div className="mb-12">
          <div className="flex flex-col justify-center gap-2 mb-2">
            <label className="capitalize font-medium" htmlFor="livetwitter">
              live twitter
            </label>
            <input
              className={`py-2 outline-primary-btn rounded-primary-rounded px-4
      placeholder:text-sm`}
              id="livetwitter"
              name="livetwitter"
              type="text"
              placeholder="live twitter"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 mb-2">
            <label
              className="capitalize font-medium"
              htmlFor="descriptiontwitter"
            >
              Description live twitter
            </label>
            <input
              className={`py-2 outline-primary-btn rounded-primary-rounded px-4
      placeholder:text-sm`}
              id="descriptiontwitter"
              name="descriptiontwitter"
              type="text"
              placeholder="Description"
            />
          </div>
        </div>
        <div className="flex sm:items-center flex-col justify-center gap-6 sm:gap-0 sm:flex-row sm:justify-between mt-12">
          <button
            className="py-2 px-4 border-primary-btn border rounded-primary-rounded capitalize text-sm order-[2] sm:-order-last"
            onClick={(e) => {
              setIsCreated(false);
              e.preventDefault();
            }}
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
      <form className="mt-16">
        <div className="mb-12">
          <div className="flex flex-col justify-center gap-2 mb-2">
            <label className="capitalize font-medium" htmlFor="liveyoutube">
              live youtube
            </label>
            <input
              className={`py-2 outline-primary-btn rounded-primary-rounded px-4
      placeholder:text-sm`}
              id="liveyoutube"
              name="liveyoutube"
              type="text"
              placeholder="liveyoutube link"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 mb-2">
            <label
              className="capitalize font-medium"
              htmlFor="descriptionyoutube"
            >
              Description live youtube
            </label>
            <input
              className={`py-2 outline-primary-btn rounded-primary-rounded px-4
      placeholder:text-sm`}
              id="descriptionyoutube"
              name="descriptionyoutube"
              type="text"
              placeholder="Description"
            />
          </div>
        </div>
        <div className="flex sm:items-center flex-col justify-center gap-6 sm:gap-0 sm:flex-row sm:justify-between mt-12">
          <button
            className="py-2 px-4 border-primary-btn border rounded-primary-rounded capitalize text-sm order-[2] sm:-order-last"
            onClick={(e) => {
              setIsCreated(false);
              e.preventDefault();
            }}
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
      <form className="mt-16">
        <div className="mb-12">
          <div className="flex flex-col justify-center gap-2 mb-2">
            <label className="capitalize font-medium" htmlFor="liveinstagram">
              live instagram
            </label>
            <input
              className={`py-2 outline-primary-btn rounded-primary-rounded px-4
      placeholder:text-sm`}
              id="liveinstagram"
              name="liveinstagram"
              type="text"
              placeholder="liveinstagram link"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 mb-2">
            <label
              className="capitalize font-medium"
              htmlFor="descriptioninstagram"
            >
              Description live instagram
            </label>
            <input
              className={`py-2 outline-primary-btn rounded-primary-rounded px-4
      placeholder:text-sm`}
              id="descriptioninstagram"
              name="descriptioninstagram"
              type="text"
              placeholder="Description"
            />
          </div>
        </div>
        <div className="flex sm:items-center flex-col justify-center gap-6 sm:gap-0 sm:flex-row sm:justify-between mt-12">
          <button
            className="py-2 px-4 border-primary-btn border rounded-primary-rounded capitalize text-sm order-[2] sm:-order-last"
            onClick={(e) => {
              setIsCreated(false);
              e.preventDefault();
            }}
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
      <form className="mt-16">
        <div className="mb-12">
          <div className="flex flex-col justify-center gap-2 mb-2">
            <label className="capitalize font-medium" htmlFor="livelinkedin">
              live linkedin
            </label>
            <input
              className={`py-2 outline-primary-btn rounded-primary-rounded px-4
      placeholder:text-sm`}
              id="livelinkedin"
              name="livelinkedin"
              type="text"
              placeholder="live linkedin link"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 mb-2">
            <label
              className="capitalize font-medium"
              htmlFor="descriptionlinkedin"
            >
              Description live linkedin
            </label>
            <input
              className={`py-2 outline-primary-btn rounded-primary-rounded px-4
      placeholder:text-sm`}
              id="descriptionlinkedin"
              name="descriptionlinkedin"
              type="text"
              placeholder="Description"
            />
          </div>
        </div>
        <div className="flex sm:items-center flex-col justify-center gap-6 sm:gap-0 sm:flex-row sm:justify-between mt-12">
          <button
            className="py-2 px-4 border-primary-btn border rounded-primary-rounded capitalize text-sm order-[2] sm:-order-last"
            onClick={(e) => {
              setIsCreated(false);
              e.preventDefault();
            }}
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
  );
}

export default CreateLive;
