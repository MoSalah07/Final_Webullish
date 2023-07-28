import React from "react";
// Fetch
import axios from "axios";
import { mutate } from "swr";
// Token
import { getToken } from "@/app/lib/localStorage";
// Validation
import { useForm } from "react-hook-form";

function DynamicForm({
  handleSubmitForm = null,
  registerLink = "",
  registerDes = "",
  label = "",
  setIsCreated = {},
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="mt-16">
      <div className="mb-12">
        <div className="flex flex-col justify-center gap-2 mb-8">
          <label className="capitalize font-medium" htmlFor={`live${label}`}>
            live {label}
          </label>
          <input
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
  placeholder:text-sm placeholder:capitalize`}
            id={`live${label}`}
            name="livefaceboock"
            type="text"
            placeholder={`live ${label} link`}
            {...register(registerLink, {
              required: "Please Enter Facebook Link",
            })}
          />
          {errors.registerLink && (
            <div className="text-red-500">{errors.registerLink.message}</div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-2 mb-2">
          <label
            className="capitalize font-medium"
            htmlFor={`description${label}`}
          >
            Description live {label}
          </label>
          <input
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
  placeholder:text-sm`}
            id={`description${label}`}
            name="descriptionfacebook"
            type="text"
            placeholder={`Description ${label}`}
            {...register(registerDes, {
              required: "Please Enter Description Facebook",
            })}
          />
          {errors.registerDes && (
            <div className="text-red-500">{errors.registerDes.message}</div>
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

export default DynamicForm;
