import React from "react";
import './YellowDesc.css'
import iconPeople from "../../assets/icon-people.png"


export default function YellowDesc(props) {
    if (props.text) {
        if (typeof props.text === 'number') return (
            <p className="yellowDesc">{props.text}<img className="yellowDesc__icon-people" src={iconPeople} alt="icon People" /></p>
        )
        else return (
            <p className="yellowDesc">{props.text}</p>
        )
    }
}