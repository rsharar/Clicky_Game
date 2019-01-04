import React from "react";
import "./style.css";

export default function ImageCard(props) {
    return (
            <div className="img-container">
                <img
                    alt={props.characters.name}
                    src={props.characters.image}
                />
            </div>
    )
}