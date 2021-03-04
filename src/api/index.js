import axios from "axios";

const url = "https://disease.sh/v3/covid-19";

export const fetchBriefData = async () => {
  try {
    const { data } = await axios.get(`${url}/all`);
    const briefData = {
      confirmed: data.cases,
      deaths: data.deaths,
      recovered: data.recovered,
      todayCases: data.todayCases,
      todayDeaths: data.todayDeaths,
      todayRecovered: data.todayRecovered,
      update: data.updated,
      critical: data.critical,
      tests: data.tests,
    };
    console.log("fetchBriefData", data);
    return briefData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountriesData = async (country) => {
  let countriesUrl = `${url}/countries`;

  if (country) {
    countriesUrl = `${url}/countries/${country}`;
  }

  try {
    const { data } = await axios.get(countriesUrl);
    // console.log("fetchCountriesData", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const historicUrl = "https://pomber.github.io/covid19/timeseries.json";
// "http://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/timeseries";

export const fetchHistoric = async () => {
  try {
    const { data } = await axios.get(historicUrl);
    // const historicData = data.map((country, i) => {
    //   return {
    //     country: country.countryregion,
    //     data: country.timeseries,
    //   };
    // });
    // console.log(historicData);
    return data;
  } catch (error) {
    console.log(error);
  }
};
