import React, { useState } from "react";
// Components
import UploadImage from "../team/teamCreate/UploadImage";
import DatePicker from "../utils/DatePickerInput";
// Fetch Data
import axios from "axios";
import { mutate } from "swr";
// Validation Form
import { useForm } from "react-hook-form";
// token
import { getToken } from "@/app/lib/localStorage";

function CreateMagazine({ setIsCreated }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [datesend, setDatesend] = useState(new Date());
  const token = getToken();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleCreateMagazine = async ({
    title,
    author,
    description,
    name,
    image,
  }) => {
    if (!datesend) return;

    const handleDateSend = `${datesend.getFullYear()}-${
      datesend.getMonth() + 1
    }-${datesend.getDate()}`;
    try {
      setIsDisabled(true);
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_URL_BD}/api/magazine/save`,
        method: "POST",
        data: {
          name,
          datesend: handleDateSend,
          description,
          Image: image,
          author,
          title,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsDisabled(false);
      mutate(`${process.env.NEXT_PUBLIC_URL_BD}/api/magazine/show_all`, true);
      reset();
    } catch (err) {
      console.log(err.message);
      setIsDisabled(false);
    }
    setIsDisabled(false);
    setDatesend(new Date());
    setIsCreated(false);
  };

  return (
    <div>
      <div className="mb-6">
        <h3 className="font-semibold text-lg capitalize">
          add new blog magazine
        </h3>
        <form onSubmit={handleSubmit(handleCreateMagazine)}>
          <div className="my-8">
            <UploadImage
              title={`magazine`}
              register={register}
              errors={errors}
            />
          </div>
          <h3 className="font-semibold text-lg capitalize mb-4">
            add new magazine
          </h3>
          <div className="flex flex-col justify-center gap-2 mb-2">
            <label className="capitalize font-medium" htmlFor="title">
              title
            </label>
            <input
              className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm`}
              id="title"
              name="title"
              type="text"
              placeholder="Title"
              {...register("title", { required: "Please Enter Title" })}
            />
            {errors.title && (
              <div className="text-red-500">{errors.title.message}</div>
            )}
          </div>
          <div className="flex flex-col justify-center gap-2 mb-2">
            <label className="capitalize font-medium" htmlFor="author">
              Author
            </label>
            <input
              className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm`}
              id="author"
              name="author"
              type="text"
              placeholder="Author Name"
              {...register("author", { required: "Please Enter Author" })}
            />
            {errors.author && (
              <div className="text-red-500">{errors.author.message}</div>
            )}
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
              {...register("name", { required: "Please Enter Name" })}
            />
            {errors.name && (
              <div className="text-red-500">{errors.name.message}</div>
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
          <div className="mt-8 flex flex-col justify-center gap-2 mb-2 w-full ">
            <label className="capitalize font-medium" htmlFor="date">
              Date
            </label>
            <DatePicker setDatesend={setDatesend} />
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

export default CreateMagazine;
