"use client";

import React, { useState, useEffect } from "react";
// Alerts
import { ToastContainer } from "react-toastify";

function ToastifyContainerLayout() {
  const [isLoading, setIsLoading] = useState(false);

  // Avoid hydration error
  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <>
      {isLoading && (
        <ToastContainer limit={1} position="bottom-center" autoClose={1000}>
        </ToastContainer>
      )}
    </>
  );
}

export default ToastifyContainerLayout;
