import React from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const WorldMap = () => {
  const minZoom = 2.4;
  const maxZoom = 3;
  return (
    <MapWrapper>
      <MapContainer center={[25, 10]} zoom={minZoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          minZoom="2"
          maxZoom={maxZoom}
        />
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
  border: 1px solid pink;
`;
