import { minify } from "csso";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
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
const jsxHeading = (
  <h1 id="title" key="title key">
    expression aite direct curly brace
  </h1>
);
const Heading =()=> (
  <h1 id="title" key="title key11">
    Function aite call cheyali
  </h1>
);
// React Component
// Class Component
// Functional Component
// Functional Name start with Capital Letter -Non-mandatory
// returns JSX element/React element

const string = "xyz";
// const data =api.getData()
const HeaderComponent = () => {
  return (
    <div>
        {jsxHeading}
        {Heading()}
        <Heading/> 
        {10+1}<br/>
        {string}
        {console.log(string)}
      <h1>Namaste React Functional Component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing the react element inside the root
// root.render(heading)
// root.render(jsxHeading);
root.render(<Header />);
