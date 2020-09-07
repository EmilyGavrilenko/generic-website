import React, { Component } from 'react';
import Header from "./Header";
import RoboMakerLogo from '../images/aws_robomaker_logo.jpg'
import GithubCat from '../images/GitHub_Cat.png'
import '../css/Components.css';

class Internships extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="internships">
                    <img src={RoboMakerLogo} className="robomakerLogo"/> 
                    <div className="jobLine"><div className="jobBar">
                        <div className="jobTitle">AWS RoboMaker SDE Intern:</div>
                        <div className="jobDate">June 2020 - September 2020</div>
                    </div></div>
                </div>
            </div>
        );
    }
}

export default Internships;