import React from "react";

function CreatePerformance({ setIsCreated }) {
  return (
    <div>
      <div className="mb-8">
        <h3 className="text-primary-text text-xl capitalize font-semibold">
          add new performance
        </h3>
      </div>
      <form>
        <h5 className="mb-5 capitalize text-base font-semibold">add new performance</h5>
        <div className="flex flex-col justify-center gap-2 mb-2">
          <label className="capitalize font-medium" htmlFor="sympol">
            sympol
          </label>
          <input
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm`}
            id="sympol"
            name="sympol"
            type="text"
            placeholder="sympol"
          />
        </div>
        <div className="flex flex-col justify-center gap-2 mb-2">
          <label className="capitalize font-medium" htmlFor="target">
            target
          </label>
          <input
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm`}
            id="target"
            name="target"
            type="text"
            placeholder="target"
          />
        </div>
        <div className="flex flex-col justify-center gap-2 mb-2">
          <label className="capitalize font-medium" htmlFor="reached">
            reached
          </label>
          <input
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm`}
            id="reached"
            name="reached"
            type="text"
            placeholder="reached%"
          />
        </div>
        <div className="flex flex-col justify-center gap-2 mb-2">
          <label className="capitalize font-medium" htmlFor="comment">
            comment
          </label>
          <input
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm`}
            id="comment"
            name="comment"
            type="text"
            placeholder="comment"
          />
        </div>
        <div className="flex flex-col justify-center gap-2 mb-2">
          <label className="capitalize font-medium" htmlFor="month">
            month
          </label>
          <select
            className={`py-2 outline-primary-btn rounded-primary-rounded px-4
          placeholder:text-sm text-text-light`}
            id="month"
            name="month"
            type="text"
          >
            <option>Choose Month</option>
            <option value={`january`}>january</option>
            <option value={`february`}>february</option>
            <option value={`march`}>march</option>
            <option value={`april`}>april</option>
            <option value={`may`}>may</option>
            <option value={`june`}>june</option>
            <option value={`july`}>july</option>
            <option value={`august`}>august</option>
            <option value={`september`}>september</option>
            <option value={`october`}>october</option>
            <option value={`november`}>november</option>
            <option value={`december`}>december</option>
          </select>
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

export default CreatePerformance;
