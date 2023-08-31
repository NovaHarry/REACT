import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
      userData: {},
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("componentDidMount Called");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount called");
  }

  render() {
    //PROPS DESTRUCTURING
    // const { name, location } = this.props;

    //STATE DESTRUCTURING
    // const { count, count2 } = this.state;

    //const { login, avatar_url } = this.state.userData;

    return (
      <div className="user-class">
        {/* <img src={avatar_url} />
        <h1>Name : {login}</h1> */}
      </div>
    );
  }
}

export default UserClass;
