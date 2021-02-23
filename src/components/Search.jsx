import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Select from "react-select";
import CountryDetails from "./CountryDetails";

const SectionTitle = styled.h1`
  color: #eeee;
  position: relative;
  margin-left: 15vw;
  /* border:1px solid black; */
`;

const SearchField = styled.div`
  /* border:1px solid red; */
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  /* align-items:center; */
  flex-direction: column;
`;

const Search = ({ countries, handleCountrySelection, country }) => {
  const options = countries.map((country) => {
    return { value: country.country, label: country.country };
  });

  return (
    <div
      style={{
        height: "100%",
        // border:"3px solid green"
      }}
    >
      <SectionTitle>select a country</SectionTitle>
      <SearchField>
        <Select
          placeholder="select or type a country..."
          options={options}
          onChange={(e) => handleCountrySelection(e.value)}
          style={{ width: "30vw" }}
        />
        <CountryDetails country={country} />
      </SearchField>
    </div>
  );
};

export default Search;
