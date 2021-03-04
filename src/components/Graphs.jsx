import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { fetchHistoric } from "../api/index";
import { Line, Bar } from "react-chartjs-2";

const Graphs = ({ countries }) => {
  const [date, setDate] = useState([]);
  const [confirmed, setConfirmed] = useState([]);
  const mountedRef = useRef(true);

  const fetchChartData = async () => {
    const chartData = await fetchHistoric();
    console.log("test", chartData);
    console.log(Object.values(chartData)[0][0].date);
    let chartDataArray = Object.values(chartData).map((value) => value);
    console.log("countriesArray", chartDataArray);

    const dates = chartDataArray.map((array) =>
      array.map((index) => index.date)
    );
    const cases = chartDataArray.map((array) =>
      array.map((index) => index.confirmed)
    );

    console.log("dates afghanistan", dates[0]);
    console.log("cases afghanistan", cases[0]);

    setDate(dates[0]);
    setConfirmed(cases[0]);
    // return dates, cases;
  };

  useEffect(() => {
    if (!mountedRef.current) return null;
    else fetchChartData();
    return () => (mountedRef.current = false);
  }, []);

  return (
    <ChartContainer countries={countries}>
      <Line
        height={40}
        width={100}
        maintainAspectRatio={false}
        data={{
          labels: date,
          datasets: [
            {
              data: confirmed,
              borderWidth: 2,
              pointBorderWidth: 0,
              pointBackgroundColor: "red",
              pointRadius: 0,
              borderColor: "red",
            },
          ],
        }}
      />
    </ChartContainer>
  );
};

export default Graphs;

const ChartContainer = styled.div`
  height: 90%;
  width: 99.5%;
  border: 2px solid gray;
`;
