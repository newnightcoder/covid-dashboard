import React, { useState } from "react";
import styled from "styled-components";
import WorldMap from "./WorldMap";
import Graphs from "./Graphs";

const Main = ({
  countries,
  country,
  chartCountry,
  graphsData,
  showGlobalData,
}) => {
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
      <MainButtonContainer>
        <MainButton onClick={toggleMain}>{toggleBtnText}</MainButton>
      </MainButtonContainer>
      {isToggled ? (
        <Graphs
          countries={countries}
          country={country}
          chartCountry={chartCountry}
          graphsData={graphsData}
          showGlobalData={showGlobalData}
        />
      ) : (
        <WorldMap countries={countries} />
      )}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  grid-row: 3;
  grid-column: 1;
  /* margin: 1.5vh 0 0 0.25vw; */
  /* height: 97%; */
  /* width: 99.3%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
`;

const MainButtonContainer = styled.div`
  min-height: 30px;
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  border: 1px solid green;
`;

const MainButton = styled.button`
  width: 120px;
  min-height: 25px;
  outline: none;
  font-size: 0.9rem;
  font-weight: 500;
  color: #353535;
  border: 1px solid white;
  border-radius: 2px;
  /* margin-top: 1.25vh; */
  &:hover {
    cursor: pointer;
  }
`;

export default Main;
