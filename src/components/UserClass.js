import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
      userData: {},
    };
  }

  async componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("componentDidMount Called");
    // }, 1000);
    const fetching = await fetch("https://api.github.com/users/NovaHarry");
    const data = await fetching.json();
    this.setState({ userData: data });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    // console.log("componentWillUnmount called");
  }

  render() {
    //PROPS DESTRUCTURING
    const { name, location } = this.props;

    //STATE DESTRUCTURING
    // const { count, count2 } = this.state;

    const { avatar_url } = this.state.userData;

    return (
      <div className="grid justify-center gap-2">
        <img src={avatar_url} className="w-60" />
        <UserContext.Consumer>
          {(data) => <h1 className="font-bold">Name : {data.userName}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
