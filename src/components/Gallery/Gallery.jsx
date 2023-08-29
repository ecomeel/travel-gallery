import React from "react";
import TravelCard from "../TravelCard/TravelCard";
import './Gallery.css'

const trips = [
    {
        city: 'Тбилиси',
        month: "апрель",
        price: "83.000",
        transportType: "на автобусе",
        peopleAmount: 10 
    },
    {
        city: "Стамбул",
        month: "март",
        price: "110.000",
        transportType: "на самолете",
        // peopleAmount: 
    },
    {
        city: "Дубай",
        month: "июнь",
        price: "220.000",
        transportType: "на самолете",
        peopleAmount: 15
    },
    {
        city: "Пхукет",
        month: "сентябрь",
        price: "135.000",
        transportType: "самолет + паром",
        peopleAmount: 11
    },
]

export default function Gallery() {
    return (
        <ul className="gallery">
            <TravelCard />
            <TravelCard />
            <TravelCard />
            <TravelCard />
        </ul>
    );
}
