import React from "react";

function UploadImage({title = 'Image', setImageVal = '', register = {}, errors = {}}) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full sm:w-1/2 lg:w-1/3 h-40 border-2 border-primary-white border-dashed rounded-lg cursor-pointer bg-primary-blue dark:border-text-primary-white dark:hover:border-text-primary-white "
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-primary-white dark:text-primary-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-center text-primary-white dark:text-primary-white">
            <span className=" font-normal  sm:font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-center text-primary-white dark:text-primary-white">
            SVG, PNG, JPG or GIF
          </p>
        </div>
        <input {...register('image', {required: 'Please Upload Image Or Video'})} id="dropzone-file" type="file" className="hidden" />
      </label>
      <p className="capitalize text-text-light">upload image your {title}</p>
      {errors.image && <div className="text-red-500">{errors.image.message}</div>}
    </div>
  );
}

export default UploadImage;


