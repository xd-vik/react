import React from "react";
import { useRouteError } from "react-router-dom";

export const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <div>
      <h1>Something went wrong !</h1>
      <h2>{status + " : " + statusText}</h2>
    </div>
  );
};
