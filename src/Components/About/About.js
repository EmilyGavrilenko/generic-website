import React, { Component } from 'react';
import Header from "../Header";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button,} from 'react-bootstrap'; 
import '../../css/About.css';
import Qualifications from './Qualifications';
import AboutMe from './AboutMe';

class About extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="aboutPage">
                    <Qualifications />
                    <AboutMe />
                </div>
            </div>
        );
    }
}

export default About;