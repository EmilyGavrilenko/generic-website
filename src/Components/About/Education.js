import React, { Component } from 'react';
import Image from '../../images/personal-image.png'

class Education extends Component {
    render() {
        return (
            <div className="education">
                <div className="personalInfo">
                    <div><img src={Image} alt="Picture of Me!" className = "personalImage"></img></div>
                    <div className="college">Enter School Name</div>
                </div>
                <div className="collegeInfo">Major: <div style={{fontWeight: "bold", display: "inline"}}>Enter Major</div></div>
                <div className="collegeInfo">Graduation Date: <div style={{fontWeight: "bold", display: "inline"}}>Enter Graduation Date</div></div>
                <div className="collegeInfo">GPA: <div style={{fontWeight: "bold", display: "inline"}}>Enter GPA</div></div>
                <div className="collegeInfo">Any additional info here</div>
            </div>
        );
    }
}

export default Education;