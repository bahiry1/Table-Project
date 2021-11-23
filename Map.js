import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { useLocation } from "react-router-dom";
import Marker from "./Marker";

const SimpleMap = (props: any) => {
  const location = useLocation();
  let rowlat = location.state.address.geo.lat;
  let rowlng = location.state.address.geo.lng;
  rowlng = parseFloat(rowlng);
  rowlat = parseFloat(rowlat);
  const [center, setCenter] = useState({
    lat: rowlat,
    lng: rowlng,
  });
  const [zoom, setZoom] = useState(11);
  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyATfsTNES5i4JQ-GM4nxfQNCOw2EfAz0p4" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={rowlat} lng={rowlng} text="My Marker" color="red" />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
