import React, { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);
  useEffect(() => {
    //API call after render
    console.log("useEffect");
    this.timer=setInterval(()=>console.log("react op"),1000)
    return ()=>{
      clearInterval(timer)
    console.log("useEffect return")
    
    }

  }, []);
  console.log("render");
  return (
    <div>
      <h1>Profile {props.name} </h1>
      <h2>Count:{count}</h2>
      <h2>Count2:{count2}</h2>
      <button
        onClick={() => {
          setCount((prevState) => prevState + 1);
          setCount2((prevState) => prevState + 2);
        }}
      >
        increase
      </button>
    </div>
  );
};

export default Profile;
