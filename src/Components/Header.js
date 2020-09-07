import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button,} from 'react-bootstrap'; 
import '../css/About.css';

class Header extends Component {
	constructor(props) {
		super(props);
	}

    render() {
		console.log(this.props.showName)
		console.log(this.props)
		const displayName = ( this.props.showName === 'false' ? false : true )
		console.log(displayName)

        return (
            <div className="header">
				<div class="text-dark">
					{ (displayName == true) && <div className="navBarTitle" >Your name here</div>}
					{!displayName && <div style={{height: '20px'}} />}
					<div className="navBar" >
						<Navbar>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mr-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/about">About</Nav.Link>
							<Nav.Link href="/internships">Internships</Nav.Link>
							<NavDropdown title="Projects" id="basic-nav-dropdown">
								<NavDropdown.Item href="/projects/1">Project 1</NavDropdown.Item>
								<NavDropdown.Item href="/projects/2">Project 2</NavDropdown.Item>
								<NavDropdown.Item href="/projects/3">Project 3</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="/contact">Contact</Nav.Link>
							</Nav>
						</Navbar.Collapse>
						</Navbar>
					</div>
				</div> 
            </div>
        );
    }
}

export default Header;