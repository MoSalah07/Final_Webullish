"use client";
import React from "react";
// Validation
import { useForm } from "react-hook-form";
// Fetch Data
import axios from "axios";
import {mutate} from 'swr';
// Token
import { getToken } from "@/app/lib/localStorage";

function CreateFqs({ setIsCreated }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const token = getToken();

  const handlerSubmit = async ({ answer, question }) => {
    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_URL_BD}/api/faq/save`,
        method: "POST",
        data: {
          question: question,
          answer: answer,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      mutate(`${process.env.NEXT_PUBLIC_URL_BD}/api/faq/show_all`, true);
      reset();
      setIsCreated(false)
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h3 className="font-semibold text-lg capitalize">add new FAQ</h3>
      </div>
      <form onClick={handleSubmit(handlerSubmit)}>
        <h3 className="capitalize font-semibold mb-6">add new FAQ&apos;s</h3>
        <div className="flex flex-col justify-center gap-2 mb-2">
          <label className="capitalize font-medium" htmlFor="question">
            question
          </label>
          <input
            {...register("question", {
              required: "Please Enter Your Question",
            })}
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm`}
            id="question"
            name="question"
            type="text"
            placeholder="question"
          />
          {errors.question && (
            <div className="text-red-500">{errors.question.message}</div>
          )}
        </div>
        <div className="flex flex-col justify-center gap-2 mb-2">
          <label className="capitalize font-medium" htmlFor="answer">
            answer
          </label>
          <input
            {...register("answer", { required: "Please Enter Your Answer" })}
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm`}
            id="answer"
            name="answer"
            type="text"
            placeholder="answer"
          />
          {errors.answer && (
            <div className="text-red-500">{errors.answer.message}</div>
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

export default CreateFqs;
