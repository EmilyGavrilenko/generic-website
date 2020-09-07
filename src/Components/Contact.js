import React, { Component } from 'react';
import Header from "./Header";
import RoboMakerLogo from '../images/aws_robomaker_logo.jpg';
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
  } from 'semantic-ui-react'

import '../css/Components.css';

class Contact extends Component {
    state = {}
  
    handleChange = (e, { value }) => this.setState({ value })
  
    render() {
        const { value } = this.state
        return (
            <div>
                <Header/>
                <div className="contactPg">
                    <h5 style={{fontWeight: 'bold', marginBottom: '10px'}}>Contact Form</h5>
                    <Form size='tiny'>
                        <Form.Group widths='equal'>
                            <Form.Field
                                control={Input}
                                label='First name'
                                placeholder='First name'
                            />
                            <Form.Field
                                control={Input}
                                label='Last name'
                                placeholder='Last name'
                            />
                        </Form.Group>
                        <Form.Field
                            control={Input}
                            label='Email'
                            placeholder='Email'
                        />
                        <Form.Field
                            control={Input}
                            label='Phone Number'
                            placeholder='Phone Number'
                        />
                        <Form.Field
                            control={TextArea}
                            label='Message'
                            placeholder='Your Message'
                        />
                        <Form.Field control={Button}>Send</Form.Field>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Contact;