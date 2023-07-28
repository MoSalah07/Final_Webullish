import React, { useState } from "react";
// Components
import UploadImage from "./UploadImage";
// Featch Data
import axios from "axios";
import { mutate } from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";
// Use_Form_Validation
import { useForm } from "react-hook-form";
// Alert
import { toastifySuccess, toastifyError } from "@/app/lib/alerts";

function AddTeamMembers({ setIsCreated }) {
  const [isLoading, setIsLoading] = useState(false);
  const token = getToken();

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm();

  const handleCreateTeam = async ({
    user,
    namesection,
    description,
    image,
  }) => {
    try {
      setIsLoading(true);
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_URL_BD}/api/team/save`,
        method: "POST",
        data: {
          name: user,
          namesection: namesection,
          description,
          Image: image,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toastifySuccess("Added successfully");
      reset();
      mutate(`${process.env.NEXT_PUBLIC_URL_BD}/api/team/show_all`, true);
      setIsLoading(false);
      setTimeout(() => {
        setIsCreated(false);
      }, 1000);
    } catch (err) {
      toastifyError(err.message);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit(handleCreateTeam)}>
        <UploadImage title={`team`} register={register} errors={errors} />
        <h3 className="font-semibold capitalize my-4">add team members</h3>
        <div className="flex flex-col justify-center gap-2 mb-2">
          <label htmlFor="user">name</label>
          <input
            placeholder="your name"
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm`}
            type="text"
            name="user"
            id="user"
            {...register("user", { required: "Please Enter User" })}
          />
          {errors.user && (
            <div className="text-red-500">{errors.user.message}</div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-2 mb-2">
          <label htmlFor="nameSection">name section</label>
          <input
            placeholder="name section"
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm`}
            type="text"
            name="nameSection"
            id="nameSection"
            {...register("namesection", {
              required: "Please Enter Name Section",
            })}
          />
          {errors.namesection && (
            <div className="text-red-500">{errors.namesection.message}</div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-2 mb-2">
          <label htmlFor="description">description</label>
          <textarea
            placeholder="Description"
            className="border-none outline-primary-btn h-52 resize-none px-4 py-2"
            name="description"
            id="description"
            {...register("description", {
              required: "Please Enter Description",
            })}
          ></textarea>
          {errors.description && (
            <div className="text-red-500">{errors.description.message}</div>
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
              type="submit"
              disabled={isLoading}
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
  );
}

export default AddTeamMembers;
