import React from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Select from "react-select";
// import { fetchBrief } from "../api";

const AppHeader = ({
  briefData,
  countriesList,
  handleCountrySelection,
  handleChartSelection,
}) => {
  const options = countriesList.map((country) => {
    return { value: country, label: country };
  });

  return (
    <Header>
      <AppBar style={appBarStyle}>
        <AppBarWrapper>
          <div style={{ fontSize: "2.5rem" }}>
            covid-19 live &nbsp;
            <i className="fas fa-virus" style={coronaIconStyle}></i>
          </div>
          <div
            style={{
              display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
              // border: "1px solid yellow",
              width: "100%",
            }}
          >
            <div style={lastUpdateStyle}>
              Last update:&nbsp;{new Date(briefData.update).toLocaleString()}
            </div>
            {/* <button style={refreshBtnStyle}>refresh</button> */}
          </div>
        </AppBarWrapper>
        <Select
          placeholder="select or type a country..."
          options={options}
          onChange={(e) => {
            handleCountrySelection(e.value);
            handleChartSelection(e.value);
          }}
          styles={selectStyles}
        />
      </AppBar>
    </Header>
  );
};

export default AppHeader;

const Header = styled.div`
  grid-row: 1;
  grid-column: 1/2;
  height: 90px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-bottom: 1px solid #272727; */
  border-bottom: 1px solid lightgray;

  @keyframes bleep {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const appBarStyle = {
  color: "#eeee",
  // backgroundColor: "#353535",
  backgroundColor: "#272727",

  height: "90px",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  fontSize: "3rem",
  textTransform: "uppercase",
  fontWeight: "700",
  position: "relative",
  boxShadow: "none",
};

const AppBarWrapper = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  text-align: left;
  /* border: 1px solid red; */
`;

const coronaIconStyle = {
  animation: "bleep 3000ms infinite",
  fontSize: "3rem",
  position: "absolute",
  left: ".75vw",
  top: "2vh",
};

const lastUpdateStyle = {
  height: "20px",
  width: "100%",
  color: "#eeee",
  fontSize: ".75rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  marginLeft: ".5vw",
  // border: "1px solid red",
};

const refreshBtnStyle = {
  cursor: "pointer",
};

const selectStyles = {
  container: (provided, state) => ({
    ...provided,
    width: "30%",
  }),
  control: (provided, state) => ({
    ...provided,
    height: "10px",
    fontSize: "1rem",
    textTransform: "capitalize",
    fontWeight: "500",
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: "1.1rem",
    textTransform: "lowercase",
    fontWeight: "500",
  }),
  menuList: (provided, state) => ({
    ...provided,
    fontSize: "1rem",
    color: "black",
    textAlign: "left",
    textTransform: "capitalize",
    fontWeight: "500",
    height: "30vh",
  }),
};
