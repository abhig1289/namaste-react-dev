import axios from "axios";
import { minify } from "csso";
import React, { useState, useEffect, Children } from "react";
import ReactDOM from "react-dom/client";
import "./../index.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import * as XYZ from "./components/Header";
import HeaderComponent from "./components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
// import Title from "./components/Header";
// import Header from "./Header";
// HMR- Hot Module Replacement
// Created a Server
// File watch algorithm -C++
// Bundling
// minify
// cleaning our coding
// Dev and Production
// Tree Shaking=removing unwanted code
// Super fast build algorithm
// Image Optimization
//Caching by development
// Compression
// Compatible with older versions of Chrome
// HTTPS on dev
//  Port number
// Consistent Hashing algoritm
// Zero config
//
//
//
// Transitive dependencies

//     JSX      =>        React.createElement       ===         Object        =>     HTML(DOM)
// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     className: "title",
//     key: "h1",
//   },
//   "Namaste Abhilash"
// );
// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "title1",
//     className: "title1",
//     key: "h2",
//   },
//   "Namaste Abhilash 1"
// );
// // React.createElement is an object
// const heading2 = React.createElement(
//   "h1",
//   {
//     id: "title2",
//     className: "title2",
//     key: "h3",
//   },
//   "Namaste Abhilash g 2"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//     key: "head",
//   },
//   [React.createElement(
//     "h1",
//     {
//       id: "title",
//       className: "title",
//       key: "h1",
//     },
//     "Heading 1 of the project"
//   ), React.createElement(
//     "ul",
//     {
//     },
//    [React.createElement(
//     "li",
//     {
//       id: "title",
//       className: "title",
//       key: "h1",
//     },
//     "Li element 1"
//   ),  React.createElement(
//     "li",
//     {
//       id: "title",
//       className: "title",
//       key: "h1",
//     },
//     "Li Element 2"
//   )]
//   )]
// );
//Jsx is html like syntax
// -------------------------------------App Layout ----------------------------------------------------------------
// Header
//     -Logo
//     -Nav listItems
//     -Cart
// Body
//     -SearchBar
//     -RestauranList
//         -RestaurantCard
//             -Image
//             -Name
//             -Rating
//             -Cuisines
// Footer
//      -links and copyright
const styleObj = {
  backgroundColor: "green",
};
const jsxHeading = (
  // inline styling
  <h1 id="title" style={{ backgroundColor: "red" }} key="title key">
    expression aite direct curly brace
  </h1>
);
// const Heading =()=> (
//   <h1 id="title" key="title key11">
//     Function aite call cheyali
//   </h1>
// );

// React Component
// Class Component
// Functional Component
// Functional Name start with Capital Letter -Non-mandatory
// returns JSX element/React element

const string = "xyz";
// const data =api.getData()

// config driven UI
const config = [
  {
    type: "corousal",

    cards: [{ offerName: "50% off" }, { offerName: "No Delivery Chaarges%" }],
  },
  {
    type: "restaurants",

    cards: [
      {
        name: "Shah gouse",
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ks4d93rjtcbitkzkbqx0",
        cuisine: ["Biryani", "Hyderabadi"],
        rating: "4.4",
      },
      {
        name: "Shah gouse",
        image:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ks4d93rjtcbitkzkbqx0",
        cuisine: ["Biryani", "Hyderabadi"],
        rating: "4.4",
      },
    ],
  },
];

const ShahGouse = {
  name: "Shah gouse",
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ks4d93rjtcbitkzkbqx0",
  cuisine: ["Biryani", "Hyderabadi"],
  rating: "4.4",
};

//props === properties
// no key <<<<<<<<<<<<<<<<< index key << unique key
//SPA-single page application
//Two routings-CLient side routing and server side routing
const AppLayout = () => {
  return (
    //React.Fragment === component exported by react <React.Fragment/>===<></>
    //JSX expression must have only one parent component
    <React.Fragment>
      <HeaderComponent />
      {/* <About />
      <Body />
      <Contact />  */}
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
        children:[{
          path: "profile",
          element: <Profile />,
          errorElement: <Error />,
        }]
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing the react element inside the root
// root.render(heading)
// root.render(jsxHeading);
root.render(<RouterProvider router={appRouter} />);
// root.render(<Header />);
