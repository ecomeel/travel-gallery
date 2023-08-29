import React from "react";
import TravelCard from "../TravelCard/TravelCard";
import "./Gallery.css";

const trips = [
    {
        key: 1,
        city: "Тбилиси",
        month: "апрель",
        price: "83.000",
        transportType: "на автобусе",
        peopleAmount: 10,
    },
    {
        key: 2,
        city: "Стамбул",
        month: "март",
        price: "110.000",
        transportType: "на самолете",
        peopleAmount: undefined
    },
    {
        key: 3,
        city: "Дубай",
        month: "июнь",
        price: "220.000",
        transportType: "на самолете",
        peopleAmount: 15,
    },
    {
        key: 4,
        city: "Пхукет",
        month: "сентябрь",
        price: "135.000",
        transportType: "самолет + паром",
        peopleAmount: 11,
    },
];

export default function Gallery() {
    const tripsHTML = trips.map( trip => (
        <TravelCard
            key = {trip.key}
            city = {trip.city}
            month = {trip.month}
            price = {trip.price}
            transportType = {trip.transportType}
            peopleAmount = {trip.peopleAmount}
        />

    ))
    
    return (
        <ul className="gallery">
            {tripsHTML}
        </ul>
    );
}
