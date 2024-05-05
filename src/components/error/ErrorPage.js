import React from 'react';
import './ErrorPage.css';
import { useRouteError } from 'react-router'

function ErrorPage() {
    const err = useRouteError();
  return (
    <div className="error">
      <h1>Oops! Something went wrong</h1>
      <p>Please try again later.</p>
      <p>{err.status + " : " + err.statusText}</p>
      <img src={require("../../images/error.png")} alt="Error" />
    </div>
  );
}

export default ErrorPage;
