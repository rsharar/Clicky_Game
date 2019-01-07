import React from "react";
import { Navbar } from 'react-bootstrap'
import "./style.css";

const NavBar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">The Office - Memory Game</a>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item justify-content-center">
                    <div class="nav-item" href="#">Click the characters below and don't click the same one twice!</div>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-item">Score: {props.score} | Top Score: {props.topScore}</a>
                </li>
            </ul>

        </nav>
    )
}
export default NavBar;