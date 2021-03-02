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

  const mapboxAPI = `https://api.mapbox.com/styles/v1/newnightcoder/cklogaqt55a8n17o83ftr9uq1/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;

  const formatNumbers = (number, f) => {
    if (f === "de") return new Intl.NumberFormat("de-DE").format(number);
    // if (f === "fr") return new Intl.NumberFormat("us-US").format(number);
  };

  return (
    <MapWrapper>
      <MapContainer center={[25, 10]} zoom={minZoom}>
        <TileLayer
          attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
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
              >
                <div
                  style={{
                    fontWeight: "bold",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "5px",
                    // border: "1px solid red",
                  }}
                >
                  <img
                    src={country.countryInfo.flag}
                    height="20px"
                    width="34px"
                    style={{ marginBottom: "3px" }}
                  />
                  {country.country.toUpperCase()}
                </div>
                <div>
                  <span style={{ textDecoration: "underline" }}>TODAY</span>:{" "}
                  {country.todayCases === 0
                    ? 0
                    : `+${formatNumbers(country.todayCases, "de")} cases`}
                </div>
                <div>Severe cases: {formatNumbers(country.critical, "de")}</div>
                <div>Total cases: {formatNumbers(country.cases, "de")}</div>
              </Tooltip>
            </CircleMarker>
          ))}
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
