import React from "react";
import {
  AppHeader,
  Counters,
  CountryTable,
  Search,
  More,
} from "./components/component";
import { fetchBriefData, fetchCountriesData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    countries: [],
    country: "",
    showMore: false,
    btnText: "more",
  };

  async componentDidMount() {
    const fetchedData = await fetchBriefData();
    this.setState({ data: fetchedData });

    const fetchedCountries = await fetchCountriesData();
    this.setState({ countries: fetchedCountries });
  }

  handleCountrySelection = async (country) => {
    const fetchedCountry = await fetchCountriesData(country);
    this.setState({ country: fetchedCountry });
    console.log(country);
  };

  toggleMore = () => {
    this.setState({ showMore: !this.state.showMore });
    if (this.state.showMore) {
      this.setState({ btnText: "more" });
    } else this.setState({ btnText: "close" });
  };

  moreBtn = () => {
    if (this.state.showMore) {
      return <More data={this.state.data} />;
    }
  };

  render() {
    return (
      <div>
        {" "}
        <AppHeader
          data={this.state.data}
          countries={this.state.countries}
          handleCountrySelection={this.handleCountrySelection}
          country={this.state.country}
        />
        <Counters
          btnText={this.state.btnText}
          toggleMore={this.toggleMore}
          data={this.state.data}
          country={this.state.country}
        />
        {this.moreBtn()}
        <Search
          country={this.state.country}
          countries={this.state.countries}
          handleCountrySelection={this.handleCountrySelection}
        />
        <CountryTable
          countries={this.state.countries}
          country={this.state.country}
        />
      </div>
    );
  }
}

export default App;
