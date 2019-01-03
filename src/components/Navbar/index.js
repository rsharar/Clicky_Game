import React from "react";
import { Navbar } from 'react-bootstrap'
import "./style.css";

const NavBar = (props) => {
    return (

        <ul className="nav sticky-top justify-content-between align-items-center flex-lg-row flex-column px-3">
            <li className="nav-item">
                <img src={`${process.env.PUBLIC_URL}/images/my-hero-logo.png`} id="nav-img" alt="My Hero Academia" />
            </li>
            <li className="nav-item text-white h3">
                {/* {message} */}
            </li>
            <li className="nav-item text-white h4">Score: {props.score} | Top Score: {props.topScore}</li>
        </ul>
        // <Navbar>
        //     <Navbar.Header>
        //         <Navbar.Brand>
        //             <a href="#home">Memeory</a>
        //         </Navbar.Brand>
        //         <Navbar.Toggle />
        //     </Navbar.Header>
        //     <Navbar.Collapse>
        //         <Navbar.Text>
        //             Click the memes below and don't click the same one twice!
        //     </Navbar.Text>
        //         <Navbar.Text pullRight>Score: {props.score} | Top Score: {props.topScore}</Navbar.Text>
        //     </Navbar.Collapse>
        // </Navbar>
    )
}
export default NavBar;