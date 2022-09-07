import React from "react";
import { MdLocationOn } from "react-icons/md";
import "../styles/TravelCard.css";

const TravelCard = ({
  city,
  state,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) => {
  return (
    <div className="travel__card">
      <div className="image">
        <img src={imageUrl} alt="img" />
      </div>
      <div className="travel__details">
        <span>
          <MdLocationOn className="location__icon" />
          <b>{state}</b>, {city}
        </span>
        <a href={googleMapsUrl} target="blank" className="map__link">
          View on Google Maps
        </a>
        <h1>{location}</h1>
        <p>
          <b>
            {startDate} - {endDate}
          </b>
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TravelCard;
