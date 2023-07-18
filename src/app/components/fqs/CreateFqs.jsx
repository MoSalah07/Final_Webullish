import React from "react";

function CreateFqs({setIsCreated}) {
  return (
    <div>
      <div className="mb-6">
        <h3 className="font-semibold text-lg capitalize">add new FAQ</h3>
      </div>
      <form>
        <h3 className="capitalize font-semibold mb-6">add new FAQ&apos;s</h3>
        <div className="flex flex-col justify-center gap-2 mb-2">
          <label className="capitalize font-medium" htmlFor="question">question</label>
          <input className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm`} id="question" name="question" type="text" placeholder="question"/>
        </div>
        <div className="flex flex-col justify-center gap-2 mb-2">
          <label className="capitalize font-medium" htmlFor="answer">answer</label>
          <input className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm`} id="answer" name="answer" type="text" placeholder="answer"/>
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
