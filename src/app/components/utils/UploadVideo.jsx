import React from "react";

function UploadVideo({ title = "", setVideoVal, videoVal }) {
  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="large_size"
      >
        Large file input
      </label>
      <input
        className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-primary-blue dark:placeholder-gray-400"
        id="large_size"
        type="file"
        onChange={(e) => setVideoVal(e.target.files[0])}
      ></input>
    </div>
  );
}

export default UploadVideo;
