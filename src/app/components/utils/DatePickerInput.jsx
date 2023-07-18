"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerInput() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      className={`py-2 outline-primary-btn rounded-primary-rounded px-4
    placeholder:text-sm w-full`}
    />
  );
}

export default DatePickerInput;
