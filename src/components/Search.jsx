import React from "react";
import styled from "styled-components";
import {useState} from "react";



const SectionTitle = styled.h1`
  color:#eeee;
  position:relative;
  margin-left:-50vw;
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
  width:30vw;
  background-color:white;
  position:absolute;
  top:.5vh;
  left:0;
`;


const Search = ({countries }) => {

  const [inputCountry, setInputCountry] = useState("");
  const [isOpen, setOpen] = useState(false);

  const openDropdown = ()=>{
    setOpen(isOpen=>!isOpen);
  }

  
  const displayData = () =>{
    countries.map(country => console.log(country.country));
  }

    // return (
    // <div style={{position:"absolute", top:"0",left:"0", border:"1px solid red", height:"20vh", width:"20vw"}}>
    //   <div>{country.country}</div>
    //   <div>{country.cases}</div>
    //   <div>{country.deaths}</div>
    //   <div>{country.recovered}</div>
    //   </div>
    //   )


  return (
    <div
    style={{
      border:"1px solid yellow",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>     
    <SectionTitle>Search a country</SectionTitle>
    <Input type="text" placeholder="search country" onChange={e=>setInputCountry(e.target.value)} onClick={openDropdown}/><i class="fas fa-caret-down"></i>

    <div
        style={{
          display: "flex",
          // flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "30vw",
          height: "35vh",
          overflowY: "scroll",
          overflowX: "hidden",
          margin: "2vh auto",
          backgroundColor: "white",
          position: "relative",
          borderRadius: "5px",
          border: "2px solid black",
          visibility: isOpen ? "visible" : "hidden",
        }}
      >
    <SearchField>
        {countries.filter((country)=> {
          if(inputCountry==""){
            return country.country
          } else if(country.country.toLowerCase().includes(inputCountry)){
              return <div style={{width:"30vw", border:"10px solid red"}}>{country.country}</div>;
            }
        }).map((country,i)=>
        <div 
        // onClick={() => {
        //   return <div style={{zIndex:"10000", border:"1px solid red", height:"20vh", width:"20vw", color:"yellow", backgroundColor:"white"}}
        // >{country.country}</div>}}
        onClick={()=><div>{country.country}</div>}
        key={i} 
        style={{color:"black", borderBottom:"1px solid lightgrey", padding:"0 0 3px .25vw", }}>
          <img 
          src= {country.countryInfo.flag} 
          height="14px"
          width="20px"
          style={{ borderRadius: "2px", margin: "6px 3px 0px 0px" }}
          />
          {country.country}
        </div>)}
    </SearchField>
    </div>
    </div>
  
  );
};

export default Search;
