import React from "react";
import LocationImg from "../images/location.png";
import "../styles/style.css";

export default function Card(props) {
  return (
    <div className="card-div">
      <img className="location-img" src={props.imageUrl}></img>
      <img className="location--logo" src={LocationImg}></img>
      <h4 className="country">{props.location}</h4>
      <a className="googlemaps--link" href={props.googleMapsUrl}>
        View on Google Maps
      </a>
      <h2 className="card--header">{props.title}</h2>
      <section className="dates">
        {props.startDate} - {props.endDate}
      </section>
      <p className="card--text">{props.description}</p>
    </div>
  );
}
