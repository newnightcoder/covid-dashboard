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
  margin: 1.5vh 0 0 0.25vw;
  height: 97%;
  width: 99.3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid yellow; */
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
  margin-top: 1.25vh;
  &:hover {
    cursor: pointer;
  }
`;

export default Main;
