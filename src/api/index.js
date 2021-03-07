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

export const fetchHistoric = async () => {
  const { data } = await axios.get(historicUrl);

  let graphArray = {
    dates: [],
    cases: [],
    recov: [],
    dead: [],
  };

  data["Argentina"].forEach(
    ({ date, confirmed, recovered, deaths }) => (
      graphArray.dates.push(date),
      graphArray.cases.push(confirmed),
      graphArray.recov.push(recovered),
      graphArray.dead.push(deaths)
    )
  );
  return graphArray;
};
