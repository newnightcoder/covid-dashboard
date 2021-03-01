import React from "react";
import styled from "styled-components";

const SideSection = () => {
  return <SideContainer></SideContainer>;
};

export default SideSection;

const SideContainer = styled.div`
  grid-column: 2;
  grid-row: 1/4;
  height: 100%;
  width: 100%;
  background-color: #272727;
  border-left: 1px solid black;
`;
