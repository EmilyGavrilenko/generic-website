import React, { Component } from 'react';
import '../css/Home.css';
import Beach from '../beach.jpg';
import Header from "./Header";
import { Button, Icon } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom';

class Home extends Component {
    
    learnMore = () => {
        const {history} = this.props;
        if(history) history.push('/about');
    }

    render() {
        return (
            <div className="homepage">
                <div className="homepageHeader"><Header /></div>
                <div className="textContainer">
                    <div className="textItems">
                        <h3>Hi my name is</h3>
                        <h1>Emily Gavrilenko</h1>
                        <h3>and I love learning, exploring, and programming</h3>
                        <h5>I'm a Computer Science major studying at Cal Poly SLO and I'm interested in Web/App Development, Machine Learning, and Artificial Intelligence</h5>
                        <Button icon labelPosition='right' toggle basic color='black' size='tiny' onClick={this.learnMore}>
                            Learn More
                            <Icon name='right arrow' />
                        </Button>
                    </div>
                </div>
                <img src={Beach}/>
            </div>
        );
    }
}

export default withRouter(Home);