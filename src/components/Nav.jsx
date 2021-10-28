import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import profilPhoto from "../media/zYI2rtj__400x400.jpeg";

const Nav = () => {
  return (
    <NavContainer>
      <div>
        <img src={profilPhoto} alt="pol seznec" />
        <h1>Pol Seznec</h1>
      </div>
      <ul>
        <Link to="/competent">Competences</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </NavContainer>
  );
};

export default Nav;

export const NavContainer = styled.div`
  border: 1px solid black;
  img {
    height: 100px;
    width: auto;
    border-radius: 50%;
  }
`;
