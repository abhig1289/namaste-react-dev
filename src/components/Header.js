import React, { useState } from "react";

const LoggedInUser = () => {
  //API call to authente
  return true;
};
const Title = () => (
  //   <h1 id="title" key="title key11">
  //  Daaaa Tinu
  //   </h1>
  <a href="/">
    <img
      src="http://wirally.com/wp-content/uploads/2019/01/3-daa-tinu.jpg"
      alt="logo"
      className="logo"
    />
  </a>
);
const HeaderComponent = () => {
  const [titleName, setTitleName] = useState("Daa Tinu");
  const [isLoggedIn,setIsLoggedIn]=useState(false)
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>login</button> : <button onClick={()=>setIsLoggedIn(true)}>logout</button>}
    </div>
  );
};
export default HeaderComponent;
// javascript expression vs statements
