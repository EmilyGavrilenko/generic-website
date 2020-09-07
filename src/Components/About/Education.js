import React, { Component } from 'react';
import Image from '../../me.JPG'

class Education extends Component {
    render() {
        return (
            <div className="education">
                <div className="personalInfo">
                    <div><img src={Image} alt="Picture of Me!" className = "personalImage"></img></div>
                    <div className="college">California Polytechnic State University, San Luis Obispo</div>
                </div>
                <div className="collegeInfo">Major: <div style={{fontWeight: "bold", display: "inline"}}>Computer Science</div></div>
                <div className="collegeInfo">Graduation Date: <div style={{fontWeight: "bold", display: "inline"}}>June 2022</div></div>
                <div className="collegeInfo">GPA: <div style={{fontWeight: "bold", display: "inline"}}>3.98</div></div>
                <div className="collegeInfo">President's List</div>
            </div>
        );
    }
}

export default Education;