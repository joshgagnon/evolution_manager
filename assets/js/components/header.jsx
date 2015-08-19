"use strict"
import React from 'react/addons'
import pureRender from 'pure-render-decorator';
import Router from 'react-router'
import { Navbar, Nav, NavItem, DropdownButton, MenuItem} from 'react-bootstrap';


@pureRender
export default class Main extends React.Component {
    render() {
        return <div>
			<Navbar brand='Evolution Lawyers'>
			    <Nav>
			      <NavItem eventKey={1} href='/users'>Clients</NavItem>
			      <NavItem eventKey={2} href='/matters'>Matters</NavItem>
			      <DropdownButton eventKey={3} title='Dropdown'>
			        <MenuItem eventKey='1'>Action</MenuItem>
			        <MenuItem eventKey='2'>Another action</MenuItem>
			        <MenuItem eventKey='3'>Something else here</MenuItem>
			        <MenuItem divider />
			        <MenuItem eventKey='4'>Separated link</MenuItem>
			      </DropdownButton>
			    </Nav>
			  </Navbar>
        </div>;
    }
}

