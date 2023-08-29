import React from "react";
import img1 from "../../assets/pict1.png";
import "./TravelCard.css";

export default function TravelCard(props) {
    return (
        <li
            className="travelCard"
            style={{
                backgroundImage: `url(${props.background})`,
            }}
        >
            <h2>{props.city}, {props.month} -- {props.price}</h2>
        </li>
    );
}
