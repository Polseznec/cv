import React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";

const Home = () => {
  return (
    <AppContainer>
      <Nav />
    </AppContainer>
  );
};

export default Home;

export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  background-color: whitesmoke;
  min-height: 100vh;
`;
