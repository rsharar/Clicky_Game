import React from "react";
import { Navbar } from 'react-bootstrap'
import "./style.css";

const NavBar = (props) => {
    return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Memeory</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Text>
                        Click the memes below and don't click the same one twice!
            </Navbar.Text>
                    <Navbar.Text pullRight>Score: {props.score} | Top Score: {props.topScore}</Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
    )
}
export default NavBar;