import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    //create store
    // this.state = {
    //   count1: 0,
    //   count2: 1,
    // };
    this.state = {
      userInfo: {
        name: "Dummy User",
        location: "Dummy Location",
        avatar_url:"/"
      },
    };
    console.log("Child constructor");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/abhig1289");
    const json = await data.json();
    console.log("json")
    this.setState({
      userInfo: json,
    });
    this.timer=setInterval(()=>console.log("react op"),1000)
    console.log("Child componentDidMount" + this.props.name);
  }
  componentDidUpdate() {
    console.log("Child componentDidUpdate");
  }
  componentWillUnmount() {

    clearInterval(this.timer)
    console.log("Child componentWillUnmount")
  }
  render() {
    const { count1, count2 } = this.state;
    console.log("Child render" + this.props.name);
    return (
      <>
        <h1>Class Based Component {this.props.name}</h1>
        <h2>not a functionalComponent</h2>
        {/* <h3>Count:{count1}</h3>
        <h3>Count2:{count2}</h3> */}
        <img src={this.state.userInfo?.avatar_url} alt="noo image" />
        <h1>name:{this.state.userInfo?.name}</h1>
        <h1>XYZ:{this.state.userInfo?.location}</h1>
        {/* we never mutate state directly 
        never do this.state=something
        */}
        <button
          onClick={() => {
            // this.setState({
            //   count1: 2 ,
            //   count2: 3,
            // });
          }}
        >
          increase
        </button>
      </>
    );
  }
}
export default ProfileClass;
