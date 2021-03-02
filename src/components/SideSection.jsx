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
        }}
      >
        SORT COUNTRIES
      </div>
      <div
        style={{
          color: "white",
          height: "30vh",
          width: "99%",
          border: "2px solid lightgray",
          position: "relative",
          overflowY: "scroll",
        }}
      >
        <div style={{ position: "absolute", width: "100%" }}>
          {countries
            .sort((a, b) => {
              if (a.cases < b.cases) return 1;
              else if (a.cases > b.cases) return -1;
              else return 0;
            })
            .map((country, i) => (
              <div
                style={{
                  width: "100%",
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
                  height="10px"
                  width="18px"
                />
                <div
                  style={{
                    margin: "0 0 3px 3px",
                  }}
                >
                  {country.country}: {formatNumbers(country.cases, "de")}
                </div>
              </div>
            ))}
        </div>
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
