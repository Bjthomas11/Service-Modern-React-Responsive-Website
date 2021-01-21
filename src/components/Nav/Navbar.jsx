import React from "react";
import styled from "styled-components";
import BrandLogo from "../Brand-logo/BrandLogo";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { Marginer } from "../marginer";

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;

const AccessContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: 0.3s ease-in-out;

  &:hover {
    filter: contrast(0.09);
  }
`;

const Seperator = styled.div`
  height: 35%;
  width: 1px;
  background-color: #fff;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <BrandLogo logoSize={30} textSize={18} />
      <AccessContainer>
        <NavLink>Specialist Portal</NavLink>
        <Marginer direction="horizontal" margin={10} />
        <Seperator />
        <Marginer direction="horizontal" margin={10} />
        <Button size={12} padding={0.5}>
          Register
        </Button>
        <Marginer direction="horizontal" margin={15} />
        <NavLink>Login</NavLink>
      </AccessContainer>
    </NavbarContainer>
  );
};

export default Navbar;
