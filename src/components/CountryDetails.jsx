import React from "react";
import styled from "styled-components";

const Details = styled.div`
  height: 50vh;
  width: 20vw;
  background-color: #eeee;
  color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

const NumbersWrapper = styled.div`
  height: 30vh;
  display: flex;
  justify-content: space-evenly;
  align-items: left;
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
      <NumbersWrapper>
        {country.todayCases > 0 ? (
          <div> + {country.todayCases} cases today</div>
        ) : (
          <div> {country.todayCases} cases today</div>
        )}

        <div>Total infected: {country.cases}</div>
        <div>Total deaths: {country.deaths}</div>
        <div>Total recovered: {country.recovered}</div>
      </NumbersWrapper>
    </Details>
  );
};

export default CountryDetails;
