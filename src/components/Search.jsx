import React from "react";
import styled from "styled-components";
import {useState} from "react";



const SectionTitle = styled.h1`
  color:#eeee;
  position:relative;
  margin-left:15vw;
  /* border:1px solid black; */
`;

const Input = styled.input`
outline:none;
height:3.5vh;
width: 30vw;
border-radius:2px;
border:none;
`;
 

const SearchField = styled.div`
  height:50vh;
  width:100%;
  border:1px solid yellow;
  /* background-color:white; */
  /* position:absolute;
  top:.5vh;
  left:0; */
`;


const Select = styled.select`
outline:none;
`;
const CountryDetails = styled.div`
  height:30vh;
  width:15vw;
  background-color:#eeee;
  color:black;
  /* position:absolute;
  top:0;
  left:0; */
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`;

const Search = ({countries }) => {

  const [inputCountry, setInputCountry] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [isClicked, setComponent] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSelect = (e) =>{
    setSelectedCountry(e.target.value);
  }

  const openDropdown = ()=>{
    setOpen(isOpen=>!isOpen);
  }

  const handleClick = () => {
    setComponent(isClicked=>!isClicked);
  }

  return (
    <div>
    <SectionTitle>select a country</SectionTitle>
    <SearchField>
    <Select placeholder="select a country" onChange = {handleSelect} maxMenuHeight="200">
      {countries.map(country => 
        (<option  value={country.value}>
          {/* <img src = {country.countryInfo.flag}
          height="14px"
          width = "28px"/> */}
        {country.country} 
        </option>))}
    </Select>

    {/* <CountryDetails>
    <img src={country.countryInfo.flag} height="28px"
          width="40px"/>
      <div>{country.country}</div>
      <div>cases: {country.cases}</div>
       <div>deaths: {country.deaths}</div>
       <div>recovered: {country.recovered}</div>
       </CountryDetails> */}



    </SearchField>
    </div>
















    // <div
    // style={{
    //   border:"1px solid yellow",
    //   display: "flex",
    //   flexDirection: "column",
    //   alignItems: "center",
    // }}>     
    // <SectionTitle>Search a country</SectionTitle>
    // <Input type="text" placeholder="search country" onChange={e=>setInputCountry(e.target.value)} onClick={openDropdown}/><i className="fas fa-caret-down"></i>

    // <div
    //     style={{
    //       display: "flex",
    //       // flexDirection: "row",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       width: "30vw",
    //       height: "35vh",
    //       overflowY: "scroll",
    //       overflowX: "hidden",
    //       margin: "2vh auto",
    //       backgroundColor: "white",
    //       position: "relative",
    //       borderRadius: "5px",
    //       border: "2px solid black",
    //       visibility: isOpen ? "visible" : "hidden",
    //     }}
    //   >
    // <SearchField>
    //     {countries.filter((country)=> {
    //       if(inputCountry==""){
    //         return country.country
    //       } else if(country.country.toLowerCase().includes(inputCountry)){
    //           return <div style={{width:"30vw", border:"10px solid red"}}>{country.country}</div>;
    //         }
    //     }).map((country,i)=> 
    //      <div 
    //     onClick={handleClick}
    //     key={i} 
    //     style={{color:"black", borderBottom:"1px solid lightgrey", padding:"0 0 3px .25vw", }}>
    //       <img 
    //       src= {country.countryInfo.flag} 
    //       height="14px"
    //       width="20px"
    //       style={{ borderRadius: "2px", margin: "6px 3px 0px 0px" }}
    //       />
    //       {country.country}

    //     </div>)}
    //     {/* {isClicked ? <CountryDetails>{country.country}</CountryDetails> : null} */}

        
    // </SearchField>
        
    // </div>
    // {countries.map((country,i) => <div key={i} style={{position:"absolute", top:"90%",left:"10vw"}}>
    //   {isClicked ? 
    //   <CountryDetails>
    //     <img src={country.countryInfo.flag} height="28px"
    //       width="40px"/>
    //   <div>{country.country}</div>
    //   <div>cases: {country.cases}</div>
    //    <div>deaths: {country.deaths}</div>
    //    <div>recovered: {country.recovered}</div>
    //    </CountryDetails> 
    //    : null}
    //    </div>)}
    // </div>
  
  );
};

export default Search;
