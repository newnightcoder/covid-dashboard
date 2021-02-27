import React from "react";
import styled from "styled-components";

const WorldMap = () => {
  return <MapContainer>WORLD MAP</MapContainer>;
};

export default WorldMap;

const MapContainer = styled.div`
  grid-row: 3;
  grid-column: 1;
  margin-top: 3vh;
  height: 93%;
  width: 99.5%;
  border: 1px solid white;
`;
