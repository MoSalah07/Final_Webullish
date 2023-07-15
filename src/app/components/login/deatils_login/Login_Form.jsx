"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

function LoginForm() {
  const refPassword = useRef();

  const handleIconPassword = () => {
    if (refPassword && typeof refPassword.current !== "undefined") {
      if (refPassword.current.type === "password") {
        refPassword.current.type = "text";
      } else {
        refPassword.current.type = "password";
      }
    }
  };

  return (
    <form className=" w-full sm:w-[60%] flex flex-col justify-center gap-4">
      <div className="flex flex-col justify-center gap-2">
        <label className="capitalize text-primary-text text-base sm:text-xl" htmlFor="email">
          email
        </label>
        <input
          className={`w-full p-3 border-none outline-primary-blue bg-secondary-white placeholder:text-sm placeholder:text-text-light`}
          name="email"
          type="email"
          placeholder="Enter Your Email"
          id="email"
        />
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
          name="password"
          type="password"
          placeholder="Enter Your Password"
          id="password"
          ref={refPassword}
        />
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
            className="text-primary-text text-sm font-medium"
            htmlFor="remember"
          >
            Remember me
          </label>
        </div>
        <div>
          <Link
            href={`/login`}
            className="text-primary-blue text-sm font-medium"
          >
            Forget password?
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <button className="w-full bg-primary-blue text-primary-white py-2 rounded-primary-rounded capitalize font-medium" type="submit">login</button>
      </div>
    </form>
  );
}

export default LoginForm;
