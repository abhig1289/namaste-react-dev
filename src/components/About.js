import React, { Component } from "react";
import ProfileClass from "./ProfileClass";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
// const About2 = () => {
//   return (
//     <>
//       <h1>About us</h1>
//       <p>class 7 ochindraa hooka</p>
//       <Profile name={"abhi"} />
//       <ProfileClass name={"abhi class"} />
//     </>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent- constructor");
  }
componentDidMount() {
    console.log("componentDidMount");
   
  }
  render() {
    console.log("render");
    return (
      <>
        <h1>About us</h1>
        <p>class 7 ochindraa hooka</p>
        {/* <Profile name={"abhi"} /> */}
        <ProfileClass name={"first abhi class"} />
        <ProfileClass name={"second abhi class"} />
      </>
    );
  }
}

export default About;

// parent constructor
// parent render
//  child constructor
//  child render
//  second child constructor
//  second child render
//  first child componentDidMount
//  second child componentDidMount
// Parent child componentDidMount
