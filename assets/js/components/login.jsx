"use strict";
import React from 'react/addons';
import { Input, ButtonInput } from 'react-bootstrap';
import request from 'superagent-bluebird-promise';

export default class Login extends React.Component {
    state = { error: null };
    async submit(e) {
    	e.preventDefault();
        try{
        	let result = await request
                .post('/login')
                .send({
                    email:this.refs.email.getValue(),
                    password: this.refs.password.getValue()})
            }
        catch(e){
            this.setState({error: e.body});
        }
    }
    render() {
        return <form ref="form" method="post" target="login" onSubmit={::this.submit}>
            { this.state.error ? <span className="Error">{this.state.error.message}</span> : null }
        	<Input type="text" ref="email" placeholder="Email" />
        	<Input type="password" ref="password" placeholder="Password"/>
        	<ButtonInput type='submit' value='Sign In' />
        </form>;
    }
}

