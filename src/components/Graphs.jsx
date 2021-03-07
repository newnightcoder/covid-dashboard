import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { fetchHistoric } from "../api/index";
import { Line, Bar } from "react-chartjs-2";

const Graphs = ({ country }) => {
  const [date, setDate] = useState([]);
  const [confirmed, setConfirmed] = useState([]);
  const mountedRef = useRef(true);

  const fetchChartData = async () => {
    const fetchedChartData = await fetchHistoric();
    console.log(fetchedChartData.dates);
    setDate(fetchedChartData.dates);
    setConfirmed(fetchedChartData.cases);
  };

  useEffect(() => {
    if (!mountedRef.current) return null;
    else fetchChartData();
    return () => (mountedRef.current = false);
  }, []);

  return (
    <ChartContainer country={country}>
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
