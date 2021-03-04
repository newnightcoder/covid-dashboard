import React from "react";
import { AppHeader, Counters, Main, SideSection } from "./components/component";
import { fetchBriefData, fetchCountriesData } from "./api";
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
    country: "",
    countriesList: [],
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
  }

  handleCountrySelection = async (country) => {
    const fetchedCountry = await fetchCountriesData(country);
    this.setState({ country: fetchedCountry });
    console.log(country);
  };

  render() {
    return (
      <AppWrapper>
        {" "}
        <AppHeader
          data={this.state.data}
          countriesList={this.state.countriesList}
          handleCountrySelection={this.handleCountrySelection}
          country={this.state.country}
        />
        <Counters
          btnText={this.state.btnText}
          toggleMore={this.toggleMore}
          data={this.state.data}
          country={this.state.country}
        />
        <Main countries={this.state.countries} country={this.state.country} />
        <SideSection countries={this.state.countries} />
      </AppWrapper>
    );
  }
}

export default App;
