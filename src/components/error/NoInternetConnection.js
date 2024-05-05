import React from 'react';
import './NoInternetConnection.css';

function NoInternetConnection() {
  return (
    <div className="no-internet">
        <img src={require("../../images/cloud.png")} alt="No Internet Connection" />
      <h1>No Internet Connection</h1>
      <p>Please check your network settings and try again.</p>
    </div>
  );
}

export default NoInternetConnection;
