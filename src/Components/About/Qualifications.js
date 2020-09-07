import React, { Component } from 'react';
import Skills from "./Skills";
import Education from "./Education";

class Qualifications extends Component {
    render() {
        return (
            <div className="qualificationsPage">
                <Education />
                <Skills />
            </div>
        );
    }
}

export default Qualifications;