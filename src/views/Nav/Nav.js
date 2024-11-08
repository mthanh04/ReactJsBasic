import React from "react";
import "./Nav.scss";
// eslint-disable-next-line no-unused-vars
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/" activeClassName="active" exact={true}>
          Home
        </NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/user">User</NavLink>
      </div>
    );
  }
}

export default Nav;
