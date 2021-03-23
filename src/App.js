import React from "react";
import { AppHeader, Counters, Main, SideSection } from "./components/component";
import { fetchBriefData, fetchCountriesData, fetchHistoric } from "./api";
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 100px min-content 1fr;
`;

class App extends React.Component {
  state = {
    briefData: {},
    countries: [],
    countriesList: [],
    country: "",
    chartCountry: "",
    graphsData: {
      dates: [],
      cases: [],
      recov: [],
      dead: [],
    },
    showGlobalData: true,
  };

  async componentDidMount() {
    const fetchedData = await fetchBriefData();
    this.setState({ briefData: fetchedData });

    const fetchedCountries = await fetchCountriesData();
    this.setState({ countries: fetchedCountries });

    const list = await fetchCountriesData();
    const listing = list.map((country) => country.country);
    this.setState({ countriesList: listing });
    console.log(this.state.countriesList);
  }

  handleCountrySelection = async (country) => {
    const fetchedCountry = await fetchCountriesData(country);
    this.setState({ country: fetchedCountry });
    if (country) {
      this.setState({ showGlobalData: false });
    } else return;
    console.log("select", this.state.showGlobalData);
  };

  // handleGlobalData = (country) => {
  //   if (country) {
  //     this.setState((prevState) => ({
  //       showGlobalData: !prevState.showGlobalData,
  //     }));
  //   } else return;
  //   console.log("counters", this.state.showGlobalData);
  // };

  backtoGlobalData = () => {
    this.setState((prevState) => ({
      showGlobalData: !prevState.showGlobalData,
    }));
  };

  handleChartSelection = async (country) => {
    this.setState({ chartCountry: country });
    const fetchedChartData = await fetchHistoric(country);
    if (fetchedChartData) {
      this.setState({
        graphsData: {
          ...this.state.graphsData,
          dates: fetchedChartData.dates,
          cases: fetchedChartData.cases,
          recov: fetchedChartData.recov,
          dead: fetchedChartData.dead,
        },
      });
    } else {
      this.setState({
        graphsData: {
          ...this.state.graphsData,
          dates: null,
          cases: null,
          recov: null,
          dead: null,
        },
      });
    }
  };

  render() {
    return (
      <AppWrapper>
        {" "}
        <AppHeader
          briefData={this.state.briefData}
          countriesList={this.state.countriesList}
          handleCountrySelection={this.handleCountrySelection}
          handleChartSelection={this.handleChartSelection}
          showGlobalData={this.state.showGlobalData}
        />
        <Counters
          briefData={this.state.briefData}
          country={this.state.country}
          showGlobalData={this.state.showGlobalData}
          backtoGlobalData={this.backtoGlobalData}
        />
        <Main
          countries={this.state.countries}
          country={this.state.country}
          chartCountry={this.state.chartCountry}
          graphsData={this.state.graphsData}
          showGlobalData={this.state.showGlobalData}
        />
        <SideSection
          countries={this.state.countries}
          country={this.state.country}
        />
      </AppWrapper>
    );
  }
}

export default App;
