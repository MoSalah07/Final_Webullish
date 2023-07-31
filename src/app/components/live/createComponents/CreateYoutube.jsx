import React from "react";
// Fetch
import axios from "axios";
import { mutate } from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";
// Validation
import { useForm } from "react-hook-form";
// Alerts
import { toastifySuccess, toastifyError } from "@/app/lib/alerts";

function CreateYoutube({ setIsCreated }) {
  // Validation Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Token
  const token = getToken();

  const handleCreateYoutube = async ({ linkYoutube, descriptionYoutube }) => {
    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_URL_BD}/api/liveyoutube/save`,
        method: "POST",
        data: {
          description: descriptionYoutube,
          link: linkYoutube,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      reset();
      toastifySuccess("Added Youtube successfully");
      mutate(
        `${process.env.NEXT_PUBLIC_URL_BD}/api/liveyoutube/show_all`,
        true
      );
    } catch (err) {
      toastifyError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleCreateYoutube)} className="mt-16">
      <div className="mb-12">
        <div className="flex flex-col justify-center gap-2 mb-8">
          <label className="capitalize font-medium" htmlFor={`liveYoutube`}>
            live Youtube
          </label>
          <input
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
placeholder:text-sm placeholder:capitalize`}
            id={`liveYoutube`}
            name="liveYoutube"
            type="text"
            placeholder={`live Youtube link`}
            {...register("linkYoutube", {
              required: "Please Enter Youtube Link",
            })}
          />
          {errors.linkYoutube && (
            <div className="text-red-500">{errors.linkYoutube.message}</div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-2 mb-2">
          <label
            className="capitalize font-medium"
            htmlFor={`descriptionYoutube`}
          >
            Description live Youtube
          </label>
          <input
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
placeholder:text-sm`}
            id={`descriptionYoutube`}
            name="descriptionfacebook"
            type="text"
            placeholder={`Description Youtube`}
            {...register("descriptionYoutube", {
              required: "Please Enter Description Youtube",
              minLength: {
                value: 8,
                message: "Password is more than 7 chars",
              },
            })}
          />
          {errors.descriptionYoutube && (
            <div className="text-red-500">
              {errors.descriptionYoutube.message}
            </div>
          )}
        </div>
      </div>
      <div className="flex sm:items-center flex-col justify-center gap-6 sm:gap-0 sm:flex-row sm:justify-between mt-8">
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
  );
}

export default CreateYoutube;
