import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { fetchHistoric } from "../api/index";
import { Line, Bar } from "react-chartjs-2";

const Graphs = ({
  country,
  graphsData: { dates, cases, recov, dead },
  chartCountry,
}) => {
  return !dates || !cases || !recov || !dead ? (
    <ChartContainer>
      <div style={style}>
        oops sorry! we do not have any info for this country
      </div>
    </ChartContainer>
  ) : (
    <ChartContainer>
      {country ? (
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
              text: chartCountry.toUpperCase(),
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

  // return (

  // );
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
  border: "1px solid red",
  fontSize: "2rem",
  color: "#eee",
};
