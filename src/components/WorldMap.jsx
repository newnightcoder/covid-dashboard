import React from "react";
import styled from "styled-components";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  Tooltip,
} from "react-leaflet";

const WorldMap = ({ countries, country }) => {
  const minZoom = 2.4;
  const maxZoom = 4;

  // const mapBoxToken =
  //   "pk.eyJ1IjoibmV3bmlnaHRjb2RlciIsImEiOiJja2xvZzhkbHcwYjBtMndwaHVsaTlyenptIn0.kdWyIEMYBn5m0j9dPiCpPQ";
  const mapboxAPI = `https://api.mapbox.com/styles/v1/newnightcoder/cklogaqt55a8n17o83ftr9uq1/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;

  const filteredCountries = countries.filter(
    (country) => country.cases > 1000000
  );
  return (
    <MapWrapper>
      <MapContainer center={[25, 10]} zoom={minZoom}>
        <TileLayer
          attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
          // '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url={mapboxAPI}
          minZoom="2"
          maxZoom={maxZoom}
        />
        {countries
          .filter((country) => country.cases > 1000000)
          .map((country) => (
            <CircleMarker
              center={[country.countryInfo.lat, country.countryInfo.long]}
              pathOptions={{ color: "red", weight: ".5" }}
              radius={country.cases / 250000}
              // stroke={false}
            >
              <Tooltip
                opacity={1}
                // sticky
                style={{ backgroundColor: "black", color: "white" }}
              >
                <img
                  src={country.countryInfo.flag}
                  height="20px"
                  width="34px"
                  style={{ marginLeft: "30%" }}
                />
                <br />
                <div
                  style={{
                    fontWeight: "bold",
                    margin: "0 0 5px 22.5%",
                    // border: "1px solid red",
                  }}
                >
                  {country.country.toUpperCase()}
                </div>
                TODAY: {country.todayCases}
                <br />
                Severe cases: {country.critical}
                <br />
                Total cases: {country.cases}
              </Tooltip>
            </CircleMarker>
          ))}
        {/* )})} */}
      </MapContainer>
    </MapWrapper>
  );
};

export default WorldMap;

const MapWrapper = styled.div`
  grid-row: 3;
  grid-column: 1;
  margin-top: 3vh;
  height: 93%;
  width: 99.5%;
  border: 1px solid black;
`;
