/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { withRouter } from "react-router";
import "./Home.scss";
import logo from "../../assets/images/c8becc5c456eaa096fca22fb49ace7af.jpg";

class Home extends React.Component {
//   componentDidMount() {
//       setTimeout(() => {
//           this.props.history.push('./todo')
//       }, 3000)
//   }

  render() {
    return (
      <>
        <div>Hellllo home</div>
        <div className="logo">
          <img className="logo-img" src={logo}/>
        </div>
      </>
    );
  }
}

export default withRouter(Home);
