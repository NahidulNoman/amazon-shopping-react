import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1 className="">Ops! An Error Ocurred!</h1>
      {error && (
        <div>
          <p className="">{error.statusText || error.message}</p>
          <p>{error.status}</p>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
