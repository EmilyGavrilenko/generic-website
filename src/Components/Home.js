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
                        <h1>Your name here</h1>
                        <h3>and I love 'Enter your interests here'</h3>
                        <h5>'Enter personal bio here'</h5>
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