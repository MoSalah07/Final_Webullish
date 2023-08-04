import React, { useState } from "react";
// Components
// Fetch Data
import axios from "axios";
import { mutate } from "swr";
// Validation Form
import { useForm } from "react-hook-form";
// token
import { getToken } from "@/app/lib/localStorage";
// Alerts
import { toastifySuccess, toastifyError } from "@/app/lib/alerts";

function CreateFollowUp({ setIsCreated }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const token = getToken();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleCreateMagazine = async ({
    facebook,
    youtube,
    instagram,
    twitter,
    linkedin,
  }) => {
    try {
      setIsDisabled(true);
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_URL_BD}/api/FollowUpPages/save`,
        method: "POST",
        data: {
          facebook,
          youtube,
          instagram,
          twitter,
          linkedin,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsDisabled(false);
      toastifySuccess("Added Folllow Up successfully");
      mutate(
        `${process.env.NEXT_PUBLIC_URL_BD}/api/FollowUpPages/show_all`,
        true
      );
      reset();
        setTimeout(() => {
          setIsCreated(false);
        }, 500);
    } catch (err) {
      toastifyError(err.message);
      setIsDisabled(false);
    }
    setIsDisabled(false);
  };
  return (
    <div>
      <div className="mb-6">
        <h3 className="font-semibold text-lg capitalize">add followUp pages</h3>
        <form className="mt-12" onSubmit={handleSubmit(handleCreateMagazine)}>
          <div className="flex flex-col justify-center gap-2 mb-2">
            <label className="capitalize font-medium" htmlFor="facebook">
              facebook
            </label>
            <input
              className={`py-2 outline-primary-btn rounded-primary-rounded px-4
      placeholder:text-sm`}
              id="facebook"
              name="facebook"
              type="text"
              placeholder="Facebook"
              {...register("facebook", { required: "Please Enter Facebook" })}
            />
            {errors.facebook && (
              <div className="text-red-500">{errors.facebook.message}</div>
            )}
          </div>
          <div className="flex flex-col justify-center gap-2 mb-2">
            <label className="capitalize font-medium" htmlFor="youtube">
              youtube
            </label>
            <input
              className={`py-2 outline-primary-btn rounded-primary-rounded px-4
      placeholder:text-sm`}
              id="youtube"
              name="youtube"
              type="text"
              placeholder="Youtube"
              {...register("youtube", { required: "Please Enter Youtube" })}
            />
            {errors.youtube && (
              <div className="text-red-500">{errors.youtube.message}</div>
            )}
          </div>
          <div className="flex flex-col justify-center gap-2 mb-2">
            <label className="capitalize font-medium" htmlFor="instagram">
              instagram
            </label>
            <input
              className={`py-2 outline-primary-btn rounded-primary-rounded px-4
      placeholder:text-sm`}
              id="instagram"
              name="instagram"
              type="text"
              placeholder="Instagram"
              {...register("instagram", { required: "Please Enter Instagram" })}
            />
            {errors.instagram && (
              <div className="text-red-500">{errors.instagram.message}</div>
            )}
          </div>
          <div className="flex flex-col justify-center gap-2 mb-2">
            <label className="capitalize font-medium" htmlFor="twitter">
              twitter
            </label>
            <input
              className={`py-2 outline-primary-btn rounded-primary-rounded px-4
      placeholder:text-sm`}
              id="twitter"
              name="twitter"
              type="text"
              placeholder="Twitter"
              {...register("twitter", { required: "Please Enter Twitter" })}
            />
            {errors.twitter && (
              <div className="text-red-500">{errors.twitter.message}</div>
            )}
          </div>
          <div className="flex flex-col justify-center gap-2 mb-2">
            <label className="capitalize font-medium" htmlFor="linkedin">
              linkedin
            </label>
            <input
              className={`py-2 outline-primary-btn rounded-primary-rounded px-4
      placeholder:text-sm`}
              id="linkedin"
              name="linkedin"
              type="text"
              placeholder="Linkedin"
              {...register("linkedin", { required: "Please Enter Linkedin" })}
            />
            {errors.linkedin && (
              <div className="text-red-500">{errors.linkedin.message}</div>
            )}
          </div>
          <div className="flex sm:items-center flex-col justify-center gap-6 sm:gap-0 sm:flex-row sm:justify-between mt-12">
            <button
              className="py-2 px-4 border-primary-btn border rounded-primary-rounded capitalize text-sm order-[2] sm:-order-last"
              onClick={() => setIsCreated(false)}
            >
              cancel
            </button>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:justify-center gap-2 sm:gap-6 lg:gap-12">
              <button
                disabled={isDisabled}
                className="py-2 px-8 bg-primary-btn text-primary-white rounded-primary-rounded capitalize text-sm"
              >
                save
              </button>
              <button
                disabled={true}
                className="py-2 px-4 border-primary-btn border rounded-primary-rounded capitalize text-sm"
              >
                save & create another
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateFollowUp;
