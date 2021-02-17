import React from "react";
import styled from "styled-components";



const SectionTitle = styled.h1`
  /* transform: translateX(-22vw); */
  color:white;
  position:relative;
  margin-left:-50vw;
  /* border:1px solid black; */
`;


const SearchField = styled.div`
  height:50vh;
  width:100%;
  background-color:white;
`;


const Search = ({countries}) => {
  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>     
    <SectionTitle>Search a country</SectionTitle>
    <SearchField>
      {/* <input type="text" placeholder="search country" > */}
        {countries.map((country)=><div style={{color:"black"}}>{country.country}</div>)}
      {/* </input> */}
    </SearchField>
    </div>
  
  );
};

export default Search;
