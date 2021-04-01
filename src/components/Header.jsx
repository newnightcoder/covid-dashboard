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
  showGlobalData,
}) => {
  const options = countriesList.map((country) => {
    return { value: country, label: country };
  });

  return (
    <Header>
      <AppBar style={appBarStyle}>
        <TitleWrapper>
          <i className="fas fa-virus" style={coronaIconStyle}></i>

          <Title>covid-19 live &nbsp;</Title>
          <LastUpdate>
            {briefData.update
              ? `Last update: ${new Date(briefData.update).toLocaleString()}`
              : "Last update: loading..."}
            {/* <button style={refreshBtnStyle}>refresh</button> */}
          </LastUpdate>
        </TitleWrapper>
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
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "3rem",
  textTransform: "uppercase",
  fontWeight: "700",
  position: "relative",
  boxShadow: "none",
};

const TitleWrapper = styled.div`
  height: 100%;
  width: 40%;
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 2;
  text-align: left;
  /* border: 1px solid red; */
`;

const Title = styled.div`
  grid-column: 2;
  grid-row: 1;
  font-size: 2.5rem;
  white-space: nowrap;
`;

const coronaIconStyle = {
  gridColumn: "1",
  gridRow: "span 2",
  width: "80px",
  animation: "bleep 3000ms infinite",
  fontSize: "3.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // border: "1px solid white",
};

const LastUpdate = styled.div`
  grid-column: 2;
  grid-row: 2;
  width: 100%;
  height: 20px;
  color: #eeee;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 5px;
  white-space: nowrap;
  /* border: 1px solid yellow; */
`;

const refreshBtnStyle = {
  cursor: "pointer",
};

const selectStyles = {
  container: (provided, state) => ({
    ...provided,
    width: "300px",
    marginRight: "50px",
    border: "1px solid red",
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
