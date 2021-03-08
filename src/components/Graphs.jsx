import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { fetchHistoric } from "../api/index";
import { Line, Bar } from "react-chartjs-2";

const Graphs = ({
  country,
  graphsData: { dates, cases, recov, dead },
  chartCountry,
}) => {
  //   const [date, setDate] = useState([]);
  //   const [confirmed, setConfirmed] = useState([]);
  //   const [recovered, setRecovered] = useState([]);
  //   const [deaths, setDeaths] = useState([]);
  //   const mountedRef = useRef(true);

  //   const fetchChartData = async (country) => {
  //     const fetchedChartData = await fetchHistoric(country);
  //     console.log(fetchedChartData.dates);
  //     setDate(fetchedChartData.dates);
  //     setConfirmed(fetchedChartData.cases);
  //     setRecovered(fetchedChartData.recov);
  //     setDeaths(fetchedChartData.dead);
  //   };

  //   useEffect(() => {
  //     if (!mountedRef.current) return null;
  //     else fetchChartData();
  //     return () => (mountedRef.current = false);
  //   }, []);
  return (
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
