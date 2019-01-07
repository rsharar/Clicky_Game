import React from "react";
import "./style.css";

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-brand" href="#">The Office - Memory Game</div>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item justify-content-center">
                    <div className="nav-item" href="#">Click the characters below and don't click the same one twice!</div>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <div className="nav-item">Score: {props.score} | Top Score: {props.highScore}</div>
                </li>
            </ul>

        </nav>
    )
}
export default NavBar;