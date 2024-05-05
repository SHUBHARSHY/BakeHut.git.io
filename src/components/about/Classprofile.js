import React, { Component } from "react";
import "./Classprofile.css";

export class Classprofile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy Name",
        location: "dummy location",
        bio: "",
        avatar_url: "",
      },
    };

  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SHUBHARSHY");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    // console.log("child--- componentDidUpdate")
  }
  componentWillUnmount() {
    // console.log("child--- componentWillUnmount")
  }

  render() {
    console.log("Child--render ");
    return (
      <div className=".about-profile-container">
        <div className="profile-class-container">

          <div className="profile-container">
            <h2 className="profile-title">About Me</h2>
            <div className="profile-user-card">

            <img src={this.state.userInfo.avatar_url} className="profile-user-img"/>
            <h2 style={{margin:"0"}}>{this.state.userInfo.name}</h2>
            <h2 className="profile-user-bio">{this.state.userInfo.bio}</h2>
            <h2 style={{margin:"0"}}> {this.state.userInfo.location}</h2>
            </div>
      </div>

            <div className="repo-container">

<h1 className="repo-title" > About My Work</h1>

                <div>
              <a className="anchor-title" href="https://github.com/SHUBHARSHY">
<h2 className="profile-repo-container">Bake <span style={{color:"#808927", padding: "0 7px"}}>Hut</span>  App Repository</h2>
              </a>
<h3 className="repo-des"> The BakeHut food ordering and delivery app, developed using React.js, is a comprehensive web application that includes four distinct components: a home page, an about page, a contact us page, and a login page. The home page features an intuitive add-to-cart section that allows users to easily customize their orders. The app also incorporates offline functionality, displaying a notification when the network connection is lost, ensuring uninterrupted usage. A shimmer effect is implemented to provide smooth and visually appealing transitions between loading states. Live API fetching enables real-time updates on menu items, prices, and availability. React Router DOM is utilized for seamless navigation between different pages. The app also employs Redux Toolkit for efficient state management, and is bundled with Parcel for optimized code delivery. These features and technologies together create a robust and user-friendly food ordering and delivery experience on the BakeHut app.</h3>
                <div className="profile-repo-items"></div>
                </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Classprofile;
