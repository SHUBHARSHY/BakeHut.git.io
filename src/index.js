import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ErrorPage from "./components/error/ErrorPage";
import About from "./components/header/About";
import Classprofile from "./components/about/Classprofile";
import Home from "./components/Home";
import Body from "./components/Body";
import Contact from "./components/header/Contact";
import Cart from "./components/header/Cart";
import Restaurentmenu from "./components/Restaurentmenu";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MyAccount from './components/MyAccount/MyAccount';
import ForgotPass from './components/header/ForgotPass';
import ResetPassword from './components/header/ResetPassword';



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Classprofile />,
          },
        ],
      },
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/my-account",
        element: <MyAccount />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurentmenu />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPass/>,
      },
      {
        path: "/reset-password/:id/:token",
        element: <ResetPassword/>,
      },
        ],
      },
      // {
      //   path: "/instamart",
      //   element: ( <Suspense fallback={<Shimmer/>}>
      //     <Instamart />
      //     </Suspense>
            
      //       ),
      // },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
