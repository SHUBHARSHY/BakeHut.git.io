import React, { lazy, Suspense } from "react";

import {  Outlet } from "react-router-dom";


import { Provider } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Store from "./utils/Store";


// below code is called LazyLoading
// const Instamart = lazy(() => import("./src/components/header/Instamart"));
//Upon On Demand Loading -> upon render -> suspends loading



// AppLayout component to render: Header, Body and Footer Component
 const App = () => {
  return (
    <Provider store={Store} >
    <React.Fragment>
      <Header />
      
      <Outlet />
      <Footer />
    </React.Fragment>
    </Provider>
  );
};


export default App

