import Image from "next/image";
import React from "react";

function PerformanceSuccess() {
  return (
    <div>
      <div className=" mb-4 md:mb-2">
        <h5 className="font-bold text-center md:text-left text-base capitalize text-primary-yellow">
          our success this month!
        </h5>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex gap-6 sm:gap-12 ml-4 sm:ml-12">
          <div className="flex flex-col justify-center gap-6 border-r border-text-light pr-4 sm:pr-12">
            <div className="w-14 h-14 bg-primary-green flex items-center justify-center rounded-primary-rounded">
              <Image
                src={`/assets/images/performance/Vector.svg`}
                alt="logo"
                width={28}
                height={28}
                priority
              />
            </div>
            <div className="text-primary-green font-bold ml-3">75%</div>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <div className="w-14 h-14 bg-secondary-red flex items-center justify-center rounded-primary-rounded">
              <Image
                src={`/assets/images/performance/power.svg`}
                alt="logo"
                width={28}
                height={28}
                priority
              />
            </div>
            <div className="text-secondary-red font-bold ml-3">25%</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-1 justify-center items-center mt-8 md:mt-0">
          <div>
            <h5 className="text-primary-yellow font-bold">
              <span className="text-primary-green mr-2">75%</span>Successful
              Predictions
            </h5>
          </div>
          <div className=" w-full md:w-[30%] h-2 ml-5">
            <span className="inline-block w-[75%] bg-primary-green h-full"></span>
            <span className="inline-block w-[25%] bg-secondary-red h-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceSuccess;
