import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div className="coursework">
                <h6 className="courseworkTitle">Languages and Frameworks</h6>
                <div className="line">
                    <div className="skill">Java</div>
                    <div className="skill">Python</div>
                </div>
                <div className="line">
                    <div className="skill">C</div>
                    <div className="skill">React</div>
                </div>
                <div className="line">
                    <div className="skill">Javascript</div>
                    <div className="skill">MySQL</div>
                </div>
                <div className="line">
                    <div className="skill">Firebase</div>
                </div>

                <h6 className="courseworkTitle">AWS Services</h6>
                <div className="line">
                    <div className="skill">EC2</div>
                    <div className="skill">DynamoDB</div>
                </div>
                <div className="line">
                    <div className="skill">S3</div>
                    <div className="skill">CloudFormation</div>
                </div>
                <div className="line">
                    <div className="skill">CloudWatch</div>
                    <div className="skill">RDS</div>
                </div>
                <div className="line">
                    <div className="skill">Step Function</div>
                </div>

                <h6 className="courseworkTitle">Soft Skills</h6>
                <div className="line">
                    <div className="skill">Communication</div>
                    <div className="skill">Leadership</div>
                </div>
                <div className="line">
                    <div className="skill">Teamwork</div>
                    <div className="skill">Curiosity</div>
                </div>
                <div className="line">
                    <div className="skill">Work Ethic</div>
                </div>

                <h6 className="courseworkTitle">Career Interests</h6>
                <div className="line">
                    <div className="course">Web and App Development</div>
                    <div className="course">Robotics</div>
                </div>
                <div className="line">
                    <div className="course">Autonomous Vehicles</div>
                    <div className="course">Machine Learning</div>
                </div>
                <div className="line">
                    <div className="course">Artificial Intelligence</div>
                </div>

                <h6 className="courseworkTitle">Relevant Coursework</h6>
                <div className="course">Software Engineering</div>
                <div className="course">Systems Programming</div>
                <div className="course">Design & Analysis of Algorithms</div>
                <div className="course">Object Oriented Programming</div>
                <div className="course">Data Structures</div>
                <div className="course">Computer Architecture</div>
            </div>
        );
    }
}

export default Skills;