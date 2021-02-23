import React from "react";
import styled from "styled-components";

const Details = styled.div`
  height: 50vh;
  width: 30vw;
  background-color: #eeee;
  color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

const CountryDetails = ({ country }) => {
  return (
    <Details>
      {country ? (
        <div>
          <img src={country.countryInfo.flag} height="30px" width="50px" />
        </div>
      ) : null}
      <div>{`${country.country}`.toUpperCase()}</div>
      <div>infected: {country.cases}</div>
      <div>dead: {country.deaths}</div>
      <div>recovered: {country.recovered}</div>
      <div>today: {country.todayCases}</div>
    </Details>
  );
};

export default CountryDetails;
