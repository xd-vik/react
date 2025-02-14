import { Component } from "react";
import ProfileUserClass from "./ProfileUserClass";
import {
  Github_API_User,
  Github_UserName,
  options,
} from "../public/Common/constants";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      repoInfo: null,
    };
    // console.log("Profile-Parent constructor");
  }

  async componentDidMount() {
    try {
      const response = await Promise.all([
        fetch(Github_API_User + Github_UserName, options),
        fetch(Github_API_User + Github_UserName + "/repos", options),
      ]);
      const resData = await Promise.all(response.map((r) => r.json()));

      this.setState({
        userInfo: resData[0],
        repoInfo: resData[1],
      });
    } catch (error) {
      console.error(error);
    }

    // console.log("Profile-Parent componentDidMount");
  }

  componentDidUpdate() {
    // console.log("Profile-Parent componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("Profile-Parent componentWillUnmount");
  }
  render() {
    const { userInfo, repoInfo } = this.state;
    // console.log("Profile-Parent - render");

    return (
      <>
        {userInfo && repoInfo ? (
          <div className="profile-class-container">
            <div className="profile-container">
              <h1 className="profile-title">About Me</h1>
              <ProfileUserClass userInfo={userInfo} />
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Profile;
