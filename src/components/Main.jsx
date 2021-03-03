import React, { useState } from "react";
import styled from "styled-components";
import WorldMap from "./WorldMap";
import Graphs from "./Graphs";

const Main = ({ countries, country }) => {
  const [isToggled, setToggle] = useState(false);
  const [toggleBtnText, setToggleBtnText] = useState("to graphs");

  const toggleMain = () => {
    setToggle((isToggled) => !isToggled);
    isToggled
      ? setToggleBtnText("to graphs")
      : setToggleBtnText(" back to map ");
  };

  return (
    <MainContainer>
      <MainButton onClick={toggleMain}>{toggleBtnText}</MainButton>
      {isToggled ? (
        <Graphs countries={countries} />
      ) : (
        <WorldMap countries={countries} />
      )}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  grid-row: 3;
  grid-column: 1;
  margin-top: 1.5vh;
  height: 97%;
  width: 99.5%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const MainButton = styled.button`
  width: 13%;
  height: 5%;
  outline: none;
  font-size: 0.9rem;
  font-weight: 500;
  color: #353535;
  border: 1px solid white;
  border-radius: 2px;
  &:hover {
    cursor: pointer;
  }
`;

export default Main;
