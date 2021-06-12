import React, { useState } from "react";
import { connect } from "react-redux";

import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

function Header(props) {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const { authedUser, user } = props;
  const avatar = user ? user.avatarURL : "";
  const name = user ? user.name : "";

  return (
    <Navbar>
      <NavbarBrand href="/" className="mr-auto">
        Would You Rather
      </NavbarBrand>
      <div className="visible-sm">
        {user !== null && (
          <div className="user-list">
            <div className="nav-user" id={authedUser}>
              <NavLink className="btn" to="/logout">
                <img
                  src={avatar}
                  alt={`Avatar of ${authedUser}`}
                  className="nav-avatar"
                />
                Log out
              </NavLink>
            </div>
          </div>
        )}
      </div>
      <NavbarToggler
        onClick={toggleNavbar}
        className="mr-2 menu-btn-burger"
        id="menuToggle"
      >
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      </NavbarToggler>
      <Collapse isOpen={!collapsed} navbar>
        <Nav className="navbar">
          <NavItem>
            <NavLink to="/dashboard" activeClassName="active">
              Dashboard
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/add" activeClassName="active">
              New Question
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/leaderboard" activeClassName="active">
              Leader Board
            </NavLink>
          </NavItem>

          {user !== null && (
            <div className="user-list hidden-sm">
              <div className="nav-user" id={authedUser}>
                <img
                  src={avatar}
                  alt={`Avatar of ${authedUser}`}
                  className="nav-avatar"
                />
                <h4>{name}</h4>
                <NavLink className="btn" to="/logout" color="link">
                  Logout
                </NavLink>
              </div>
            </div>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

function mapStateToProps({ authedUser, users }) {
  return {
    user: authedUser ? users[authedUser] : null,
  };
}
export default connect(mapStateToProps)(Header);
