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

function CreatePerformance({ setIsCreated }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isDisabled, setIsDisabled] = useState(false);

  const token = getToken();

  const handleCreatePerformance = async ({
    month,
    symbol,
    target,
    reached,
    comment,
  }) => {
    try {
      setIsDisabled(true);
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_URL_BD}/api/performance/save`,
        method: "POST",
        data: {
          sympol: symbol,
          target,
          reached,
          comment,
          month_id: month,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      reset();
      toastifySuccess("Added successfully");
      mutate(
        `${process.env.NEXT_PUBLIC_URL_BD}/api/performance/show_all`,
        true
      );
      setIsDisabled(false);
      setIsCreated(false);
    } catch (err) {
      toastifyError(err.message);
      setIsDisabled(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-primary-text text-xl capitalize font-semibold">
          add new performance
        </h3>
      </div>
      <form onSubmit={handleSubmit(handleCreatePerformance)}>
        <h5 className="mb-5 capitalize text-base font-semibold">
          add new performance
        </h5>
        <div className="flex flex-col justify-center gap-2 mb-3">
          <label className="capitalize font-medium" htmlFor="sympol">
            symbol
          </label>
          <input
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm`}
            id="sympol"
            name="sympol"
            type="text"
            placeholder="sympol"
            {...register("symbol", { required: "Please Enter Symbol" })}
          />
          {errors.symbol && (
            <div className="text-red-500">{errors.symbol.message}</div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-2 mb-3">
          <label className="capitalize font-medium" htmlFor="target">
            target
          </label>
          <input
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm [&::-webkit-inner-spin-button]:appearance-none`}
            id="target"
            name="target"
            type="number"
            min={0}
            max={100}
            placeholder="target"
            {...register("target", { required: "Please Enter Target" })}
          />
          {errors.target && (
            <div className="text-red-500">{errors.target.message}</div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-2 mb-3">
          <label className="capitalize font-medium" htmlFor="reached">
            reached
          </label>
          <input
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm [&::-webkit-inner-spin-button]:appearance-none`}
            id="reached"
            name="reached"
            type="number"
            min={0}
            max={100}
            placeholder="reached%"
            {...register("reached", { required: "Please Enter Reached" })}
          />
          {errors.reached && (
            <div className="text-red-500">{errors.reached.message}</div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-2 mb-3">
          <label className="capitalize font-medium" htmlFor="comment">
            comment
          </label>
          <input
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm [&::-webkit-inner-spin-button]:appearance-none`}
            id="comment"
            name="comment"
            type="text"
            placeholder="comment"
            {...register("comment", { required: "Please Enter Comment" })}
          />
          {errors.comment && (
            <div className="text-red-500">{errors.comment.message}</div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-2 mb-3">
          <label className="capitalize font-medium" htmlFor="month">
            month
          </label>
          <select
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm text-text-light`}
            id="month"
            name="month"
            type="text"
            {...register("month", { required: "Please Select Month" })}
          >
            <option value={``}>Choose Month</option>
            <option value={`1`}>january</option>
            <option value={`2`}>february</option>
            <option value={`3`}>march</option>
            <option value={`4`}>april</option>
            <option value={`5`}>may</option>
            <option value={`6`}>june</option>
            <option value={`7`}>july</option>
            <option value={`8`}>august</option>
            <option value={`9`}>september</option>
            <option value={`10`}>october</option>
            <option value={`11`}>november</option>
            <option value={`12`}>december</option>
          </select>
          {errors.month && (
            <div className="text-red-500">{errors.month.message}</div>
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
  );
}

export default CreatePerformance;
