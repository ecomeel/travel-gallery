import React from "react";
import './YellowDesc.css'

export default function YellowDesc(props) {
    // if (props.text) return (
    //     <p className="yellowDesc">{props.text}</p>
    // )
    if (props.text) {
        if (typeof props.text == 'number') return (
            <p className="yellowDesc">{props.text}<img src=""/></p>
        )
    }
}