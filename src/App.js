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
  };

  handleChartSelection = async (country) => {
    this.setState({ chartCountry: country });
    const fetchedChartData = await fetchHistoric(country);
    this.setState({
      graphsData: {
        ...this.state.graphsData,
        dates: fetchedChartData.dates,
        cases: fetchedChartData.cases,
        recov: fetchedChartData.recov,
        dead: fetchedChartData.dead,
      },
    });
    // this.setState({
    //   graphsData: { ...this.state.graphsData, cases: fetchedChartData.cases },
    // });
    // this.setState({
    //   graphsData: { ...this.state.graphsData, recov: fetchedChartData.recov },
    // });
    // this.setState({
    //   graphsData: { ...this.state.graphsData, dead: fetchedChartData.dead },
    // });

    this.setState();
    console.log("chartcountries", this.state.chartCountry);
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
          btnText={this.state.btnText}
          toggleMore={this.toggleMore}
          data={this.state.data}
          country={this.state.country}
        />
        <Main
          countries={this.state.countries}
          country={this.state.country}
          chartCountry={this.state.chartCountry}
          graphsData={this.state.graphsData}
        />
        <SideSection countries={this.state.countries} />
      </AppWrapper>
    );
  }
}

export default App;
