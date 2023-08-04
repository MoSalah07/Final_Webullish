import React, { useState } from "react";
// Validation
import { useForm } from "react-hook-form";
// Fetch
import axios from "axios";
import { mutate } from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";
// Alerts
import { toastifySuccess, toastifyError } from "@/app/lib/alerts";
import UploadImage from "../team/teamCreate/UploadImage";

function CreateFeature({ setIsCreated }) {
  const [isDisabled, setIsDisabled] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm();

  const token = getToken();

  const handelCreateFeature = async ({
    featureName,
    description,
    image,
    icon,
  }) => {
    try {
      setIsDisabled(true);
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_URL_BD}/api/feature/save`,
        method: "POST",
        data: {
          name: featureName,
          description,
          icon: icon,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      mutate(`${process.env.NEXT_PUBLIC_URL_BD}/api/feature/show_all`, true);
      toastifySuccess(`feature added successfully`);
      setIsDisabled(false);
      reset();
      setTimeout(() => {
        setIsCreated(false);
      }, 1000);
    } catch (err) {
      toastifyError(err.message);
      setIsDisabled(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold capitalize mb-8">add new feature</h2>
      <form onSubmit={handleSubmit(handelCreateFeature)}>
        {/* <div className="mb-2">
          <UploadImage register={register} errors={errors} title={`Feature`} />
        </div> */}
        <div className="flex flex-col justify-center gap-2 mb-2">
          <label className="capitalize font-medium" htmlFor="featureName">
            feature name
          </label>
          <input
            {...register("featureName", {
              required: "Please Enter Feature Name",
            })}
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm`}
            id="featureName"
            name="featureName"
            type="text"
            placeholder="Feature Name"
          />
          {errors.featureName && (
            <div className="text-red-500">{errors.featureName.message}</div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-2 mb-2">
          <label className="capitalize font-medium" htmlFor="description">
            description
          </label>
          <input
            {...register("description", {
              required: "Please Enter Your description",
            })}
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm`}
            id="description"
            name="description"
            type="text"
            placeholder="description"
          />
          {errors.description && (
            <div className="text-red-500">{errors.description.message}</div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-2 mb-2">
          <label className="capitalize font-medium" htmlFor="icon">
            Icon
          </label>
          <input
            {...register("icon", {
              required: "Please Enter icon",
            })}
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm`}
            id="icon"
            name="icon"
            type="text"
            placeholder="icon"
          />
          {errors.icon && (
            <div className="text-red-500">{errors.icon.message}</div>
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
            <button className="py-2 px-4 border-primary-btn border rounded-primary-rounded capitalize text-sm">
              save & create another
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateFeature;
