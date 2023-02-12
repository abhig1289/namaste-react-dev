import React from 'react'

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
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
export default HeaderComponent