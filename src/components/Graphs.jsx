import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// import { fetchHistoric } from "../api/index";
import { Line } from "react-chartjs-2";

const Graphs = ({
  country,
  graphsData: { dates, cases, recov, dead },
  chartCountry,
  showGlobalData,
}) => {
  return (!dates || !cases || !recov || !dead) && !showGlobalData ? (
    <ChartContainer>
      <div style={style}>
        oops sorry!
        <br /> There is no historic data available for this country...
      </div>
    </ChartContainer>
  ) : (
    <ChartContainer>
      {country && !showGlobalData ? (
        <Line
          height={40}
          width={100}
          maintainAspectRatio={false}
          data={{
            labels: dates,
            datasets: [
              {
                data: cases,
                label: "Confirmed cases",
                borderWidth: 2,
                pointBorderWidth: 0,
                pointBackgroundColor: "red",
                pointRadius: 0,
                borderColor: "red",
              },
              {
                data: recov,
                label: "Recovered",
                borderWidth: 2,
                pointBorderWidth: 0,
                pointBackgroundColor: "red",
                pointRadius: 0,
                borderColor: "limegreen",
              },
              {
                data: dead,
                label: "Deaths",
                borderWidth: 2,
                pointBorderWidth: 0,
                pointBackgroundColor: "red",
                pointRadius: 0,
                borderColor: "lightgrey",
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: `${chartCountry.toUpperCase()} - EVOLUTION OF COVID-19 SINCE JANUARY 2020`,
            },
            legend: {
              labels: {
                fontColor: "white",
                padding: 12,
              },
            },
          }}
        />
      ) : (
        <div style={style}>select a country</div>
      )}
    </ChartContainer>
  );
};

export default Graphs;

const ChartContainer = styled.div`
  height: 90%;
  width: 99.5%;
  border: 2px solid gray;
`;

const style = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  fontSize: "1.25rem",
  lineHeight: "1.75rem",
  color: "#eee",
  // border: "1px solid red",
};
