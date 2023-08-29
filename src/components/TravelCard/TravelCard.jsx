import React from "react";
import img1 from "../../assets/pict1.png";
import './TravelCard.css'

export default function TravelCard(props) {
    return (
        <li className="travelCard">
            <h1>{props.city}</h1>
        </li>
    )
}

