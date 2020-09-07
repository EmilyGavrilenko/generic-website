import React, { Component } from 'react';
import MyResume from '../resume.pdf';
import SampleResume from '../sample-resume.pdf';
import Header from "./Header";

class Resume extends Component {
    render() {
        return (
            <div>
                <Header showName="false"/>
                <div className="resume"><embed src={SampleResume} className="resume"></embed></div>
            </div>
        );
    }
}

export default Resume;