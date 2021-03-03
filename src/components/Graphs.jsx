import React from "react";
import styled from "styled-components";

const Graphs = ({ countries }) => {
  return <ChartContainer countries={countries}>CHARTS</ChartContainer>;
};

export default Graphs;

const ChartContainer = styled.div`
  height: 90%;
  width: 99.5%;
  border: 1px solid deepskyblue;
`;
