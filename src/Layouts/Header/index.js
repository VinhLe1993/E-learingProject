import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <a className="navbar-brand" href="#">
          E-Learning
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
           <li className="nav-item">
               <NavLink activeStyle={{color:'white'}} exact className="nav-link" to="/">Home</NavLink>
           </li>
          </ul>
          <ul className="navbar-nav">
           <li className="nav-item">
               <NavLink activeStyle={{color:'white'}} className="nav-link" exact to="/signup">Sign up</NavLink>
           </li>
           <li className="nav-item">
               <NavLink className="nav-link" exact to="/signin">Sign in</NavLink>
           </li>
          </ul>
        </div>
      </nav>
    );
  }
}
