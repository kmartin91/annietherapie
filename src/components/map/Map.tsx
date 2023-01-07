import { ReactElement } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import styles from "components/map/map.module.css";

const Map: React.FC = (): ReactElement => {
  const position = [45.625596340538095, -1.0313358446687353] as [
    number,
    number
  ];
  return (
    <MapContainer
      center={position}
      zoom={14}
      scrollWheelZoom={false}
      className={styles.container}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Annie MAQUET
          <br />
          48 Rue Alsace Lorraine
          <br /> 17200 Royan
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
