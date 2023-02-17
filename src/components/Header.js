import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/wildwest.jpg";
import useOnline from "../utils/useOnline";
//chunking
//code Splitting
//lazy loading
//Dynamic bundling
//On demand loading
//Dynamic  importing
// const LoggedInUser = () => {
//   //API call to authente
//   return true;
// };
const Title = () => (
  //   <h1 id="title" key="title key11">
  //  Daaaa Tinu
  //   </h1>
  <a href="/">
    <img
      src={Logo}
      // src="http://wirally.com/wp-content/uploads/2019/01/3-daa-tinu.jpg"
      alt="logo"
      className="logo"
    />
  </a>
);
const HeaderComponent = () => {
  const [titleName, setTitleName] = useState("Daa Tinu");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  // console.log("render")
  return (
    <div className="header">
      {/* {jsxHeading}
          {Heading()}
          <Heading/> 
          {10+1}<br/>
          {string}
          {console.log(string)}
        <h1>Namaste React Functional Component</h1> */}
      <Title />
      {/* <button onClick={()=>setTitleName("new food app")}>click button</button>
        <h1>{titleName}</h1> */}
      <div className="nav-items">
        <ul>
          {" "}
          <li>
            <Link to="/">Home</Link>
          </li>{" "}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">instamart</Link>
          </li>
          <li>Cart</li>
          <li>{isOnline ? "online" : "offline"}</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>login</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>logout</button>
      )}
    </div>
  );
};
export default HeaderComponent;
// javascript expression vs statements
