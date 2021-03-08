import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import { Button } from "@material-ui/core";

const SideSection = ({ countries, country }) => {
  const formatNumbers = (number, f) => {
    if (f === "de") return new Intl.NumberFormat("de-DE").format(number);
    // if (f === "fr") return new Intl.NumberFormat("us-US").format(number);
  };
  return (
    <SideContainer>
      <TitleWrapper>COUNTRIES RANKING</TitleWrapper>
      <ButtonsWrapper>
        <div>cases</div>
        <div>deaths</div>
        <div>recovered</div>
        <div>vaccines</div>
      </ButtonsWrapper>
      <TableContainerWrapper>
        <TableContainer>
          {countries
            .sort((a, b) => {
              if (a.cases < b.cases) return 1;
              else if (a.cases > b.cases) return -1;
              else return 0;
            })
            .map((country, i) => (
              <CountryRowWrapper key={i}>
                <CountryRank>{i + 1}</CountryRank>
                <CountryFlag src={country.countryInfo.flag} />
                <CountryRow>
                  <div> {country.country}:</div>{" "}
                  <TodayNumber>
                    {`+${formatNumbers(country.todayCases, "de")} today`}
                  </TodayNumber>
                  <TotalNumber>
                    {formatNumbers(country.cases, "de")}
                  </TotalNumber>
                </CountryRow>
              </CountryRowWrapper>
            ))}
        </TableContainer>
      </TableContainerWrapper>
    </SideContainer>
  );
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

const TitleWrapper = styled.div`
  height: 10vh;
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
`;

const ButtonsWrapper = styled.div`
  height: 7vh;
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
`;

const TableContainerWrapper = styled.div`
  color: white;
  height: 30vh;
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
