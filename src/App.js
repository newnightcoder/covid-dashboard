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
    data: {},
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
    globalData: true,
  };

  async componentDidMount() {
    const fetchedData = await fetchBriefData();
    this.setState({ data: fetchedData });

    const fetchedCountries = await fetchCountriesData();
    this.setState({ countries: fetchedCountries });

    const list = await fetchCountriesData();
    const listing = list.map((country) => country.country);
    this.setState({ countriesList: listing });
    console.log(this.state.countriesList);

    // const fetchedChartData = await fetchHistoric();
    // // this.setState({ chartCountry: country });
    // this.setState({ graphsData: { dates: fetchedChartData.dates } });
    // this.setState({ graphsData: { cases: fetchedChartData.cases } });
    // this.setState({ graphsData: { recov: fetchedChartData.recov } });
    // this.setState({ graphsData: { dead: fetchedChartData.dead } });
  }

  handleCountrySelection = async (country) => {
    const fetchedCountry = await fetchCountriesData(country);
    this.setState({ country: fetchedCountry });
    if (country) {
      this.setState({ globalData: false });
    } else return;
    console.log("select", this.state.globalData);
  };

  handleGlobalData = (country) => {
    if (country) {
      this.setState((prevState) => ({ globalData: !prevState.globalData }));
    } else return;
    console.log("counters", this.state.globalData);
  };

  backtoGlobalData = () => {
    this.setState((prevState) => ({ globalData: !prevState.globalData }));
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
    } else return null;
  };

  render() {
    return (
      <AppWrapper>
        {" "}
        <AppHeader
          data={this.state.data}
          countriesList={this.state.countriesList}
          handleCountrySelection={this.handleCountrySelection}
          handleChartSelection={this.handleChartSelection}
        />
        <Counters
          data={this.state.data}
          country={this.state.country}
          globalData={this.state.globalData}
          backtoGlobalData={this.backtoGlobalData}
        />
        <Main
          countries={this.state.countries}
          country={this.state.country}
          chartCountry={this.state.chartCountry}
          graphsData={this.state.graphsData}
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
