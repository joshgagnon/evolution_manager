"use strict";
import React from 'react/addons';
import Login from './login';

export default class Landing extends React.Component {
    static propTypes = { login: React.PropTypes.object.isRequired };
    render() {
    	console.log('landing', this.props)
        return  <Login {...this.props.login}/>
    }
}

