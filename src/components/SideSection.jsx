import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const SideSection = ({ countries }) => {
  const formatNumbers = (number, f) => {
    if (f === "de") return new Intl.NumberFormat("de-DE").format(number);
    // if (f === "fr") return new Intl.NumberFormat("us-US").format(number);
  };
  return (
    <SideContainer>
      <div
        style={{
          height: "10vh",
          color: "#eee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid lightgrey",
        }}
      >
        COUNTRIES RANKING
      </div>
      <div
        style={{
          height: "7vh",
          color: "#eee",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid lightgrey",
        }}
      >
        <Button color="white">cases</Button>
        <Button>deaths</Button>
        <Button>recovered</Button>
        <Button>vaccines</Button>
      </div>
      <div
        style={{
          color: "white",
          height: "30vh",
          width: "99%",
          position: "relative",
          overflowY: "scroll",
          // webkitScrollbarColor: "yellow",
          border: "2px solid lightgray",
        }}
      >
        <TableContainer>
          {countries
            .sort((a, b) => {
              if (a.cases < b.cases) return 1;
              else if (a.cases > b.cases) return -1;
              else return 0;
            })
            .map((country, i) => (
              <div
                style={{
                  width: "99%",
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid #eee",
                  paddingLeft: "4px",
                }}
              >
                <div
                  style={{
                    margin: "0 3px 3px 2px",
                  }}
                >
                  {" "}
                  {i + 1}
                </div>
                <img
                  src={country.countryInfo.flag}
                  height="18px"
                  width="18px"
                  style={{ borderRadius: "50%" }}
                />
                <div
                  style={{
                    margin: "0 0 3px 3px",
                    width: "99%",
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    // border: "1px solid yellow",
                  }}
                >
                  <div> {country.country}:</div>{" "}
                  <div
                    style={{
                      fontSize: ".75rem",
                      marginLeft: "3px",
                      color: "orange",
                    }}
                  >{`+${formatNumbers(country.todayCases, "de")} today`}</div>
                  <div
                    style={{
                      position: "absolute",
                      right: "20px",
                      // border: "1px solid pink",
                    }}
                  >
                    {formatNumbers(country.cases, "de")}
                  </div>
                </div>
              </div>
            ))}
        </TableContainer>
      </div>
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

const TableContainer = styled.div`
  position: absolute;
  width: 100%;
`;
const btnStyle = {
  color: "#eee",
};
