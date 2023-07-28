"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
// Featch
import axios from "axios";
// Use_Form_Validation
import { useForm } from "react-hook-form";
// Alerts
import { toastifySuccess, toastifyError } from "@/app/lib/alerts";

function LoginForm() {
  const refPassword = useRef(undefined);

  const [loading, setLoading] = useState(false);

  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleIconPassword = () => {
    if (refPassword && typeof refPassword.current !== "undefined") {
      if (refPassword.current.type === "password") {
        refPassword.current.type = "text";
      } else {
        refPassword.current.type = "password";
      }
    }
  };

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_BD}/api/login`,
        {
          email,
          password,
        }
      );
      toastifySuccess('Logged in successfully');
      localStorage.setItem("token", JSON.stringify(data.access_token));
      localStorage.setItem("token_type", JSON.stringify(data.token_type));
      push("/dashboard");
    } catch (err) {
      toastifyError(err.message);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className=" w-full sm:w-[60%] flex flex-col justify-center gap-4"
    >
      <div className="flex flex-col justify-center gap-2">
        <label
          className="capitalize text-primary-text text-base sm:text-xl"
          htmlFor="email"
        >
          email
        </label>
        <input
          className={`w-full p-3 border-none outline-primary-blue bg-secondary-white placeholder:text-sm placeholder:text-text-light`}
          name="email"
          type="email"
          placeholder="Enter Your Email"
          id="email"
          {...register("email", {
            required: "Please Enter Email",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
              message: "Please enter valid email",
            },
          })}
  
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
      </div>
      <div className="flex flex-col justify-center gap-2 relative">
        <label
          className="capitalize text-primary-text text-base sm:text-xl"
          htmlFor="password"
        >
          password
        </label>
        <input
          className={`w-full p-3 border-none outline-primary-blue bg-secondary-white placeholder:text-sm placeholder:text-text-light`}
          ref={refPassword}
          name="password"
          type="password"
          placeholder="Enter Your Password"
          id="password"
          {...register("password", {
            required: "Please Enter Password",
            minLength: {
              value: 6,
              message: "Password is more than 5 chars",
            },
          })}

          // onChange={getValues}
        />
        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
        <Image
          className="absolute top-[50%] right-4 translate-y-1/4 hover:cursor-pointer z-50"
          src={`/assets/images/login/eyeslash.svg`}
          alt="icon-password"
          height={24}
          width={24}
          onClick={handleIconPassword}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <input type="checkbox" id="remember" name="remember" />
          <label
            className="text-primary-text text-xs sm:text-sm font-medium"
            htmlFor="remember"
          >
            Remember me
          </label>
        </div>
        <div>
          <Link
            href={`/login`}
            className="text-primary-blue text-xs sm:text-sm font-medium"
          >
            Forget password?
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <button
          className="w-full bg-primary-blue text-primary-white py-2 rounded-primary-rounded capitalize font-medium"
          type="submit"
          disabled={loading}
        >
          login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
