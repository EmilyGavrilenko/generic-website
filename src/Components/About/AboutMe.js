import React, { Component } from 'react';
import { Icon, List, Image } from 'semantic-ui-react'
import GitHubButton from 'react-github-button'
import LinkedInCertificate from 'react-linkedin-certification';
import GithubLogo from '../../images/GitHub_Logo.png'
import GithubCat from '../../images/GitHub_Cat.png'
import LinkedIn from '../../images/linkedin.svg'

class AboutMe extends Component {
    render() {
        return (
            <div className="aboutMePage">
                
                <div className="externalButtons">
                    <button className="externalSource">
                        <img src={GithubCat} />
                        <img src={GithubLogo} />
                    </button>

                    <button className="externalSource">
                        <img src={LinkedIn} />  
                    </button>

                    <button className="externalSource" >
                        Resume <Icon name='file alternate' />  
                    </button>
                </div>

                <p> I am currently a fourth-year mechanical engineering student at Cal Poly, 
                    San Luis Obispo. I am currently seeking an internship for Fall 2020 at a 
                    company where I can apply my hands-on experience, passion for engineering, 
                    and dedication for success. 
                </p>
                <p> Throughout my life, I always challenged myself to be involved in a variety of 
                    activities and organizations which allowed me to develop a wide range of skills. 
                    These activities include Baja SAE, Cal Poly Racing, Army ROTC, Flying, Concert and 
                    Jazz band, FIRST Robotics, Cross Country, Future Farmers of America, and National 
                    Charity League. While many of these activities will not directly impact my success 
                    as an engineer, they have developed me into the person I am today. Through my 
                    experience with each of these organizations, I met incredible people who taught me 
                    lessons about being a contributing team member, confident leader, and persistent 
                    worker.
                </p>
                <p> At Cal Poly, San Luis Obispo, I have gained engineering and leadership experience
                    on the Baja SAE team. Currently, my role is to lead the design and manufacturing of
                    our chassis for the 2020 car. I work with design leads in every subsystem on the car 
                    to run packaging studies and minimize vehicle weight. Previously, I was the team 
                    manager and through that role I organized team logistics, handled finances, and 
                    scheduled work. Not only have I expanded my knowledge about management, but I have 
                    also gained experience manufacturing parts and assisting subsystem leads with design.
                    My first year I was appointed the position of Component Fatigue Lead. My task was to 
                    design a system to track the life of each individual part on the car. This required me 
                    to communicate with each subsystem lead to ensure that no aspect was overlooked. We 
                    used the data during the design season to analyze part fatigue and reduce weight on 
                    over-built components. 
                </p>
                <p>Summer 2018, I worked as a mechanical engineering intern at General Atomics in the 
                    Electromagnetic Systems Group. During this internship, I worked on the Industrial 
                    Super-Critical Water Oxidation project in the Product Line Enhancement Group. I edited
                    engineering drawings, created excel pneumatic and hydraulic pressure drop calculators,
                    and performed component analysis on all parts in the drawings. Without having taken 
                    fluid dynamics class yet, I learned how to perform pressure drop calculations from the
                    textbook, coworkers, and other interns. This project helped me work with engineers 
                    who are involved in different aspects of the project and company including mechanical, 
                    electrical, component, design, and chemical engineers. This was a valuable experience 
                    that taught me about communicating between disciplines, fluid dynamics, component 
                    research, and communication. 
                </p>

            </div>
        );
    }
}

export default AboutMe;