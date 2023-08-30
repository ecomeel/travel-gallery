import React from "react";
import YellowDesc from "../YellowDesc/YellowDesc";
import "./TravelCard.css";

export default function TravelCard(props) {
    return (
        <li
            className="travelCard"
            style={{
                backgroundImage: `url(${props.background})`,
            }}
        >
            <div className="yellowDescWrapper">
                <YellowDesc 
                    text={props.transportType}
                />
                <YellowDesc 
                    text={props.peopleAmount}
                />
            </div>
            <h2 className="travelCard__title">{props.city}, {props.month} — {props.price}</h2>
        </li>
    );
}
