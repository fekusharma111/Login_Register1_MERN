import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
  position: sticky;
`;
const Tab = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  text-decoration: none;
  color: inherit;
`;

const Navbar = () => {
  return (
    <Header>
      <Toolbar>
        <Tab to={"./"}>CRUD2</Tab>
        <Tab to={"./all"}>All Users</Tab>
        <Tab to={"./add"}>Add User</Tab>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
