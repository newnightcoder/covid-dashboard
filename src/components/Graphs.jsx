import React from "react";
import styled from "styled-components";
import { fetchHistoric } from "../api/index";

const Graphs = ({ countries }) => {
  return <ChartContainer countries={countries}>CHARTS</ChartContainer>;
};

export default Graphs;

const ChartContainer = styled.div`
  height: 90%;
  width: 99.5%;
  border: 2px solid gray;
`;

const wait = async () => {
  const test = await fetchHistoric();
  console.log("test", [test].length);
};
wait();
