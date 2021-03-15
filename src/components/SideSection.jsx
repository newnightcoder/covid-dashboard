import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Bar } from "react-chartjs-2";
// import { Button } from "@material-ui/core";

const SideSection = ({ countries, country }) => {
  const [active, setActive] = useState("cases");
  const activeTypes = ["cases", "deaths", "recovered"];

  const [barChartCountry1, setBarChartCountry1] = useState(null);
  const [barChartCountry2, setBarChartCountry2] = useState(null);
  const [barChartCountry3, setBarChartCountry3] = useState(null);

  const selectBarChartCountry = (country) => {
    if (barChartCountry1 === null) {
      setBarChartCountry1(country);
    } else if (barChartCountry1 && barChartCountry2 === null) {
      setBarChartCountry2(country);
    } else if (barChartCountry1 && barChartCountry2) {
      setBarChartCountry3(country);
    }
  };

  const formatNumbers = (number, f) => {
    if (f === "de") return new Intl.NumberFormat("de-DE").format(number);
  };

  const sortCountriesRanking = () => {
    let todayNumber;
    let totalNumber;

    return countries
      .sort((a, b) => {
        if (active === "cases") {
          if (a.cases < b.cases) return 1;
          else if (a.cases > b.cases) return -1;
          else return 0;
        } else if (active === "deaths") {
          if (a.deaths < b.deaths) return 1;
          else if (a.deaths > b.deaths) return -1;
          else return 0;
        } else if (active === "recovered") {
          if (a.recovered < b.recovered) return 1;
          else if (a.recovered > b.recovered) return -1;
          else return 0;
        }
      })
      .map((country, i) => {
        if (active === "cases") {
          todayNumber = `+${country.todayCases}  cases today`;
          totalNumber = formatNumbers(country.cases, "de");
        } else if (active === "deaths") {
          todayNumber = `+${formatNumbers(
            country.todayDeaths,
            "de"
          )}  deaths today`;
          totalNumber = formatNumbers(country.deaths, "de");
        } else if (active === "recovered") {
          todayNumber = `+${formatNumbers(
            country.todayRecovered,
            "de"
          )}  recoveries today`;
          totalNumber = formatNumbers(country.recovered, "de");
        }
        return (
          <CountryRowWrapper
            key={i}
            onClick={() => selectBarChartCountry(country)}
          >
            <CountryRank>{i + 1}</CountryRank>
            <CountryFlag src={country.countryInfo.flag} />
            <CountryRow>
              <div> {country.country}:</div>{" "}
              <TodayNumber>{todayNumber}</TodayNumber>
              <TotalNumber>{totalNumber}</TotalNumber>
            </CountryRow>
          </CountryRowWrapper>
        );
      });
  };

  const displayBarChart = () => {
    if (barChartCountry1) {
      return (
        <Bar
          height={22}
          width={30}
          data={{
            labels: [
              barChartCountry1.country,
              barChartCountry2 ? barChartCountry2.country : "country 2",
              barChartCountry3 ? barChartCountry3.country : "country",
            ],
            datasets: [
              {
                data: [
                  barChartCountry1.cases,
                  barChartCountry2 ? barChartCountry2.cases : null,
                  barChartCountry3 ? barChartCountry3.cases : null,
                ],
                backgroundColor: ["yellow", "pink", "blue"],
                borderColor: ["grey", "grey", "grey"],
                borderWidth: 2,
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: "COMPARE 3 COUNTRIES",
            },
            legend: {
              display: false,
            },
          }}
        />
      );
    } else
      return (
        <BarChartMsg>
          Select up to 3 countries
          <br /> in the list above <br />
          to compare their data
        </BarChartMsg>
      );
  };

  return (
    <SideContainer>
      <TitleWrapper>COUNTRIES RANKING</TitleWrapper>
      <ButtonsWrapper>
        <BtnToggle
          theme="cases"
          active={active === activeTypes[0]}
          onClick={() => setActive("cases")}
        >
          cases
        </BtnToggle>
        <BtnToggle
          theme="deaths"
          active={active === activeTypes[1]}
          onClick={() => setActive("deaths")}
        >
          deaths
        </BtnToggle>
        <BtnToggle
          theme="recovered"
          active={active === activeTypes[2]}
          onClick={() => setActive("recovered")}
        >
          recovered
        </BtnToggle>
        <BtnToggle theme="vaccinated">vaccines</BtnToggle>
      </ButtonsWrapper>
      <TableContainerWrapper>
        <TableContainer>{sortCountriesRanking(country)}</TableContainer>
      </TableContainerWrapper>
      <BarChartContainer>{displayBarChart()}</BarChartContainer>
    </SideContainer>
  );
};

export default SideSection;

const SideContainer = styled.div`
  grid-column: 2;
  grid-row: 1/4;
  height: 100%;
  width: 100%;
  background-color: #181818;
  border-left: 1px solid lightgray;
  display: grid;
  grid-template-rows: 7vh 8vh 35vh 45vh;
  grid-gap: 1.5vh;
`;

const TitleWrapper = styled.div`
  height: 100%;
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
`;

const ButtonsWrapper = styled.div`
  height: 100%;
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* border: 1px solid red; */
`;

const theme = {
  cases: {
    default: "red",
  },
  recovered: {
    default: "green",
  },
  deaths: {
    default: "lightgray",
  },
  vaccinated: {
    default: "deepskyblue",
  },
};

const SortButton = styled.button`
  /* border: 1px solid red; */
  width: 24%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: #eeee;
  border-radius: 3px;
  background-color: #353535;
  position: relative;
  border: 2px solid transparent;
  outline: none;

  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    border: 2px solid ${(props) => theme[props.theme].default};
  }
`;

const BtnToggle = styled(SortButton)`
  ${({ active }) =>
    active &&
    css`
      border: 2px solid ${(props) => theme[props.theme].default};
    `}
`;

const TableContainerWrapper = styled.div`
  color: white;
  height: 100%;
  width: 99%;
  position: relative;
  overflow-y: scroll;
  border: 2px solid lightgray;
`;

const TableContainer = styled.div`
  position: absolute;
  width: 100%;
`;

const CountryRowWrapper = styled.div`
  width: 99%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-left: 4px;
  /* border: 1px solid pink; */
  &:hover {
    cursor: pointer;
  }
`;

const CountryRank = styled.div`
  margin: 0 3px 3px 2px;
  /* border: 1px solid red; */
`;

const CountryFlag = styled.img`
  height: 18px;
  width: 18px;
  border-radius: 50%;
`;

const CountryRow = styled.div`
  margin: 0 0 3px 3px;
  width: 99%;
  display: flex;
  align-items: center;
  position: relative;
  /* border: 1px solid yellow; */
`;

const TodayNumber = styled.div`
  font-size: 0.75rem;
  margin-left: 3px;
  color: orange;
`;

const TotalNumber = styled.div`
  position: absolute;
  right: 20px;
  /* border: 1px solid pink; */
`;

const BarChartContainer = styled.div`
  height: 100%;
  width: 99%;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BarChartMsg = styled.div`
  color: #eee;
  font-size: 1.25rem;
  text-align: center;
`;
